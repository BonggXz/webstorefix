import { randomBytes, createHash } from 'crypto';
import { createUser, getUserByEmail } from '@/lib/db';
import { sign } from '@/lib/jwt';

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  const { email, password, name } = await request.json();
  if (!email || !password || !name) {
    return Response.json({ status: false, error: 'Data tidak lengkap' }, { status: 400 });
  }
  if (!validateEmail(email)) {
    return Response.json({ status: false, error: 'Email tidak valid' }, { status: 400 });
  }
  if (password.length < 6) {
    return Response.json({ status: false, error: 'Password minimal 6 karakter' }, { status: 400 });
  }

  const existing = await getUserByEmail(email);
  if (existing) {
    return Response.json({ status: false, error: 'Email sudah terdaftar' }, { status: 400 });
  }

  const passwordHash = createHash('sha256').update(password).digest('hex');
  const user = {
    id: randomBytes(16).toString('hex'),
    email,
    name,
    passwordHash,
    role: 'USER',
    createdAt: new Date().toISOString()
  };

  await createUser(user);

  const token = sign({ id: user.id, email: user.email }, { expiresIn: 60 * 60 * 24 * 7 });

  return Response.json({ status: true, token });
}
