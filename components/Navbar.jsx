"use client";
import ThemeToggle from "./ThemeToggle";
import NotificationBell from "./NotificationBell";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 glass shadow-lg sticky top-0 z-50">
      <Link href="/" className="font-extrabold text-xl text-blue-500 dark:text-neon tracking-wider">
        FuturaShop
      </Link>
      <div className="flex items-center gap-2">
        <NotificationBell />
        <ThemeToggle />
      </div>
    </nav>
  );
}
