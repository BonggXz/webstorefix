"use client";
import AdminSidebar from "@/components/AdminSidebar";
import AnimatedChart from "@/components/AnimatedChart";
import useAdminGuard from "@/hooks/useAdminGuard";

export default function AdminDashboard() {
  useAdminGuard();
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Dashboard Admin</h1>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="glass p-4">Penjualan hari ini: Rp xxx</div>
          <div className="glass p-4">User aktif: xxx</div>
          <div className="glass p-4">Order baru: xx</div>
        </div>
        <AnimatedChart data={[]} />
      </main>
    </div>
  );
}
