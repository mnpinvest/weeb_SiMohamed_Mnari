import "../styles/footer.css";
import { Link } from "react-router-dom";
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      {/* Bloc supérieur */}
      <div className="footer-top">

        {/* Bloc 1 : Logo */}
        <div className="footer-col">
          <Link to="/" className="footer-title footer-logo">weeb</Link>
        </div>

        {/* Bloc 2 : PRODUITS */}
        <div className="footer-col">
          <h3 className="footer-title">PRODUITS</h3>
          <ul className="footer-links">
            <li>Tunnels de vente</li>
            <li>Pages de vente</li>
            <li>Webinaires automatisés</li>
            <li>Sites internet</li>
            <li>Refonte de site</li>
          </ul>
        </div>

        {/* Bloc 3 : SOLUTIONS */}
        <div className="footer-col">
          <h3 className="footer-title">SOLUTIONS</h3>
          <ul className="footer-links">
            <li>Acquisition clients</li>
            <li>Automatisation</li>
            <li>Conversion & ventes</li>
            <li>Analyse & reporting</li>
            <li>Audit site & tunnel</li>
          </ul>
        </div>

        {/* Bloc 4 : INNOVATION */}
        <div className="footer-col">
          <h3 className="footer-title">INNOVATION</h3>
          <ul className="footer-links">
            <li>Robot humanoïde (vente)</li>
            <li>Robot humanoïde (location)</li>
            <li>IA embarquée</li>
            <li>Systèmes autonomes</li>
            <li>R&D robotique</li>
          </ul>
        </div>

        {/* Bloc 5 : EXPERTISE IA */}
        <div className="footer-col">
          <h3 className="footer-title">EXPERTISE IA</h3>
          <ul className="footer-links">
            <li>Audit métier IA</li>
            <li>Diagnostic automatisé</li>
            <li>Optimisation IA</li>
            <li>Recommandations stratégiques</li>
            <li>Analyse comportementale</li>
          </ul>
        </div>

        {/* Bloc 6 : INTÉGRATION */}
        <div className="footer-col">
          <h3 className="footer-title">INTÉGRATION</h3>
          <ul className="footer-links">
            <li>Installation robot humanoïde</li>
            <li>Paramétrage IA</li>
            <li>Adaptation métier</li>
            <li>Maintenance & support</li>
            <li>Formation & accompagnement</li>
          </ul>
        </div>

        {/* Bloc 7 : ENTREPRISE */}
        <div className="footer-col">
          <h3 className="footer-title">ENTREPRISE</h3>
          <ul className="footer-links">
            <li>À propos</li>
            <li>Presse</li>
            <li>Événements</li>
            <li>Carrières</li>
          </ul>
        </div>

      </div>

      {/* Bloc inférieur */}
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
