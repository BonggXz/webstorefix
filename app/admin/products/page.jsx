"use client";
import { useState, useEffect } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import AdminProductForm from "@/components/AdminProductForm";
import AnimatedTable from "@/components/AnimatedTable";
import ConfirmModal from "@/components/ConfirmModal";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null), [deleting, setDeleting] = useState(null);

  useEffect(() => {
    fetch("/api/products").then(res => res.json()).then(d => setProducts(d.data));
  }, []);

  const handleSave = async (product) => {
    await fetch("/api/products" + (product._id ? `/${product._id}` : ""), {
      method: product._id ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    });
    // refresh list
  };

  const handleDelete = async (id) => {
    await fetch(`/api/products/${id}`, { method: "DELETE" });
    // refresh list
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Kelola Produk</h1>
        <AdminProductForm product={editing} onSave={handleSave} />
        <AnimatedTable
          data={products}
          columns={[
            { key: "name", label: "Nama" },
            { key: "price", label: "Harga" },
            { key: "category", label: "Kategori" },
            { key: "actions", label: "", render: p => (
              <div className="flex gap-2">
                <button className="btn" onClick={() => setEditing(p)}>Edit</button>
                <button className="btn bg-red-500 text-white" onClick={() => setDeleting(p)}>Delete</button>
              </div>
            )},
          ]}
        />
        {deleting && (
          <ConfirmModal
            open={!!deleting}
            title="Hapus Produk?"
            onConfirm={() => { handleDelete(deleting._id); setDeleting(null); }}
            onCancel={() => setDeleting(null)}
          >
            Yakin hapus produk <b>{deleting.name}</b>?
          </ConfirmModal>
        )}
      </main>
    </div>
  );
}
