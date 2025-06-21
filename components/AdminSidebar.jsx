import Link from "next/link";
export default function AdminSidebar() {
  return (
    <aside className="flex flex-col gap-4 p-4 glass rounded-2xl">
      <Link href="/admin">Dashboard</Link>
      <Link href="/admin/products">Produk</Link>
      <Link href="/admin/orders">Order</Link>
      <Link href="/admin/users">User</Link>
      <Link href="/admin/settings">Settings</Link>
    </aside>
  );
}
