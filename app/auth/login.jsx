"use client";
import { useState } from "react";
import GlassCard from "@/components/GlassCard";
import { GoogleLogin } from "@react-oauth/google";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null); 
  const [loading, setLoading] = useState(false);

  const handleLogin = async e => {
    e.preventDefault(); 
    setLoading(true); setErr(null);
    try {
      const res = await fetch("/api/auth/login", { 
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!data.status) throw new Error(data.error || "Login gagal");
      // Simpan JWT ke localStorage/cookie
      localStorage.setItem("token", data.token);
      window.location.href = "/dashboard";
    } catch (e) { setErr(e.message); }
    setLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-b from-white to-blue-100 dark:from-black dark:to-zinc-900">
      <GlassCard className="w-full max-w-md space-y-8">
        <h2 className="text-2xl font-bold text-center mb-4">Login ke FuturaShop</h2>
        <form className="space-y-6" onSubmit={handleLogin}>
          <input
            type="email"
            className="w-full px-4 py-3 rounded-lg bg-white/60 dark:bg-zinc-900/70 border outline-blue-400 transition"
            placeholder="Email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required 
          />
          <input
            type="password"
            className="w-full px-4 py-3 rounded-lg bg-white/60 dark:bg-zinc-900/70 border outline-blue-400 transition"
            placeholder="Password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            required 
          />
          {err && (
            <motion.div animate={{ scale: [0.8, 1], color: "#f43f5e" }} className="text-sm text-red-500">{err}</motion.div>
          )}
          <motion.button 
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }} 
            type="submit" 
            disabled={loading} 
            className="w-full p-3 rounded-lg bg-blue-500 text-white font-semibold mt-4"
          >
            {loading ? "Loading..." : "Login"}
          </motion.button>
        </form>
        <div className="mt-6 flex flex-col gap-2">
          <GoogleLogin
            onSuccess={credentialResponse => {
              // Kirim credentialResponse.credential ke backend endpoint /api/auth/google
              fetch("/api/auth/google", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ credential: credentialResponse.credential })
              })
              .then(res => res.json())
              .then(data => {
                if (data.token) {
                  localStorage.setItem("token", data.token);
                  window.location.href = "/dashboard";
                }
              })
              .catch(() => setErr("Login Google gagal"));
            }}
            onError={() => setErr("Login Google gagal")}
            useOneTap
          />
        </div>
      </GlassCard>
    </div>
  );
}
