"use client";
import { useState } from "react";
import GlassCard from "@/components/GlassCard";
import { GoogleLogin } from "@react-oauth/google";
import { motion } from "framer-motion";
import { successAlert, errorAlert } from "@/utils/alert";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!data.status) throw new Error(data.error || "Login gagal");
      localStorage.setItem("token", data.token);
      await successAlert("Berhasil login");
      window.location.href = "/dashboard";
    } catch (e) { errorAlert("Login gagal", e.message); }
    setLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-b from-white to-blue-100 dark:from-black dark:to-zinc-900">
      <GlassCard className="w-full max-w-md space-y-8">
        <h2 className="text-2xl font-bold text-center mb-4">Login ke FuturaShop</h2>
        <form className="space-y-6" onSubmit={handleLogin}>
          <label htmlFor="login-email" className="sr-only">
            Email
          </label>
          <input
            id="login-email"
            type="email"
            className="w-full px-4 py-3 rounded-lg bg-white/60 dark:bg-zinc-900/70 border outline-blue-400 transition"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <label htmlFor="login-password" className="sr-only">
            Password
          </label>
          <input
            id="login-password"
            type="password"
            className="w-full px-4 py-3 rounded-lg bg-white/60 dark:bg-zinc-900/70 border outline-blue-400 transition"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="btn btn-blue w-full font-semibold mt-4"
          >
            {loading ? "Loading..." : "Login"}
          </motion.button>
        </form>
        <Link
          href="/auth/register"
          className="block text-center text-sm text-blue-500 dark:text-neon hover:underline"
        >
          Belum punya akun? Daftar
        </Link>
        <div className="mt-6 flex flex-col gap-2">
          <GoogleLogin
            onSuccess={credentialResponse => {
              fetch("/api/auth/google", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ credential: credentialResponse.credential })
              })
                .then(res => res.json())
                .then(async data => {
                  if (data.token) {
                    localStorage.setItem("token", data.token);
                    await successAlert("Berhasil login");
                    window.location.href = "/dashboard";
                  } else {
                    throw new Error();
                  }
                })
                .catch(() => errorAlert("Login Google gagal"));
            }}
            onError={() => errorAlert("Login Google gagal")}
            useOneTap
          />
        </div>
      </GlassCard>
    </div>
  );
}
