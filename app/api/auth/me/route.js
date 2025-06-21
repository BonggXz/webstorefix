// app/api/admin/user/route.js (atau sesuai struktur yang kamu pakai)

export async function GET() {
  return Response.json({
    status: true,
    data: {
      name: 'Demo User',
      role: 'admin'
    }
  });
}
