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
    <header
      className="header"
      role="banner"
      aria-label="En-tête du site contenant la navigation principale"
    >
      <div className="container">
        <div className="header-box">

          {/* GAUCHE */}
          <div className="nav-left">

            {/* LOGO */}
            <Link
              to="/"
              className="logo"
              aria-label="Retour à la page d’accueil"
            >
              weeb
            </Link>

            {/* NAVIGATION DESKTOP */}
            <nav
              className="nav-links desktop-only"
              role="navigation"
              aria-label="Navigation principale"
            >
              {isHome && (
                <>
                  <Link className="nav-link" to="/" aria-label="À propos">À propos</Link>
                  <Link className="nav-link" to="/contact" aria-label="Page contact">Contact</Link>
                </>
              )}

              {isContact && (
                <>
                  <Link className="nav-link" to="/" aria-label="Retour à l’accueil">Accueil</Link>
                  <Link className="nav-link" to="/contact" aria-label="Page contact">Contact</Link>
                </>
              )}

              {isLogin && (
                <Link className="nav-link" to="/" aria-label="Retour à l’accueil">Accueil</Link>
              )}

              {/* Pages où on ne montre pas de liens */}
              {isRegister && null}
              {isRessources && null}
              {isResetPassword && null}
            </nav>
          </div>

          {/* DROITE DESKTOP */}
          <div className="btn-group desktop-only">

            {/* SI CONNECTÉ */}
            {isLoggedIn && (
              <button
                className="btn-outline"
                onClick={handleLogout}
                aria-label="Se déconnecter"
              >
                Déconnexion
              </button>
            )}

            {/* SI NON CONNECTÉ */}
            {!isLoggedIn && (
              <>
                {(isHome || isLogin || isContact || isRessources || isRegister || isResetPassword) && (
                  <>
                    <Link
                      className="btn-outline"
                      to="/login"
                      aria-label="Se connecter à son compte"
                    >
                      Se connecter
                    </Link>

                    <Link
                      className="btn-primary"
                      to="/register"
                      aria-label="Créer un compte"
                    >
                      Créer un compte
                    </Link>
                  </>
                )}
              </>
            )}
          </div>

          {/* HAMBURGER MOBILE */}
          <button
            className="hamburger mobile-only"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Ouvrir ou fermer le menu mobile"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>

        </div>

        {/* MENU MOBILE */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="mobile-menu"
            role="navigation"
            aria-label="Menu mobile"
          >

            {/* Accueil si pas sur Register */}
            {!isRegister && (
              <Link
                className="mobile-link"
                to="/"
                aria-label="Retour à l’accueil"
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
                  aria-label="À propos"
                  onClick={() => setMenuOpen(false)}
                >
                  À propos
                </Link>

                <Link
                  className="mobile-link"
                  to="/contact"
                  aria-label="Page contact"
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
                aria-label="Page contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            )}

            {/* SI CONNECTÉ */}
            {isLoggedIn && (
              <button
                className="mobile-link"
                aria-label="Se déconnecter"
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
                  aria-label="Se connecter"
                  onClick={() => setMenuOpen(false)}
                >
                  Se connecter
                </Link>

                <Link
                  className="btn-primary mobile-btn"
                  to="/register"
                  aria-label="Créer un compte"
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
