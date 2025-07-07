import React from "react";
import "./HeaderNav2.css";

// Navigation links for Invest page header
const navLinks = [
  { label: "Save", href: "#" },
  { label: "Invest", href: "#" },
  { label: "Stories", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Resources", href: "#" },
];

const HeaderNav2 = ({ scrolled }) => {
  return (
    <nav className="headernav2">
      <ul className="headernav2-links">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className={`headernav2-link${scrolled ? " scrolled" : ""}`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="headernav2-actions">
        <button
          className={`headernav2-btn signin${scrolled ? " scrolled" : ""}`}
        >
          Sign In
        </button>
        <button
          className={`headernav2-btn create-account${scrolled ? " scrolled" : ""}`}
        >
          Create Account
        </button>
      </div>
    </nav>
  );
};

export default HeaderNav2;
