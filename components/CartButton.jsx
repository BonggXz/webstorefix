import { ShoppingCartIcon } from "@heroicons/react/24/outline";
export default function CartButton({ onClick, count }) {
  return (
    <button className="relative p-2" onClick={onClick}>
      <ShoppingCartIcon className="w-6 h-6 text-blue-500" />
      {count > 0 && (
        <span className="absolute top-0 right-0 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">{count}</span>
      )}
    </button>
  );
}
