import { useEffect, useState } from "react";
export default function useNotification() {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    setNotifications([]); // dummy notifikasi kosong
  }, []);
  return notifications;
}
