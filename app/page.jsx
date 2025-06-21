import Navbar from "@/components/Navbar";
import ParallaxBackground from "@/components/ParallaxBackground";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <ParallaxBackground />
      <Navbar />
      <section className="flex flex-col items-center justify-center flex-1 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-blue-400"
        >
          Produk Digital & IT/IoT Masa Depan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-700 dark:text-gray-200 text-lg max-w-2xl mb-12 text-center"
        >
          Belanja produk digital, layanan IT, dan solusi IoT <b>futuristik</b> dengan animasi smooth, tema modern, dan pembayaran QRIS otomatis.
        </motion.p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          href="/products"
          className="px-8 py-4 rounded-xl bg-blue-500 dark:bg-neon text-white text-lg shadow-lg font-semibold"
        >
          Jelajahi Produk
        </motion.a>
      </section>
    </main>
  );
}
