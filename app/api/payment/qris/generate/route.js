export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const amount = searchParams.get('amount') || '0';
  const qris = `QRIS_CODE_${amount}_${Date.now()}`;
  return Response.json({ status: true, data: { raw: qris } });
}
