import AnimatedTable from "./AnimatedTable";
export default function AdminUserTable({ data = [] }) {
  return (
    <AnimatedTable
      data={data}
      columns={[
        { key: "email", label: "Email" },
        { key: "name", label: "Nama" },
        { key: "role", label: "Role" },
        { key: "createdAt", label: "Daftar", render: u => new Date(u.createdAt).toLocaleString() },
      ]}
    />
  );
}
