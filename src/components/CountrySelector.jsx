import React from "react";
import CurrencyToTime from "../data/CurrencyToTime.json";
import "./CountrySelector.css"; // import css file

const CountrySelector = ({ selectedCountry, setSelectedCountry }) => {
  return (
    <div className="country-selector">
      <label className="country-label">Select a Country:</label>
      <select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
        className="country-dropdown"
      >
        <option value="">-- Choose a country --</option>
        {Object.keys(CurrencyToTime).map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelector;
