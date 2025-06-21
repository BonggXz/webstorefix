const REVIEWS = {};

export async function GET(request, { params }) {
  const list = REVIEWS[params.id] || [];
  return Response.json({ status: true, data: list });
}

export async function POST(request, { params }) {
  const body = await request.json();
  const review = {
    _id: Date.now().toString(),
    rating: body.rating,
    comment: body.comment,
    user: body.user || { name: 'Anonymous' }
  };
  if (!REVIEWS[params.id]) REVIEWS[params.id] = [];
  REVIEWS[params.id].push(review);
  return Response.json({ status: true, data: review }, { status: 201 });
}
