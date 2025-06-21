import { useCallback } from "react";
export default function useApi() {
  return useCallback(async (url, opts = {}) => {
    const token = localStorage.getItem("token");
    const headers = { ...(opts.headers || {}), Authorization: token ? `Bearer ${token}` : undefined };
    const res = await fetch(url, { ...opts, headers });
    const data = await res.json();
    if (!data.status) throw new Error(data.error || "Error API");
    return data.data;
  }, []);
}
