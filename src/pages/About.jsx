import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <motion.h1
        className="about-heading"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ℹ️ About This Project
      </motion.h1>

      <motion.div
        className="about-card"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p>
          The <strong>Currency & Time Checker</strong> is a React-based web app
          that allows users to:
        </p>
        <ul>
          <li>🌍 Select a country to view its currency and local time</li>
          <li>⏰ Fetch live time updates with one click</li>
          <li>💱 Convert currencies easily using real-time exchange rates</li>
        </ul>
        <p>
          Built with <b>React</b>, <b>Framer Motion</b> for animations,{" "}
          <b>Axios</b> for API calls, and a custom <b>Node.js backend</b>.
        </p>
      </motion.div>
    </div>
  );
};

export default About;