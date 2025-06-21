import dynamic from "next/dynamic";
const Heatmap = dynamic(() => import("react-heatmap-grid"), { ssr: false });
export default function MyHeatmap() {
  const xLabels = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];
  const yLabels = ["00-06", "06-12", "12-18", "18-24"];
  const data = [
    [5, 10, 2, 8, 6, 4, 3],
    [7, 5, 3, 2, 8, 9, 1],
    [3, 7, 5, 2, 6, 8, 7],
    [8, 2, 4, 6, 1, 5, 9],
  ];
  return (
    <div className="glass p-6 rounded-2xl">
      <h3 className="mb-2 font-bold">Heatmap Aktivitas</h3>
      <Heatmap
        xLabels={xLabels}
        yLabels={yLabels}
        data={data}
        squares
        height={40}
        background={(value) =>
          `rgb(30, 144, 255, ${value / 10})`
        }
      />
    </div>
  );
}
