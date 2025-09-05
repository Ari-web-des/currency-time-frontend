import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen,setMenuOpen] = useState(false);
return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo + Brand */}
        <div className="navbar-brand">
          🌍 <span>Currency & Time</span>
        </div>

        {/* Hamburger Icon (mobile only) */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* Menu */}
        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  );
};


export default Navbar;
