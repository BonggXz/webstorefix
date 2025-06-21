const clicks = [];

export async function POST(request) {
  try {
    const { page, x, y } = await request.json();
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new Error('Invalid coordinates');
    }
    clicks.push({ page, x, y, ts: Date.now() });
    return Response.json({ status: true });
  } catch (err) {
    return Response.json({ status: false, error: err.message || 'Invalid request' }, { status: 400 });
  }
}

export async function GET() {
  return Response.json({ status: true, data: clicks });
}
