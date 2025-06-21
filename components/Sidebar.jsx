import Link from "next/link";
export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col gap-2 bg-white/60 dark:bg-zinc-900/70 shadow-lg p-4 rounded-2xl">
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/orders">Riwayat</Link>
      <Link href="/invoice">Invoice</Link>
      <Link href="/faq">FAQ</Link>
      <Link href="/support">Support</Link>
    </aside>
  );
}
