import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "../styles/header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const isHome = path === "/";
  const isContact = path === "/contact";
  const isLogin = path === "/login";

  return (
    <header className="header">
      <div className="container">
        <div className="header-box">

          {/* GAUCHE */}
          <div className="nav-left">
            <Link to="/" className="logo">weeb</Link>

            {/* Liens desktop */}
            <div className="nav-links desktop-only">

              {/* HOME */}
              {isHome && (
                <>
                  <Link className="nav-link" to="/">About Us</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                </>
              )}

              {/* CONTACT */}
              {isContact && (
                <Link className="nav-link" to="/contact">Contact</Link>
              )}

              {/* LOGIN → aucun lien */}
            </div>
          </div>

          {/* DROITE DESKTOP */}
          <div className="btn-group desktop-only">

            {/* HOME */}
            {isHome && (
              <>
                <Link className="nav-link" to="/login">Log In</Link>
                <button className="btn-primary">Join Now</button>
              </>
            )}

            {/* CONTACT */}
            {isContact && (
              <button className="btn-primary">Se connecter</button>
            )}

            {/* LOGIN → rien */}
          </div>

          {/* HAMBURGER MOBILE */}
          {isLogin && (
            <button
              className="hamburger mobile-only"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          )}

        </div>

        {/* MENU MOBILE */}
        {menuOpen && isLogin && (
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
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>

            <button className="btn-primary mobile-btn">
              Se connecter
            </button>
          </div>
        )}

      </div>
    </header>
  );
}
