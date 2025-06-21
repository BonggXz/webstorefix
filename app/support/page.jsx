import LiveChatWidget from "@/components/LiveChatWidget";
export default function SupportPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Live Chat Support</h2>
      <div>Tim kami siap membantu 24/7 via chat di pojok kanan bawah.</div>
      <LiveChatWidget />
    </div>
  );
}
