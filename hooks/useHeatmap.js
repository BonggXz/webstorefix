import { useEffect } from "react";
export default function useHeatmap(page) {
  useEffect(() => {
    const handleClick = e => {
      const { x, y } = e;
      fetch("/api/analytics/heatmap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ page, x, y })
      }).catch(err => console.error("Heatmap error", err));
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [page]);
}
