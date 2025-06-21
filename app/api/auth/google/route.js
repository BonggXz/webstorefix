export async function POST() {
  return Response.json({ status: false, error: 'Google login not implemented' }, { status: 501 });
}
