"use client";
import AdminSidebar from "@/components/AdminSidebar";
import AdminSettingForm from "@/components/AdminSettingForm";
import useAdminGuard from "@/hooks/useAdminGuard";

export default function AdminSettings() {
  useAdminGuard();
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Setting Integrasi</h1>
        <AdminSettingForm />
      </main>
    </div>
  );
}
