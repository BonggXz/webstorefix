import { motion } from "framer-motion";

export default function FilterBar({ categories = [], selected, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <motion.button
        whileHover={{ scale: 1.05, opacity: 0.9 }}
        whileTap={{ scale: 0.95, opacity: 0.8 }}
        className={`px-3 py-1 rounded ${!selected ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        onClick={() => onChange("")}
      >
        Semua
      </motion.button>
      {categories.map(cat => (
        <motion.button
          whileHover={{ scale: 1.05, opacity: 0.9 }}
          whileTap={{ scale: 0.95, opacity: 0.8 }}
          key={cat}
          className={`px-3 py-1 rounded ${selected === cat ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => onChange(cat)}
        >
          {cat}
        </motion.button>
      ))}
    </div>
  );
}
  