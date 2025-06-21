"use client";
import { Funnel, FunnelChart, Tooltip, LabelList } from "recharts";
export default function FunnelChartComp() {
  const data = [
    { name: "Kunjungan", value: 1000 },
    { name: "View Produk", value: 600 },
    { name: "Tambah ke Cart", value: 350 },
    { name: "Pembayaran", value: 150 },
    { name: "Sukses", value: 100 },
  ];
  return (
    <div className="glass p-6 rounded-2xl">
      <h3 className="mb-2 font-bold">Conversion Funnel</h3>
      <FunnelChart width={400} height={250}>
        <Tooltip />
        <Funnel dataKey="value" data={data} isAnimationActive>
          <LabelList position="right" fill="currentColor" stroke="none" dataKey="name" className="text-darkBg" />
        </Funnel>
      </FunnelChart>
    </div>
  );
}
