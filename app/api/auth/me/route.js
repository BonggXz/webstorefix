export async function GET() {
  return Response.json({ status: true, data: { name: 'Demo User', role: 'admin' } });
}
