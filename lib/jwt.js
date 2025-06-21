import { createHmac } from 'crypto';

const SECRET = process.env.JWT_SECRET || 'secret';

function base64url(input) {
  return Buffer.from(input).toString('base64url');
}

export function sign(payload, { expiresIn } = {}) {
  const header = { alg: 'HS256', typ: 'JWT' };
  const ts = Math.floor(Date.now() / 1000);
  const data = { ...payload };
  if (expiresIn) data.exp = ts + expiresIn;
  const headerB64 = base64url(JSON.stringify(header));
  const payloadB64 = base64url(JSON.stringify(data));
  const content = `${headerB64}.${payloadB64}`;
  const signature = createHmac('sha256', SECRET).update(content).digest('base64url');
  return `${content}.${signature}`;
}

export function verify(token) {
  if (!token) return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  const [headerB64, payloadB64, signature] = parts;
  const content = `${headerB64}.${payloadB64}`;
  const expected = createHmac('sha256', SECRET).update(content).digest('base64url');
  if (expected !== signature) return null;
  try {
    const payload = JSON.parse(Buffer.from(payloadB64, 'base64url').toString());
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch {
    return null;
  }
}
