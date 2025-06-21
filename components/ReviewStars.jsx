import { StarIcon as StarSolid } from "@heroicons/react/24/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";

export default function ReviewStars({ rating = 0 }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) =>
        i < rating ? (
          <StarSolid
            key={i}
            className="w-6 h-6 text-yellow-400 dark:text-yellow-300"
          />
        ) : (
          <StarOutline
            key={i}
            className="w-6 h-6 text-gray-400 dark:text-gray-600"
          />
        )
      )}
    </div>
  );
}
  