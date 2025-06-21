"use client";
import Navbar from "@/components/Navbar";
import GlassCard from "@/components/GlassCard";
import useAuth from "@/hooks/useAuth";
import useUser from "@/hooks/useUser";

export default function ProfilePage() {
  const authUser = useAuth();
  const { user, logout } = useUser();
  if (!authUser) return null;
  return (
    <div>
      <Navbar />
      <div className="p-8">
        <GlassCard className="max-w-md mx-auto">
          <h2 className="text-xl font-bold mb-4">Profil</h2>
          <div className="mb-2">Nama: {user?.name}</div>
          <div className="mb-4">Role: {user?.role}</div>
          <button className="btn" onClick={logout}>Logout</button>
        </GlassCard>
      </div>
    </div>
  );
}
