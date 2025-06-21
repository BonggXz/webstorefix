"use client";
import { useEffect, useState } from "react";
import ReviewList from "@/components/ReviewList";
import GlassCard from "@/components/GlassCard";
import QrisModal from "@/components/QrisModal";
import Navbar from "@/components/Navbar";

export default function ProductDetail({ params }) {
  const [product, setProduct] = useState(null);
  const [showQris, setShowQris] = useState(false);

  useEffect(() => {
    fetch(`/api/products/${params.id}`).then(res => res.json()).then(data => setProduct(data.data));
  }, [params.id]);
  if (!product) return <div>Loading...</div>;
  return (
    <div>
      <Navbar />
      <GlassCard className="max-w-xl mx-auto mt-8">
        <img src={product.imageUrl} className="w-full rounded-xl mb-4" alt={product.name} />
        <h2 className="font-bold text-2xl">{product.name}</h2>
        <p>{product.description}</p>
        <button className="btn bg-blue-500 mt-4 text-white px-6 py-2 rounded-xl" onClick={() => setShowQris(true)}>
          Beli Sekarang
        </button>
        <ReviewList productId={params.id} />
      </GlassCard>
      <QrisModal open={showQris} amount={product.price} orderId={product._id} onClose={() => setShowQris(false)} />
    </div>
  );
}
