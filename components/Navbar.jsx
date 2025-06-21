"use client";
import ThemeToggle from "./ThemeToggle";
import NotificationBell from "./NotificationBell";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useUser from "@/hooks/useUser";

export default function Navbar() {
  const user = useUser();
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    setOpen(false);
    window.location.href = "/";
  };

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
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen((v) => !v)}
              className="font-semibold text-base flex items-center gap-2"
            >
              <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                {user.name?.[0] || "U"}
              </span>
              {user.name}
            </motion.button>
            <AnimatePresence>
              {open && (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-40 glass shadow-lg p-2 z-50"
                >
                  <Link
                    href="/profile"
                    className="block px-4 py-2 rounded hover:bg-blue-100 dark:hover:bg-zinc-700"
                    onClick={() => setOpen(false)}
                  >
                    Profil
                  </Link>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 rounded hover:bg-blue-100 dark:hover:bg-zinc-700"
                  >
                    Logout
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
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
