export async function GET(request, { params }) {
  if (params.id === '1') {
    return Response.json({ status: true, data: { _id: '1', product: { name: 'Sample Product' }, amount: 10000, status: 'pending' } });
  }
  return Response.json({ status: false, error: 'Not implemented' }, { status: 501 });
}
export async function DELETE() {
  return Response.json({ status: false, error: 'Not implemented' }, { status: 501 });
}
