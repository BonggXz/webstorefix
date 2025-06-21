"use client";
import { useEffect, useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import AdminOrderTable from "@/components/AdminOrderTable";
import ConfirmModal from "@/components/ConfirmModal";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [deleting, setDeleting] = useState(null);

  useEffect(() => {
    fetch("/api/admin/orders").then(res => res.json()).then(d => setOrders(d.data));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`/api/orders/${id}`, { method: "DELETE" });
    // refresh list
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Kelola Order</h1>
        <AdminOrderTable data={orders} onDelete={setDeleting} />
        {deleting && (
          <ConfirmModal
            open={!!deleting}
            title="Hapus Order?"
            onConfirm={() => { handleDelete(deleting._id); setDeleting(null); }}
            onCancel={() => setDeleting(null)}
          >
            Yakin hapus order <b>{deleting._id}</b>?
          </ConfirmModal>
        )}
      </main>
    </div>
  );
}
