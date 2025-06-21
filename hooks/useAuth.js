import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useUser from "./useUser";
export default function useAuth(redirect = "/auth/login") {
  const user = useUser();
  const router = useRouter();
  useEffect(() => { if (!user) router.push(redirect); }, [user, router]);
  return user;
}
