import React, { useState } from 'react';
import './CityFilter.scss';

export const citiesByProvince = {
  Alberta: ['Calgary', 'Edmonton', 'Red Deer'],
  BritishColumbia: ['Vancouver', 'Victoria', 'Kelowna'],
  Manitoba: ['Winnipeg', 'Brandon', 'Steinbach'],
  NewBrunswick: ['Fredericton', 'Saint John', 'Moncton'],
  NewfoundlandAndLabrador: ['St. John\'s', 'Mount Pearl', 'Corner Brook'],
  NovaScotia: ['Halifax', 'Dartmouth', 'Sydney'],
  Ontario: ['Toronto', 'Ottawa', 'Hamilton'],
  PrinceEdwardIsland: ['Charlottetown', 'Summerside', 'Stratford'],
  Quebec: ['Montreal', 'Quebec City', 'Laval'],
  Saskatchewan: ['Saskatoon', 'Regina', 'Prince Albert'],
};

const CityFilter = ({ onCityChange, onProvinceChange }) => {
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');

  const handleProvincesChange = (event) => {
    const selectedProvince = event.target.value;
    setProvince(selectedProvince);

    if (selectedProvince) {
      setCity('');
      onCityChange(''); // Invoke onCityChange with empty string value
      onProvinceChange(selectedProvince); // Invoke onProvinceChange with selected province value
    } else {
      setCity('');
      onCityChange(''); // Reset city value when no province is selected
      onProvinceChange(''); // Invoke onProvinceChange with empty string value
    }
  };

  const handleCitySelection = (event) => {
    const selectedCity = event.target.value;
    setCity(selectedCity); // Update selected city state
    onCityChange(selectedCity); // Invoke onCityChange with selected city value
  };

  return (
    <div className="city-filter">
      <label htmlFor="provinceSelect">Select Province:</label>
      <select
        id="provinceSelect"
        value={province}
        onChange={handleProvincesChange}
        className="select"
      >
        <option value="">-- Select Province --</option>
        {Object.keys(citiesByProvince).map((province) => (
          <option key={province} value={province}>
            {province}
          </option>
        ))}
      </select>

      <label htmlFor="citySelect">Select City:</label>
      <select
        id="citySelect"
        disabled={!province}
        value={city}
        onChange={handleCitySelection}
        className="select"
      >
        {citiesByProvince[province] ? (
          citiesByProvince[province].map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))
        ) : (
          <option value="">-- No Cities --</option>
        )}
      </select>
    </div>
  );
};

export default CityFilter;
