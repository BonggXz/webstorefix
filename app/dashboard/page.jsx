"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import FilterBar from "@/components/FilterBar";
import SearchInput from "@/components/SearchInput";
import ProductCard from "@/components/ProductCard";
import ProductDetailModal from "@/components/ProductDetailModal";
import { PRODUCT_CATEGORIES } from "@/utils/constants";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("/api/products").then(res => res.json()).then(d => setProducts(d.data));
  }, []);

  const filtered = products
    .filter(p => !filter || p.category === filter)
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-darkBg dark:to-black">
      <Navbar />
      <div className="max-w-6xl mx-auto pt-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <FilterBar categories={PRODUCT_CATEGORIES} selected={filter} onChange={setFilter} />
          <SearchInput value={search} onChange={setSearch} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map(product => (
            <ProductCard key={product._id} product={product} onClick={setSelected} />
          ))}
        </div>
        <ProductDetailModal open={!!selected} product={selected} onClose={() => setSelected(null)} />
      </div>
    </div>
  );
}
