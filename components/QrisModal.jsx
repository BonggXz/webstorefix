import { useEffect, useState } from "react";
import QRCode from "qrcode.react";
export default function QrisModal({ open, amount, orderId, onClose }) {
  const [qris, setQris] = useState(""); const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!open) return;
    fetch(`/api/payment/qris/generate?amount=${amount}`)
      .then(res => res.json())
      .then(data => { setQris(data.data.raw); setLoading(false); });
    // Polling status
    const interval = setInterval(() => {
      fetch(`/api/payment/qris/status?orderId=${orderId}`).then(res => res.json());
    }, 5000);
    return () => clearInterval(interval);
  }, [open, amount, orderId]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60">
      <div className="glass p-8 rounded-2xl shadow-xl relative w-96">
        {loading ? <div>Memuat QRIS...</div> : <QRCode value={qris} size={180} />}
        <button onClick={onClose} className="absolute top-2 right-4 text-xl">×</button>
      </div>
    </div>
  );
}
