import { useEffect, useState } from "react";
import ReviewStars from "./ReviewStars";
export default function ReviewList({ productId }) {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ rating: 5, comment: "" });
  useEffect(() => {
    fetch(`/api/products/${productId}/reviews`)
      .then(res => res.json()).then(d => setReviews(d.data));
  }, [productId]);
  const submit = async e => {
    e.preventDefault();
    await fetch(`/api/products/${productId}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" }, // +token kalau butuh auth
      body: JSON.stringify(form)
    });
    setForm({ rating: 5, comment: "" });
  };
  return (
    <div className="mt-6">
      <h4 className="font-bold mb-2">Ulasan Produk</h4>
      <form className="flex gap-2 mb-4" onSubmit={submit}>
        <select value={form.rating} onChange={e => setForm(f => ({ ...f, rating: +e.target.value }))}>
          {[5,4,3,2,1].map(star => <option key={star} value={star}>{star}★</option>)}
        </select>
        <input className="flex-1 rounded p-2 border" value={form.comment}
          onChange={e => setForm(f => ({ ...f, comment: e.target.value }))} placeholder="Tulis ulasan" />
        <button type="submit" className="btn px-4 rounded bg-blue-500 text-white">Kirim</button>
      </form>
      <div className="space-y-2">
        {reviews.map((r, i) => (
          <div key={i} className="border-b pb-2">
            <ReviewStars rating={r.rating} />
            <div className="text-xs text-gray-500">{r.user?.name}</div>
            <div>{r.comment}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
