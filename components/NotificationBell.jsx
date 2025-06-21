// NotificationBell.jsx
"use client";
import { useState } from "react";
import { BellIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";
import NotificationList from "./NotificationList";

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <motion.button whileTap={{ scale: 0.9 }} onClick={() => setOpen((v) => !v)}>
        <BellIcon className="w-6 h-6 text-blue-500 dark:text-neon" />
        <span className="absolute -top-2 -right-2 bg-pink-500 rounded-full w-4 h-4 animate-bounce border-2 border-white"></span>
      </motion.button>
      <AnimatePresence>
        {open && <NotificationList />}
      </AnimatePresence>
    </div>
  );
}