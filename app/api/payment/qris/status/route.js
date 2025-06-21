export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const orderId = searchParams.get('orderId');
  // Always return unpaid status in this mock implementation
  return Response.json({ status: true, data: { orderId, paid: false } });
}
