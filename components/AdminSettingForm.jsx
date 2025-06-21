import { useState } from "react";
export default function AdminSettingForm() {
  const [form, setForm] = useState({ orkutKey: "", okeConnectKey: "", googleClientId: "" });
  const submit = e => { e.preventDefault(); /* save API /api/admin/settings */ };
  return (
    <form className="glass p-6 rounded-xl flex flex-col space-y-4" onSubmit={submit}>
      <input value={form.orkutKey} onChange={e => setForm(f => ({ ...f, orkutKey: e.target.value }))} className="input" placeholder="Orkut API Key" />
      <input value={form.okeConnectKey} onChange={e => setForm(f => ({ ...f, okeConnectKey: e.target.value }))} className="input" placeholder="OkeConnect API Key" />
      <input value={form.googleClientId} onChange={e => setForm(f => ({ ...f, googleClientId: e.target.value }))} className="input" placeholder="Google Client ID" />
      <button className="btn bg-blue-500 text-white px-4 py-2 rounded-xl">Simpan Setting</button>
    </form>
  );
}
