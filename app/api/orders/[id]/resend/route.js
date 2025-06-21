export async function POST() {
  return Response.json({ status: false, error: 'Resend not implemented' }, { status: 501 });
}
