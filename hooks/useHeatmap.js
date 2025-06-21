import { useEffect } from "react";
export default function useHeatmap(page) {
  useEffect(() => {
    const handleClick = e => {
      const { x, y } = e;
      fetch("/api/analytics/heatmap", { method: "POST", body: JSON.stringify({ page, x, y }) });
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [page]);
}
