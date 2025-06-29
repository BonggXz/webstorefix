"use client";
import { useState } from "react";
import GlassCard from "@/components/GlassCard";
import { motion } from "framer-motion";
import { successAlert, errorAlert } from "@/utils/alert";
import Link from "next/link";

export default function RegisterPage() {
  const [form, setForm] = useState({ email: "", password: "", name: "" });
  const [loading, setLoading] = useState(false);

  const handleRegister = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!data.status) {
        // Validation errors from server may come as an object
        if (typeof data.error === "object") {
          const messages = Object.values(data.error).join("\n");
          throw new Error(messages);
        }
        throw new Error(data.error || "Register gagal");
      }
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      await successAlert("Registrasi berhasil");
      window.location.href = "/dashboard";
    } catch (e) { errorAlert("Register gagal", e.message); }
    setLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-b from-white to-blue-100 dark:from-black dark:to-zinc-900">
      <GlassCard className="w-full max-w-md space-y-8">
        <h2 className="text-2xl font-bold text-center mb-4">Buat Akun FuturaShop</h2>
        <form className="space-y-4" onSubmit={handleRegister}>
          <label htmlFor="register-name" className="sr-only">
            Nama
          </label>
          <input
            id="register-name"
            type="text"
            className="w-full p-3 rounded-lg bg-white/60 dark:bg-zinc-900/70 border outline-blue-400 transition"
            placeholder="Nama"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            required
          />
          <label htmlFor="register-email" className="sr-only">
            Email
          </label>
          <input
            id="register-email"
            type="email"
            className="w-full p-3 rounded-lg bg-white/60 dark:bg-zinc-900/70 border outline-blue-400 transition"
            placeholder="Email"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            required
          />
          <label htmlFor="register-password" className="sr-only">
            Password
          </label>
          <input
            id="register-password"
            type="password"
            className="w-full p-3 rounded-lg bg-white/60 dark:bg-zinc-900/70 border outline-blue-400 transition"
            placeholder="Password"
            value={form.password}
            onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
            required
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full p-3 rounded-lg bg-blue-500 text-white font-semibold mt-4"
          >
            {loading ? "Loading..." : "Daftar"}
          </motion.button>
        </form>
        <Link
          href="/auth/login"
          className="block text-center text-sm text-blue-500 dark:text-neon hover:underline"
        >
          Sudah punya akun? Login
        </Link>
      </GlassCard>
    </div>
  );
}
