export async function GET() {
  return Response.json({ status: false, error: 'PDF generation not implemented' }, { status: 501 });
}
