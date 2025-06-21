import { findOrder } from '../../data';

export async function POST(request, { params }) {
  const order = findOrder(params.id);
  if (!order) {
    return Response.json({ status: false, error: 'Order not found' }, { status: 404 });
  }
  // In a real implementation this would resend the invoice via email/WhatsApp
  return Response.json({ status: true });
}
