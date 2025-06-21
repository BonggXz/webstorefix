import AdminSidebar from "@/components/AdminSidebar";
import AdminSettingForm from "@/components/AdminSettingForm";

export default function AdminSettings() {
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
