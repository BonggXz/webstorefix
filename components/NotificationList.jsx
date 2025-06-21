"use client";
import { motion } from "framer-motion";

export default function NotificationList() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute right-0 mt-2 w-72 bg-white dark:bg-zinc-800 rounded-xl shadow-lg z-50 p-4 glass"
    >
      <h4 className="font-bold mb-2">Notifikasi</h4>
      <ul>
        <li>Tidak ada notifikasi</li>
      </ul>
    </motion.div>
  );
}
