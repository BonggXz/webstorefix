export async function GET(request, { params }) {
  const { id } = params;
  if (id === '1') {
    return Response.json({ status: true, data: { _id: '1', name: 'Sample Product', description: 'Placeholder description', price: 10000, imageUrl: '/logo.svg', category: 'General' } });
  }
  return Response.json({ status: false, error: 'Not implemented' }, { status: 501 });
}
export async function PUT() {
  return Response.json({ status: false, error: 'Not implemented' }, { status: 501 });
}
export async function DELETE() {
  return Response.json({ status: false, error: 'Not implemented' }, { status: 501 });
}
