"use client";
import Navbar from "@/components/Navbar";
import GlassCard from "@/components/GlassCard";
import useAuth from "@/hooks/useAuth";
import { motion } from "framer-motion";
import { UserIcon, EnvelopeIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/solid";

export default function ProfilePage() {
  const user = useAuth();

  if (!user) return null;

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/auth/login";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-darkBg dark:to-black">
      <Navbar />
      <div className="max-w-md mx-auto py-12 px-4">
        <GlassCard className="space-y-6">
          <h2 className="text-xl font-bold text-center">Profil Saya</h2>
          <div className="grid gap-4">
            <div className="flex items-center gap-3">
              <UserIcon className="w-6 h-6 text-blue-500 dark:text-neon" />
              <span className="font-medium">{user.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <EnvelopeIcon className="w-6 h-6 text-blue-500 dark:text-neon" />
              <span>{user.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <ClipboardDocumentListIcon className="w-6 h-6 text-blue-500 dark:text-neon" />
              <span>0 transaksi</span>
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href="#" className="btn glass px-4 py-2 rounded border border-blue-400">
              Edit Profil
            </motion.a>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={logout} className="btn glass px-4 py-2 rounded border border-red-400">
              Logout
            </motion.button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
