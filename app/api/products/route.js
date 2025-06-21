const PRODUCTS = [
  {
    _id: '1',
    name: 'Sample Product',
    description: 'Placeholder description',
    price: 10000,
    imageUrl: '/logo.svg',
    category: 'General'
  }
];
export async function GET() {
  return Response.json({ status: true, data: PRODUCTS });
}
export async function POST() {
  return Response.json({ status: false, error: 'Not implemented' }, { status: 501 });
}
