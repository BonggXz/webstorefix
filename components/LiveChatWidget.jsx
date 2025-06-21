"use client";
import { useEffect } from "react";
import { errorAlert } from "@/utils/alert";
export default function LiveChatWidget() {
  useEffect(() => {
    const crispId = process.env.NEXT_PUBLIC_CRISP_ID;
    if (!crispId) {
      errorAlert(
        "Crisp chat disabled",
        "NEXT_PUBLIC_CRISP_ID environment variable not set."
      );
      return;
    }
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = crispId;
    const d = document,
      s = d.createElement("script");
    s.src = "https://client.crisp.chat/l.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
  }, []);
  return null;
}
