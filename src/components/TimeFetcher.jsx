import React, { useState } from "react";
import axios from "axios";
import "./LocalTime.css";

const TimeFetcher = ({ timezone }) => {
  const [time, setTime] = useState("");

  const fetchTime = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/time?timezone=${timezone}`);
      // Fix: Replace space with "T" for proper Date parsing
      const isoDate = res.data.datetime.replace(" ", "T");
      setTime(new Date(isoDate).toLocaleString("en-GB", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="localtime-container">
      <button onClick={fetchTime} className="localtime-btn">
        Refresh Time
      </button>
      {time && <p className="localtime-text">{time}</p>}
    </div>
  );
};

export default TimeFetcher;
