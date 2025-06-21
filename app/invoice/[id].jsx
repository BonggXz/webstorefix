"use client";
import GlassCard from "@/components/GlassCard";
import { useEffect, useState } from "react";
import InvoiceModal from "@/components/InvoiceModal";
import Navbar from "@/components/Navbar";

export default function InvoiceDetail({ params }) {
  const [invoice, setInvoice] = useState(null);
  useEffect(() => {
    fetch(`/api/orders/${params.id}`).then(res => res.json()).then(data => setInvoice(data.data));
  }, [params.id]);
  if (!invoice) return <div>Loading...</div>;
  return (
    <div>
      <Navbar />
      <GlassCard className="max-w-lg mx-auto mt-8">
        <h2 className="text-xl font-bold">Invoice</h2>
        <div>Produk: {invoice.product?.name}</div>
        <div>Jumlah: {invoice.amount}</div>
        <div>Status: {invoice.status}</div>
        <InvoiceModal invoice={invoice} />
      </GlassCard>
    </div>
  );
}
