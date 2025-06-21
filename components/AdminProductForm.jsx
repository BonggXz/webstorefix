import { useState } from "react";
import { motion } from "framer-motion";
import ImageUpload from "./ImageUpload";
export default function AdminProductForm({ onSave, product }) {
  const [form, setForm] = useState(product || { name: "", description: "", price: "", imageUrl: "" });
  const submit = async e => {
    e.preventDefault();
    onSave && onSave(form);
  };
  return (
    <form className="glass p-4 rounded-xl mb-4 flex flex-col gap-3" onSubmit={submit}>
      <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="input" placeholder="Nama produk" required />
      <textarea value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} className="input" placeholder="Deskripsi" />
      <input value={form.price} onChange={e => setForm(f => ({ ...f, price: e.target.value }))} className="input" type="number" placeholder="Harga" required />
      <ImageUpload value={form.imageUrl} onChange={url => setForm(f => ({ ...f, imageUrl: url }))} />
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="btn btn-blue"
      >
        Simpan
      </motion.button>
    </form>
  );
}
