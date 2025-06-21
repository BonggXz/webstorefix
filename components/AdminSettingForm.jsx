import { useState } from "react";
import { motion } from "framer-motion";
export default function AdminSettingForm() {
  const [form, setForm] = useState({ orkutKey: "", okeConnectKey: "", googleClientId: "" });
  const submit = e => { e.preventDefault(); /* save API /api/admin/settings */ };
  return (
    <form className="glass p-4 rounded-xl flex flex-col gap-3" onSubmit={submit}>
      <input value={form.orkutKey} onChange={e => setForm(f => ({ ...f, orkutKey: e.target.value }))} className="input" placeholder="Orkut API Key" />
      <input value={form.okeConnectKey} onChange={e => setForm(f => ({ ...f, okeConnectKey: e.target.value }))} className="input" placeholder="OkeConnect API Key" />
      <input value={form.googleClientId} onChange={e => setForm(f => ({ ...f, googleClientId: e.target.value }))} className="input" placeholder="Google Client ID" />
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="btn btn-blue"
      >
        Simpan Setting
      </motion.button>
    </form>
  );
}
