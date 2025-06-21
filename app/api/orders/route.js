const ORDERS = [
  {
    _id: '1',
    product: { _id: '1', name: 'Sample Product' },
    amount: 10000,
    status: 'pending',
    createdAt: new Date().toISOString()
  }
];
export async function GET() {
  return Response.json({ status: true, data: ORDERS });
}
export async function POST() {
  return Response.json({ status: false, error: 'Not implemented' }, { status: 501 });
}
