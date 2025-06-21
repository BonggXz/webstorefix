import { motion } from "framer-motion";
export default function GlassCard({ children, className = "" }) {
  return (
    <motion.div whileHover={{ scale: 1.025 }} className={`glass rounded-2xl shadow-glass p-6 ${className}`}>
      {children}
    </motion.div>
  );
}
