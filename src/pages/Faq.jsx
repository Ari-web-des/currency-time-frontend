import React from "react";
import "./PageStyles.css";

const Faq = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">❓ FAQ</h1>
      <div className="faq-list">
        <div className="faq-item">
          <h3>🔹 How accurate is the currency data?</h3>
          <p>We fetch live exchange rates from reliable APIs to ensure accuracy.</p>
        </div>
        <div className="faq-item">
          <h3>🔹 How often is the time updated?</h3>
          <p>The local time is pulled directly from a world time API whenever refreshed.</p>
        </div>
        <div className="faq-item">
          <h3>🔹 Can I use this for all countries?</h3>
          <p>Yes, most countries and their currencies are supported in our database.</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
