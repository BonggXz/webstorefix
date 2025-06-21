"use client";
import { useEffect } from "react";
export default function LiveChatWidget() {
  useEffect(() => {
    window.$crisp = []; window.CRISP_WEBSITE_ID = "YOUR-CRISP-ID";
    const d = document, s = d.createElement("script");
    s.src = "https://client.crisp.chat/l.js"; s.async = 1; d.getElementsByTagName("head")[0].appendChild(s);
  }, []);
  return null;
}
