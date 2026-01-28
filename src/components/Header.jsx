import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-box">

          {/* Bloc gauche : logo */}
          <div className="nav-left">
            {/* Logo cliquable vers la page d'accueil */}
            <Link to="/" className="logo">weeb</Link>

            {/* Liens desktop */}
            <div className="nav-links desktop-only">
              <Link className="nav-link" to="/about">About Us</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
            </div>
          </div>

          {/* Bloc droite desktop */}
          <div className="btn-group desktop-only">
            <Link className="nav-link" to="/login">Log In</Link>
            <button className="btn-primary">Join Now</button>
          </div>

          {/* Bouton hamburger mobile */}
          <button
            className="hamburger mobile-only"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

        {/* Menu mobile déroulant */}
        {menuOpen && (
          <div className="mobile-menu">
            <Link
              className="mobile-link"
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              className="mobile-link"
              to="/about"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>

            <Link
              className="mobile-link"
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>

            <Link
              className="mobile-link"
              to="/login"
              onClick={() => setMenuOpen(false)}
            >
              Log In
            </Link>

            <button className="btn-primary mobile-btn">Join Now</button>
          </div>
        )}

      </div>
    </header>
  );
}
