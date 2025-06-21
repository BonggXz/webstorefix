import { motion } from "framer-motion";

export default function FilterBar({ categories = [], selected, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        className={`px-3 py-1 rounded ${!selected ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-darkBgSoft text-gray-800 dark:text-gray-200"}`}
        onClick={() => onChange("")}
      >
        Semua
      </button>
      {categories.map(cat => (
        <button
          key={cat}
          className={`px-3 py-1 rounded ${selected === cat ? "bg-blue-500 text-white" : "bg-gray-100 dark:bg-darkBgSoft text-gray-800 dark:text-gray-200"}`}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

