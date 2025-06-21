// NotificationList.jsx
import useNotification from "@/hooks/useNotification";
import { AnimatePresence, motion } from "framer-motion";
export default function NotificationList() {
  const notifications = useNotification();
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 24 }}
      className="absolute right-0 mt-2 w-72 bg-white dark:bg-zinc-800 rounded-xl shadow-lg z-50 p-4 glass"
    >
      <h4 className="font-bold mb-2">Notifikasi</h4>
      <ul className="divide-y">
        <AnimatePresence>
          {notifications.map((n, i) => (
            <motion.li key={i} initial={{ x: 24, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ opacity: 0 }} className="py-2">
              <b>{n.title}</b>
              <div className="text-xs text-gray-500">{n.time}</div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </motion.div>
  );
}