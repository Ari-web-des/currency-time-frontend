import React from "react";
import "./Languages.css";

const Languages = ({ languages }) => {
  return (
    <div>
      <h2 className="card-title orange">🗣 Languages</h2>
      {languages && languages.length > 0 ? (
        <ul className="languages-list">
          {languages.map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>
      ) : (
        <p>No language data available</p>
      )}
    </div>
  );
};

export default Languages;