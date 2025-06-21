import { getUserById } from '@/lib/db';
import { verify } from '@/lib/jwt';

export async function GET(request) {
  const auth = request.headers.get('authorization') || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : null;
  const payload = verify(token);
  if (!payload) {
    return Response.json({ status: false, error: 'Unauthorized' }, { status: 401 });
  }
  const user = await getUserById(payload.id);
  if (!user) {
    return Response.json({ status: false, error: 'Unauthorized' }, { status: 401 });
  }
  const { passwordHash, ...data } = user;
  return Response.json({ status: true, data });
}
