import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InvoiceModal({ invoice }) {
  const [open, setOpen] = useState(true);
  const downloadPdf = () => window.open(`/api/orders/${invoice._id}/pdf`, "_blank");
  const resend = () => fetch(`/api/orders/${invoice._id}/resend`, { method: "POST" });

  if (!open) return null;
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
        <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
          className="glass p-8 rounded-2xl shadow-xl relative w-[420px]">
          <button onClick={() => setOpen(false)} className="absolute top-3 right-4 text-2xl">×</button>
          <h3 className="font-bold text-lg mb-2">Invoice Detail</h3>
          <div>ID: {invoice._id}</div>
          <div>Produk: {invoice.product?.name}</div>
          <div>Harga: Rp {invoice.amount?.toLocaleString()}</div>
          <div>Status: {invoice.status}</div>
          <div className="flex gap-4 mt-4">
            <button onClick={downloadPdf} className="btn glass px-3 py-2 rounded border border-blue-400">Download PDF</button>
            <button onClick={resend} className="btn glass px-3 py-2 rounded border border-green-500">Kirim Ulang WhatsApp</button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
