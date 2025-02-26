import React, { useState } from 'react';
import './PriceSlider.scss';

const PriceSlider = ({ handlePriceChange }) => {
  const [price, setPrice] = useState(0); // Local state for slider value

  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value);
    setPrice(value); // Update local state
    console.log(value);
    handlePriceChange(value); // Call the parent handler with the updated value
  };

  return (
    <div className="price-slider">
      <input
        type="range"
        min="30"
        max="200"
        value={price}
        onChange={handleSliderChange}
        className="slider"
      />
      <p className="price-label">Price: ${price}</p>
    </div>
  );
};

export default PriceSlider;
