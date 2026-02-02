import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const isHome = path === "/";
  const isContact = path === "/contact";
  const isLogin = path === "/login";
  const isRegister = path === "/register";
  const isRessources = path === "/ressources";
  const isResetPassword = path === "/reset-password";

  // Vérifier connexion
  useEffect(() => {
    const logged = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(!!logged);
  }, [path]);

  // Déconnexion
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-box">

          {/* GAUCHE */}
          <div className="nav-left">
            <Link to="/" className="logo">weeb</Link>

            <nav className="nav-links desktop-only">
              {isHome && (
                <>
                  <Link className="nav-link" to="/">À propos</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                </>
              )}

              {isContact && (
                <>
                  <Link className="nav-link" to="/">Accueil</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                </>
              )}

              {isLogin && (
                <Link className="nav-link" to="/">Accueil</Link>
              )}

              {isRegister && null}
              {isRessources && null}
              {isResetPassword && null}
            </nav>
          </div>

          {/* DROITE DESKTOP */}
          <div className="btn-group desktop-only">

            {/* SI CONNECTÉ */}
            {isLoggedIn && (
              <button className="btn-outline" onClick={handleLogout}>
                Déconnexion
              </button>
            )}

            {/* SI NON CONNECTÉ */}
            {!isLoggedIn && (
              <>
                {(isHome || isLogin || isContact || isRessources || isRegister || isResetPassword) && (
                  <>
                    <Link className="btn-outline" to="/login">Se connecter</Link>
                    <Link className="btn-primary" to="/register">Créer un compte</Link>
                  </>
                )}
              </>
            )}
          </div>

          {/* HAMBURGER MOBILE */}
          <button
            className="hamburger mobile-only"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

        {/* MENU MOBILE */}
        {menuOpen && (
          <div className="mobile-menu">

            {/* Accueil si pas sur Register */}
            {!isRegister && (
              <Link
                className="mobile-link"
                to="/"
                onClick={() => setMenuOpen(false)}
              >
                Accueil
              </Link>
            )}

            {/* Liens Contact */}
            {isHome && (
              <>
                <Link
                  className="mobile-link"
                  to="/"
                  onClick={() => setMenuOpen(false)}
                >
                  À propos
                </Link>
                <Link
                  className="mobile-link"
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </>
            )}

            {isContact && (
              <Link
                className="mobile-link"
                to="/contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            )}

            {/* SI CONNECTÉ */}
            {isLoggedIn && (
              <button
                className="mobile-link"
                onClick={() => {
                  setMenuOpen(false);
                  handleLogout();
                }}
              >
                Déconnexion
              </button>
            )}

            {/* SI NON CONNECTÉ */}
            {!isLoggedIn && (
              <>
                <Link
                  className="mobile-link"
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                >
                  Se connecter
                </Link>

                <Link
                  className="btn-primary mobile-btn"
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                >
                  Créer un compte
                </Link>
              </>
            )}
          </div>
        )}

      </div>
    </header>
  );
}
