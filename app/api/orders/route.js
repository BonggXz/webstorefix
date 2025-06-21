import { getOrders, addOrder } from './data';

export async function GET() {
  return Response.json({ status: true, data: getOrders() });
}

export async function POST(request) {
  const body = await request.json();
  const newOrder = {
    _id: Date.now().toString(),
    product: body.product,
    amount: body.amount,
    status: 'pending',
    createdAt: new Date().toISOString()
  };
  addOrder(newOrder);
  return Response.json({ status: true, data: newOrder }, { status: 201 });
}
