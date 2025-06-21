export async function apiFetch(url, opts = {}) {
    const token = localStorage.getItem("token");
    const headers = { ...(opts.headers || {}), Authorization: token ? `Bearer ${token}` : undefined };
    const res = await fetch(url, { ...opts, headers });
    const data = await res.json();
    if (!data.status) throw new Error(data.error || "API error");
    return data.data;
  }
  