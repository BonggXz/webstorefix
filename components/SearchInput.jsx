export default function SearchInput({ value, onChange, placeholder = "Cari..." }) {
    return (
      <input
        type="search"
        className="w-full max-w-xs rounded border p-2 focus:outline-blue-400"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    );
  }
  