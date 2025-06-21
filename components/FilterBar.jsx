export default function FilterBar({ categories = [], selected, onChange }) {
    return (
      <div className="flex flex-wrap gap-2 mb-6">
        <button className={`px-3 py-1 rounded ${!selected ? "bg-blue-500 text-white" : "bg-darkBgSoft dark:text-white"}`} onClick={() => onChange("")}>Semua</button>
        {categories.map(cat => (
          <button
            key={cat}
            className={`px-3 py-1 rounded ${selected === cat ? "bg-blue-500 text-white" : "bg-darkBgSoft dark:text-white"}`}
            onClick={() => onChange(cat)}
          >{cat}</button>
        ))}
      </div>
    );
  }
  