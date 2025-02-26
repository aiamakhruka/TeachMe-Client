import React, { useState } from 'react';
import './AgeSlider.scss';

const AgeSlider = ({ handleAgeChange }) => {
  const [age, setAge] = useState(0); // Initial price value

  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value);
    setAge(value); // Update local state
    console.log(value);
    handleAgeChange(value);
  };


  return (
    <div className="age-slider">
      <input
        type="range"
        min="25"
        max="60"
        value={age}
        onChange={handleSliderChange}
        className="slider"
      />
      <p className="age-label">Age: {age}</p>
    </div>
  );
};

export default AgeSlider;
