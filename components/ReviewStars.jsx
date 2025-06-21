export default function ReviewStars({ rating = 0 }) {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) =>
          <span key={i}>{i < rating ? "★" : "☆"}</span>
        )}
      </div>
    );
  }
  