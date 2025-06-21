import { motion } from "framer-motion";
export default function AnimatedTable({ data = [], columns }) {
  return (
    <div className="overflow-x-auto rounded-xl glass shadow-glass">
      <table className="min-w-full table-auto text-sm">
        <thead>
          <tr>
            {columns?.map((col, i) => (
              <th key={i} className="py-3 px-4 font-semibold">{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns?.length || 1} className="text-center py-10 text-gray-500">Data kosong</td>
            </tr>
          ) : data.map((row, idx) => (
            <motion.tr
              key={idx}
              whileHover={{ scale: 1.02, backgroundColor: "#f0f4ff" }}
              className="transition-all"
            >
              {columns.map((col, i) => (
                <td key={i} className="px-4 py-2">{col.render ? col.render(row) : row[col.key]}</td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
