import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import CurrencyConverter from "./components/CurrencyConverter";
import CountrySelector from "./components/CountrySelector";
import Languages from "./components/Languages";
import CurrencyToTime from "./data/CurrencyToTime.json";
import TimeFetcher from "./components/TimeFetcher";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Features from "./pages/Features";
import Faq from "./pages/Faq";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [time, setTime] = useState("");
  const [currency, setCurrency] = useState("");

  useEffect(() => {
    if (!selectedCountry) return;

    const { currency, timezone } = CurrencyToTime[selectedCountry];
    setCurrency(currency);

    axios
      .get(`http://localhost:5000/time?timezone=${timezone}`)
      .then((res) => setTime(res.data.datetime))
      .catch((err) => console.error(err));
  }, [selectedCountry]);


return (
    <Router>
      <div className="app-container">
        {/* Navbar always visible */}
        <Navbar />

        {/* Main content */}
        <main className="main-content">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <div className="content-wrapper">
                  {/* Animated Heading */}
                  <motion.h1
                    className="heading"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    🌍 Currency & Time Checker
                  </motion.h1>

                  {/* Country Selector */}
                  <motion.div
                    className="selector-wrapper"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <CountrySelector
                      selectedCountry={selectedCountry}
                      setSelectedCountry={setSelectedCountry}
                      setCurrency={setCurrency}
                      setTime={setTime}
                    />
                  </motion.div>

                  {/* Details & Cards */}
                  {selectedCountry && (
                    <>
                      <motion.div
                        className="card-grid"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                      >
                        {/* Country Info */}
                        <motion.div
                          className="card"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <h2 className="card-title blue">Country Info</h2>
                          <p><b>Country:</b> {selectedCountry}</p>
                          <p><b>Currency:</b> {currency}</p>
                        </motion.div>

                        {/* Live Time */}
                        <motion.div
                          className="card"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <h2 className="card-title green">Live Time</h2>
                          <p><b>Local Time:</b> {time}</p>
                          <TimeFetcher timezone={CurrencyToTime[selectedCountry].timezone} />
                        </motion.div>
                      </motion.div>
                      {/* Languages */}
                      <motion.div
                        className="languages-card"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        >
                        <Languages languages={CurrencyToTime[selectedCountry].languages} />
                      </motion.div>

                      {/* Currency Converter */}
                      <motion.div
                        className="converter-card"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                      >
                        <h2 className="card-title purple">💱 Currency Converter</h2>
                        <CurrencyConverter baseCurrency={currency} />
                      </motion.div>

                    </>
                  )}
                </div>
              }
            />
            {/* Features Page */}
            <Route path="/features" element={<Features />} />

            {/* FAQ Page */}
            <Route path="/faq" element={<Faq />} /> 
            {/* About Page */}
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}



export default App;
