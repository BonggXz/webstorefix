"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import AnimatedTable from "@/components/AnimatedTable";
import InvoiceModal from "@/components/InvoiceModal";
import SearchInput from "@/components/SearchInput";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]), [search, setSearch] = useState(""), [selected, setSelected] = useState(null);
  useEffect(() => {
    fetch("/api/orders").then(res => res.json()).then(d => setOrders(d.data));
  }, []);
  const filtered = orders.filter(o =>
    o.product?.name?.toLowerCase().includes(search.toLowerCase()) || o._id.includes(search)
  );
  return (
    <div>
      <Navbar />
      <div className="p-8">
        <div className="flex gap-2 mb-4">
          <SearchInput value={search} onChange={setSearch} placeholder="Cari order/invoice..." />
        </div>
        <AnimatedTable
          data={filtered}
          columns={[
            { key: "createdAt", label: "Tanggal", render: o => new Date(o.createdAt).toLocaleString() },
            { key: "product", label: "Produk", render: o => o.product?.name },
            { key: "amount", label: "Nominal" },
            { key: "status", label: "Status" },
            { key: "actions", label: "", render: o => <button className="btn" onClick={() => setSelected(o)}>Detail</button> },
          ]}
        />
        {selected && <InvoiceModal invoice={selected} />}
      </div>
    </div>
  );
}
