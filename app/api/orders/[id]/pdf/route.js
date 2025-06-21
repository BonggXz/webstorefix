import { findOrder } from '../../data';

export async function GET(request, { params }) {
  const order = findOrder(params.id);
  if (!order) {
    return Response.json({ status: false, error: 'Order not found' }, { status: 404 });
  }
  const content = `PDF for order ${order._id}`;
  return new Response(content, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="invoice-${order._id}.pdf"`
    }
  });
}
