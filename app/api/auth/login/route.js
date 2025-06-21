import { createHash } from 'crypto';
import { getUserByEmail } from '@/lib/db';
import { sign } from '@/lib/jwt';

export async function POST(request) {
  const { email, password } = await request.json();
  if (!email || !password) {
    return Response.json({ status: false, error: 'Email dan password wajib' }, { status: 400 });
  }
  const user = await getUserByEmail(email);
  if (!user) {
    return Response.json({ status: false, error: 'User tidak ditemukan' }, { status: 401 });
  }
  const hash = createHash('sha256').update(password).digest('hex');
  if (user.passwordHash !== hash) {
    return Response.json({ status: false, error: 'Password salah' }, { status: 401 });
  }
  const token = sign({ id: user.id, email: user.email }, { expiresIn: 60 * 60 * 24 * 7 });
  return Response.json({ status: true, token });
}
