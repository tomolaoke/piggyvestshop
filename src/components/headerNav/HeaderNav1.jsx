import React from "react";
import "./HeaderNav1.css";
import logoWhite from "../../assets/piggyvestlogo.svg";
import logoPurple from "../../assets/piggyvestlogo-purple.svg"; // Use this if available

// Logo changes color on scroll (white -> purple)
const HeaderNav1 = ({ scrolled }) => {
  // Use purple logo on scroll, white otherwise
  // If purple logo SVG is not available, fallback to filter
  const logoSrc = scrolled && logoPurple ? logoPurple : logoWhite;
  const logoStyle = !logoPurple && scrolled
    ? { filter: "invert(16%) sepia(97%) saturate(7492%) hue-rotate(262deg) brightness(90%) contrast(110%)", transition: "filter 0.3s" }
    : {};

  return (
    <div className="headernav1">
      <img
        src={logoSrc}
        alt="PiggyVest Logo"
        className="headernav1-logo"
        style={logoStyle}
      />
    </div>
  );
};

export default HeaderNav1;
