import { motion, AnimatePresence } from "framer-motion";
export default function ConfirmModal({ open, onConfirm, onCancel, title = "Konfirmasi", children }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <motion.div initial={{ scale: 0.92 }} animate={{ scale: 1 }} exit={{ scale: 0.92 }}
            className="glass rounded-xl p-8 min-w-[300px]">
            <h3 className="font-bold mb-3">{title}</h3>
            <div className="mb-4">{children}</div>
            <div className="flex gap-4">
              <button className="btn px-3 py-1 bg-blue-500 text-white rounded" onClick={onConfirm}>Ya</button>
              <button className="btn px-3 py-1 glass border rounded" onClick={onCancel}>Tidak</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
