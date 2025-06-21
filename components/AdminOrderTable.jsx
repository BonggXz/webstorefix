import AnimatedTable from "./AnimatedTable";
export default function AdminOrderTable({ data = [], onDelete }) {
  return (
    <AnimatedTable
      data={data}
      columns={[
        { key: "createdAt", label: "Tanggal", render: o => new Date(o.createdAt).toLocaleString() },
        { key: "user", label: "User", render: o => o.user?.email },
        { key: "product", label: "Produk", render: o => o.product?.name },
        { key: "amount", label: "Nominal" },
        { key: "status", label: "Status" },
        { key: "actions", label: "", render: o => (
          <button className="btn bg-red-500 text-white" onClick={() => onDelete && onDelete(o)}>Delete</button>
        ) },
      ]}
    />
  );
}
