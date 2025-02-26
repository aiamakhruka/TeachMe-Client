import './RatingSelector.scss'
import React, { useState } from 'react';

const RatingSelector = () => {
  const [rating, setRating] = useState(0); // Initial rating value

  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <div className="rating-selector">
      <p className="label">Select Rating:</p>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((value) => (
          <label key={value}>
            <input
              type="radio"
              name="rating"
              value={value}
              checked={rating === value}
              onChange={() => handleRatingChange(value)}
            />
            <span className="star"></span>
          </label>
        ))}
      </div>
      <p className="selected-rating">Selected Rating: {rating}</p>
    </div>
  );
};

export default RatingSelector;
