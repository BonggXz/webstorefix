"use client";
import GlassCard from "@/components/GlassCard";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import InvoiceModal from "@/components/InvoiceModal";

export default function OrderDetail({ params }) {
  const [order, setOrder] = useState(null);
  const [showInvoice, setShowInvoice] = useState(false);
  useEffect(() => {
    fetch(`/api/orders/${params.id}`).then(res => res.json()).then(data => setOrder(data.data));
  }, [params.id]);
  if (!order) return <div>Loading...</div>;
  return (
    <div>
      <Navbar />
      <GlassCard className="max-w-lg mx-auto mt-8">
        <h2 className="text-xl font-bold">Detail Order</h2>
        <div>Produk: {order.product?.name}</div>
        <div>Jumlah: {order.amount}</div>
        <div>Status: {order.status}</div>
        <div>QR: <a href={order.qrUrl} target="_blank">Lihat QRIS</a></div>
        <button className="btn bg-blue-500 text-white mt-4" onClick={() => setShowInvoice(true)}>Lihat Invoice</button>
      </GlassCard>
      {showInvoice && <InvoiceModal invoice={order} />}
    </div>
  );
}
