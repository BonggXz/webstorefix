import GlassCard from "@/components/GlassCard";
export default function FAQPage() {
  const faqs = [
    { q: "Bagaimana cara beli?", a: "Pilih produk dan klik tombol Beli, lalu ikuti instruksi pembayaran." },
    { q: "Apa saja metode pembayaran?", a: "QRIS, Transfer, Virtual Account, dsb." },
    { q: "Bagaimana menghubungi support?", a: "Klik menu Support dan gunakan live chat." },
    { q: "Apakah transaksi saya aman?", a: "Semua pembayaran diverifikasi otomatis oleh sistem." }
  ];
  return (
    <div className="max-w-2xl mx-auto py-16">
      <h1 className="text-2xl font-bold mb-6">FAQ</h1>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <GlassCard key={i} className="p-4">
            <div className="font-semibold">{faq.q}</div>
            <div className="text-gray-600">{faq.a}</div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
