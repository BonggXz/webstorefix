import { randomBytes } from 'crypto';
import { createUser, getUserByEmail } from '@/lib/db';
import { sign } from '@/lib/jwt';

export async function POST(request) {
  const { credential } = await request.json();
  if (!credential) {
    return Response.json({ status: false, error: 'Credential tidak valid' }, { status: 400 });
  }
  try {
    const payloadPart = credential.split('.')[1];
    const payload = JSON.parse(Buffer.from(payloadPart, 'base64').toString());
    const email = payload.email;
    const name = payload.name || payload.given_name || 'Google User';
    if (!email) throw new Error('invalid');

    let user = await getUserByEmail(email);
    if (!user) {
      user = {
        id: randomBytes(16).toString('hex'),
        email,
        name,
        passwordHash: null,
        role: 'USER',
        createdAt: new Date().toISOString()
      };
      await createUser(user);
    }

    const token = sign({ id: user.id, email: user.email }, { expiresIn: 60 * 60 * 24 * 7 });
    return Response.json({ status: true, token });
  } catch {
    return Response.json({ status: false, error: 'Credential tidak valid' }, { status: 400 });
  }
}
