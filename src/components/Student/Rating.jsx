import React, { useCallback, useEffect, useState } from "react";

const Rating = ({ initialState, onRate }) => {
  const [rating, setRating] = useState(initialState || 0);
  const handleRating = (value) => {
    setRating(value);
    if (onRate) onRate(value);
  };

  useCallback(() => {
    if (initialState) {
      setRating(initialState);
    }
  }, [setRating, initialState]);

  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            onClick={() => handleRating(starValue)}
            className={`text-xl sm:text-2xl cursor-pointer transition-colors ${
              starValue <= rating ? "text-yellow-500" : "text-gray-400"
            }`}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
