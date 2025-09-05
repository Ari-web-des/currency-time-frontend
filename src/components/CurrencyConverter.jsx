import { useState } from "react";
import axios from "axios";
import CurrencyToTime from "../data/CurrencyToTime.json";
import "./CurrencyConverter.css";

function CurrencyConverter({ baseCurrency }) {
  const [amount, setAmount] = useState(1);
  const [targetCurrency, setTargetCurrency] = useState("USD");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleConvert = async () => {
    if (!baseCurrency) {
      setError("Please select a base currency first.");
      return;
    }
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await axios.get(
        `http://localhost:5000/convert?from=${baseCurrency}&to=${targetCurrency}&amount=${amount}`
      );
      setResult(res.data);
    } catch (err) {
      console.error("Currency conversion error:", err);
      setError("Conversion failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="converter-container">
      <h2 className="converter-title">💱 Currency Converter</h2>

      {/* Amount input */}
      <div className="converter-input-group">
        <input
          type="number"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
            setResult(null);
          }}
          className="converter-input"
        />
        <span className="converter-currency">{baseCurrency}</span>
      </div>

      {/* Country/Currency selector */}
      <div className="converter-select-group">
        <select
          value={targetCurrency}
          onChange={(e) => {
            setTargetCurrency(e.target.value);
            setResult(null);
          }}
          className="converter-select"
        >
          {Object.entries(CurrencyToTime).map(([country, data]) => (
            <option key={country} value={data.currency}>
              {country} ({data.currency})
            </option>
          ))}
        </select>
      </div>

      {/* Convert button */}
      <button
        onClick={handleConvert}
        disabled={loading}
        className={`converter-btn ${loading ? "disabled" : ""}`}
      >
        {loading ? "Converting..." : "Convert"}
      </button>

      {/* Error */}
      {error && <p className="converter-error">{error}</p>}

      {/* Result */}
      {result && !error && (
        <div className="converter-result">
          <p className="result-main">
            {amount} {baseCurrency} ={" "}
            <b className="result-highlight">
              {result.converted} {targetCurrency}
            </b>
          </p>
          <p className="result-sub">
            Rate: 1 {baseCurrency} = {result.rate} {targetCurrency}
          </p>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
