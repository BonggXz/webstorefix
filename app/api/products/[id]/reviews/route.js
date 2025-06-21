export async function GET() {
  return Response.json({ status: true, data: [] });
}
export async function POST() {
  return Response.json({ status: false, error: 'Not implemented' }, { status: 501 });
}
