
import { Link } from "react-router-dom";
import "../assets/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Akanksha<span>.</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <a href="/#about">About</a>
        <a href="/#skills">Skills</a>
        <a href="/#projects">Projects</a>
        <Link to="/resume">Resume</Link>
      </div>

      <a href="mailto:as0122592@gmail.com" className="nav-contact">
        Let's Talk
      </a>
    </nav>
  );
}

export default Navbar;
