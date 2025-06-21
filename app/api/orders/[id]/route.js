import { findOrder, removeOrder } from '../data';

export async function GET(request, { params }) {
  const order = findOrder(params.id);
  if (!order) {
    return Response.json({ status: false, error: 'Order not found' }, { status: 404 });
  }
  return Response.json({ status: true, data: order });
}

export async function DELETE(request, { params }) {
  const ok = removeOrder(params.id);
  if (!ok) {
    return Response.json({ status: false, error: 'Order not found' }, { status: 404 });
  }
  return Response.json({ status: true });
}
