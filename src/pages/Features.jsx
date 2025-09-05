import React from "react";
import "./PageStyles.css";

const Features = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">✨ Features</h1>
      <div className="features-grid">
        <div className="feature-card">
          <h2>🌍 Country Info</h2>
          <p>Get detailed information about countries, their currency, and local timezone.</p>
        </div>
        <div className="feature-card">
          <h2>⏰ Live Time</h2>
          <p>Check the exact current time in any country with a single click.</p>
        </div>
        <div className="feature-card">
          <h2>💱 Currency Converter</h2>
          <p>Convert between different currencies with live exchange rates.</p>
        </div>
        <div className="feature-card">
          <h2>🗣 Languages</h2>
          <p>Discover the official and widely spoken languages of each country.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
