import Heatmap from "@/components/Heatmap";
import FunnelChart from "@/components/FunnelChart";

export default function AnalyticsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Analytics Pengguna</h1>
      <div className="mb-8"><Heatmap /></div>
      <div><FunnelChart /></div>
    </div>
  );
}
