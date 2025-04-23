import React, { useState, useEffect } from 'react';

const FilterComponent = ({ onFilter }) => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);

  
  useEffect(() => {
   
    setCities(['New York', 'Los Angeles', 'Chicago', 'Miami']);
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
    onFilter(name, city); 
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    onFilter(name, e.target.value); 
  };

  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Search by name"
        value={name}
        onChange={handleNameChange}
      />
      <select value={city} onChange={handleCityChange}>
        <option value="">Select a city</option>
        {cities.map((cityName, index) => (
          <option key={index} value={cityName}>
            {cityName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterComponent;
