import "../styles/footer.css";
import { Link } from "react-router-dom";
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {

  // Fonction de scroll intelligent
  const smartScroll = (e, targetId) => {
    if (window.location.pathname === "/ressources") {
      e.preventDefault();
      const el = document.querySelector(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer
      className="footer"
      role="contentinfo"
      aria-label="Pied de page du site contenant les liens de navigation"
    >

      <div className="footer-top">

        {/* Logo */}
        <div className="footer-col">
          <Link to="/" className="footer-title footer-logo">
            weeb
          </Link>
        </div>

        {/* PRODUITS */}
        <div className="footer-col">
          <h3 className="footer-title">PRODUITS</h3>
          <ul className="footer-links">

            <li>
              <Link
                to="/ressources#tunnels-conversion"
                onClick={(e) => smartScroll(e, "#tunnels-conversion")}
              >
                Tunnels de vente
              </Link>
            </li>

            <li>
              <Link
                to="/ressources#tunnels-conversion"
                onClick={(e) => smartScroll(e, "#tunnels-conversion")}
              >
                Pages de vente
              </Link>
            </li>

            <li>
              <Link
                to="/ressources#tunnels-conversion"
                onClick={(e) => smartScroll(e, "#tunnels-conversion")}
              >
                Webinaires automatisés
              </Link>
            </li>

            <li>
              <Link
                to="/ressources#tunnels-conversion"
                onClick={(e) => smartScroll(e, "#tunnels-conversion")}
              >
                Sites internet
              </Link>
            </li>

            <li>
              <Link
                to="/ressources#tunnels-conversion"
                onClick={(e) => smartScroll(e, "#tunnels-conversion")}
              >
                Refonte de site
              </Link>
            </li>

          </ul>
        </div>

        {/* SOLUTIONS */}
        <div className="footer-col">
          <h3 className="footer-title">SOLUTIONS</h3>
          <ul className="footer-links">

            <li>
              <Link
                to="/ressources#automatisation-agents-ia"
                onClick={(e) => smartScroll(e, "#automatisation-agents-ia")}
              >
                Acquisition clients
              </Link>
            </li>

            <li>
              <Link
                to="/ressources#automatisation-agents-ia"
                onClick={(e) => smartScroll(e, "#automatisation-agents-ia")}
              >
                Automatisation
              </Link>
            </li>

            <li>
              <Link
                to="/ressources#automatisation-agents-ia"
                onClick={(e) => smartScroll(e, "#automatisation-agents-ia")}
              >
                Conversion & ventes
              </Link>
            </li>

            <li>
              <Link
                to="/ressources#automatisation-agents-ia"
                onClick={(e) => smartScroll(e, "#automatisation-agents-ia")}
              >
                Analyse & reporting
              </Link>
            </li>

            <li>
              <Link
                to="/ressources#automatisation-agents-ia"
                onClick={(e) => smartScroll(e, "#automatisation-agents-ia")}
              >
                Audit site & tunnel
              </Link>
            </li>

          </ul>
        </div>

        {/* INNOVATION */}
        <div className="footer-col">
          <h3 className="footer-title">INNOVATION</h3>
          <ul className="footer-links">

            <li>
              <Link
                to="/ressources#robots-humanoides"
                onClick={(e) => smartScroll(e, "#robots-humanoides")}
              >
                Robot humanoïde (vente)
              </Link>
            </li>

            <li>
              <Link
                to="/ressources#robots-humanoides"
                onClick={(e) => smartScroll(e, "#robots-humanoides")}
              >
                Robot humanoïde (location)
              </Link>
            </li>

            <li>
              <Link
                to="/ressources#robots-humanoides"
                onClick={(e) => smartScroll(e, "#robots-humanoides")}
              >
                IA embarquée
              </Link>
            </li>

            <li>
              <Link
                to="/ressources#robots-humanoides"
                onClick={(e) => smartScroll(e, "#robots-humanoides")}
              >
                Systèmes autonomes
              </Link>
            </li>

            <li>
              <Link
                to="/ressources#robots-humanoides"
                onClick={(e) => smartScroll(e, "#robots-humanoides")}
              >
                R&D robotique
              </Link>
            </li>

          </ul>
        </div>

        {/* EXPERTISE IA */}
        <div className="footer-col">
          <h3 className="footer-title">EXPERTISE IA</h3>
          <ul className="footer-links">

            <li>
              <Link
                to="/ressources#modeles-ia-sante"
                onClick={(e) => smartScroll(e, "#modeles-ia-sante")}
              >
                Audit métier IA
              </Link>
            </li>

            <li>
              <Link
                to="/ressources#modeles-ia-sante"
                onClick={(e) => smartScroll(e, "#modeles-ia-sante")}
              >
                Diagnostic automatisé
              </Link>
            </li>

            <li>
              <Link
                to="/ressources#modeles-ia-sante"
                onClick={(e) => smartScroll(e, "#modeles-ia-sante")}
              >
                Optimisation IA
              </Link>
            </li>

            <li>
              <Link
                to="/ressources#modeles-ia-sante"
                onClick={(e) => smartScroll(e, "#modeles-ia-sante")}
              >
                Recommandations stratégiques
              </Link>
            </li>

            <li>
              <Link
                to="/ressources#modeles-ia-sante"
                onClick={(e) => smartScroll(e, "#modeles-ia-sante")}
              >
                Analyse comportementale
              </Link>
            </li>

          </ul>
        </div>

        {/* INTÉGRATION */}
        <div className="footer-col">
          <h3 className="footer-title">INTÉGRATION</h3>
          <ul className="footer-links">

            <li>
              <Link
                to="/ressources#integrateur-robotique"
                onClick={(e) => smartScroll(e, "#integrateur-robotique")}
              >
                Installation robot humanoïde
              </Link>
            </li>

            <li>
              <Link
                to="/ressources#integrateur-robotique"
                onClick={(e) => smartScroll(e, "#integrateur-robotique")}
              >
                Paramétrage IA
              </Link>
            </li>

            <li>
              <Link
                to="/ressources#integrateur-robotique"
                onClick={(e) => smartScroll(e, "#integrateur-robotique")}
              >
                Adaptation métier
              </Link>
            </li>

            <li>
              <Link
                to="/ressources#integrateur-robotique"
                onClick={(e) => smartScroll(e, "#integrateur-robotique")}
              >
                Maintenance & support
              </Link>
            </li>

            <li>
              <Link
                to="/ressources#integrateur-robotique"
                onClick={(e) => smartScroll(e, "#integrateur-robotique")}
              >
                Formation & accompagnement
              </Link>
            </li>

          </ul>
        </div>

        {/* ENTREPRISE */}
        <div className="footer-col">
          <h3 className="footer-title">ENTREPRISE</h3>
          <ul className="footer-links">
            <li>Presse</li>
            <li>Événements</li>
            <li><Link to="/contact">Carrières</Link></li>
          </ul>
        </div>

      </div>

      {/* Bas du footer */}
      <div className="footer-bottom">

        <p className="footer-copy">
          © 2025 Weeb, Inc. Tous droits réservés.
        </p>

        <div className="footer-socials">
          <FaYoutube className="footer-icon" />
          <FaFacebookF className="footer-icon" />
          <FaTwitter className="footer-icon" />
          <FaInstagram className="footer-icon" />
          <FaLinkedinIn className="footer-icon" />
        </div>

      </div>

    </footer>
  );
}
