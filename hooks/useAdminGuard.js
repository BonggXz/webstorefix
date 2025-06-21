import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useAuth from "./useAuth";

export default function useAdminGuard() {
  const user = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && user.role !== "admin") {
      router.replace("/403");
    }
  }, [user, router]);

  return user;
}
