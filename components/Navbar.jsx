"use client";
import ThemeToggle from "./ThemeToggle";
import NotificationBell from "./NotificationBell";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-4 glass shadow-glass sticky top-0 z-50 backdrop-blur-2xl">
      <Link href="/" className="font-extrabold text-2xl text-blue-500 dark:text-neon tracking-wider select-none">
        FuturaShop
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/products" className="font-semibold text-base hover:text-blue-500 dark:hover:text-neon transition">
          Produk
        </Link>
        <Link href="/auth/login" className="font-semibold text-base hover:text-blue-500 dark:hover:text-neon transition">
          Login
        </Link>
        <NotificationBell />
        <ThemeToggle />
      </div>
    </nav>
  );
}
