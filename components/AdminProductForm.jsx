import { useState } from "react";
import ImageUpload from "./ImageUpload";
export default function AdminProductForm({ onSave, product }) {
  const [form, setForm] = useState(product || { name: "", description: "", price: "", imageUrl: "" });
  const submit = async e => {
    e.preventDefault();
    onSave && onSave(form);
  };
  return (
    <form className="glass p-6 rounded-xl mb-4 flex flex-col space-y-4" onSubmit={submit}>
      <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="input" placeholder="Nama produk" required />
      <textarea value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} className="input" placeholder="Deskripsi" />
      <input value={form.price} onChange={e => setForm(f => ({ ...f, price: e.target.value }))} className="input" type="number" placeholder="Harga" required />
      <ImageUpload value={form.imageUrl} onChange={url => setForm(f => ({ ...f, imageUrl: url }))} />
      <button type="submit" className="btn bg-blue-500 text-white px-4 py-2 rounded-xl">Simpan</button>
    </form>
  );
}
