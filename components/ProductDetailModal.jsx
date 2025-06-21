import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import QrisModal from "./QrisModal";
export default function ProductDetailModal({ open, product, onClose }) {
  const [showQris, setShowQris] = useState(false);
  if (!open || !product) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
      >
        <motion.div
          initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
          className="glass rounded-xl p-8 max-w-lg w-full relative"
        >
          <button onClick={onClose} className="absolute top-4 right-6 text-2xl">&times;</button>
          <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="mb-2">{product.description}</p>
          <div className="font-bold text-blue-600 dark:text-neon text-xl mb-4">Rp {product.price.toLocaleString()}</div>
          <div className="flex gap-2 mb-4">
            <button className="btn bg-blue-500 text-white rounded-lg px-4 py-2" onClick={() => setShowQris(true)}>Bayar QRIS</button>
            <button className="btn glass border px-4 py-2">Bayar Transfer/VA</button>
          </div>
          {showQris && (
            <QrisModal open={showQris} amount={product.price} orderId={product._id} onClose={() => setShowQris(false)} />
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
