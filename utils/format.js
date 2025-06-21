export function formatDate(dt) {
    return new Date(dt).toLocaleDateString("id-ID", { year: "numeric", month: "short", day: "numeric" });
  }
  export function formatCurrency(amount) {
    return "Rp " + (amount || 0).toLocaleString("id-ID");
  }
  