"use client";
import { useEffect } from "react";
import { successAlert } from "@/utils/alert";

export default function LogoutPage() {
  useEffect(() => {
    localStorage.removeItem("token");
    successAlert("Berhasil logout").then(() => {
      window.location.href = "/auth/login";
    });
  }, []);

  return null;
}
