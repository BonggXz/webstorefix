"use client";
import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import NotificationBell from "./NotificationBell";
import useUser from "@/hooks/useUser";

export default function Navbar() {
  const { user, logout } = useUser();
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-4 glass shadow-glass sticky top-0 z-50 backdrop-blur-2xl">
      <Link href="/" className="font-extrabold text-2xl text-blue-500 dark:text-neon tracking-wider select-none">
        FuturaShop
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/products" className="font-semibold text-base hover:text-blue-500 dark:hover:text-neon transition">
          Produk
        </Link>
        {user ? (
          <div className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className="font-semibold text-base hover:text-blue-500 dark:hover:text-neon transition"
            >
              {user.name}
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-zinc-800 rounded-xl shadow-lg z-50 p-2 glass">
                <Link
                  href="/profile"
                  className="block px-4 py-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700"
                  onClick={() => setOpen(false)}
                >
                  Profil
                </Link>
                <button
                  onClick={() => {
                    setOpen(false);
                    logout();
                  }}
                  className="block w-full text-left px-4 py-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/auth/login" className="font-semibold text-base hover:text-blue-500 dark:hover:text-neon transition">
            Login
          </Link>
        )}
        <NotificationBell />
        <ThemeToggle />
      </div>
    </nav>
  );
}
