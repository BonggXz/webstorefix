import { motion } from "framer-motion";
import ReviewStars from "./ReviewStars";
export default function ProductCard({ product, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0 8px 32px #8ecafe22" }}
      className="glass rounded-xl shadow-md p-4 cursor-pointer transition-all"
      onClick={() => onClick && onClick(product)}
    >
      <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-2" />
      <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-200 mb-2">{product.description}</p>
      <div className="flex justify-between items-center mt-3">
        <span className="font-bold text-blue-500 dark:text-neon">Rp {product.price.toLocaleString()}</span>
        <ReviewStars rating={product.rating} />
      </div>
    </motion.div>
  );
}
