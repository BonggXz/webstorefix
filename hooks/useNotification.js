import { useEffect, useState } from "react";
export default function useNotification() {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    const fetchNotif = () => fetch("/api/notifications")
      .then(r => r.json()).then(d => setNotifications(d.data || []));
    fetchNotif();
    const interval = setInterval(fetchNotif, 5000);
    return () => clearInterval(interval);
  }, []);
  return notifications;
}
