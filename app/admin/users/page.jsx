"use client";
import { useEffect, useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import AdminUserTable from "@/components/AdminUserTable";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/admin/users").then(res => res.json()).then(d => setUsers(d.data));
  }, []);

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Kelola Pengguna</h1>
        <AdminUserTable data={users} />
      </main>
    </div>
  );
}
