import React, { useEffect, useState } from "react";
import "./Header.css";
import HeaderNav1 from "../headerNav/HeaderNav1";
import HeaderNav2 from "../headerNav/HeaderNav2";

// Invest page header with scroll-based color changes
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Listen for scroll events to toggle header styles
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Pass scroll state to nav components
  return (
    <header className={`invest-header${scrolled ? " scrolled" : ""}`}>
      <div className="invest-header-inner">
        <HeaderNav1 scrolled={scrolled} />
        <HeaderNav2 scrolled={scrolled} />
      </div>
    </header>
  );
};

export default Header;
