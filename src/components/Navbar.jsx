
import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo" onClick={closeMenu}>
          Akanksha<span>.</span>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <a href="/#about" onClick={closeMenu}>About</a>
          <a href="/#skills" onClick={closeMenu}>Skills</a>
          <a href="/#projects" onClick={closeMenu}>Projects</a>
          <Link to="/resume" onClick={closeMenu}>Resume</Link>
        </div>

        <a
          href="mailto:as0122592@gmail.com"
          className="nav-contact"
        >
          Let's Talk <span>↗</span>
        </a>

      </div>
    </nav>
  );
}

export default Navbar;
