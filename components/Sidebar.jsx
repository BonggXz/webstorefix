"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  ClockIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  LifebuoyIcon,
  Squares2X2Icon,
  CubeIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import useUser from "@/hooks/useUser";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const user = useUser();

  const items = [
    { href: "/dashboard", label: "Dashboard", icon: HomeIcon },
    { href: "/orders", label: "Riwayat", icon: ClockIcon },
    { href: "/invoice", label: "Invoice", icon: DocumentTextIcon },
    { href: "/faq", label: "FAQ", icon: QuestionMarkCircleIcon },
    { href: "/support", label: "Support", icon: LifebuoyIcon },
  ];

  if (user?.role === "admin") {
    items.push(
      { href: "/admin", label: "Admin", icon: Squares2X2Icon },
      { href: "/admin/products", label: "Produk", icon: CubeIcon },
      { href: "/admin/orders", label: "Order", icon: ClipboardDocumentListIcon },
      { href: "/admin/users", label: "User", icon: UserGroupIcon },
      { href: "/admin/settings", label: "Settings", icon: Cog6ToothIcon }
    );
  }

  const linkClass = "flex items-center gap-3 py-2 px-2 rounded hover:bg-blue-50 dark:hover:bg-zinc-800";

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-40 glass p-2 rounded-xl shadow-glass"
        onClick={() => setOpen(true)}
        aria-label="Open sidebar"
      >
        <Bars3Icon className="w-6 h-6 text-blue-500 dark:text-neon" />
      </button>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-0 z-50 flex"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween" }}
              className="w-64 glass shadow-glass backdrop-blur-2xl p-4 flex flex-col gap-2"
            >
              <div className="flex justify-end mb-2">
                <button onClick={() => setOpen(false)} aria-label="Close sidebar">
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>
              {items.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={linkClass}
                >
                  <Icon className="w-5 h-5" />
                  {label}
                </Link>
              ))}
            </motion.div>
            {/* overlay */}
            <div className="flex-1" onClick={() => setOpen(false)} />
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col gap-2 glass shadow-glass p-4 rounded-2xl backdrop-blur-2xl">
        {items.map(({ href, label, icon: Icon }) => (
          <Link key={href} href={href} className={linkClass}>
            <Icon className="w-5 h-5" />
            {label}
          </Link>
        ))}
      </aside>
    </>
  );
}
