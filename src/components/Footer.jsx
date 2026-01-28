import "../styles/footer.css";
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      {/* Bloc supérieur */}
      <div className="footer-top">

        {/* Colonne 1 : Logo */}
        <div className="footer-col">
          <h3 className="footer-title footer-logo">weeb</h3>
        </div>

        {/* Colonne 2 : PRODUCT */}
        <div className="footer-col">
          <h3 className="footer-title">PRODUCT</h3>
          <ul className="footer-links">
            <li>Pricing</li>
            <li>Overview</li>
            <li>Browse</li>
            <li>Accessibility</li>
            <li>Five</li>
          </ul>
        </div>

        {/* Colonne 3 : Solutions */}
        <div className="footer-col">
          <h3 className="footer-title">Solutions</h3>
          <ul className="footer-links">
            <li>Brainstorming</li>
            <li>Ideation</li>
            <li>Wireframing</li>
            <li>Research</li>
          </ul>
        </div>

        {/* Colonne 4 : Resources */}
        <div className="footer-col">
          <h3 className="footer-title">Resources</h3>
          <ul className="footer-links">
            <li>Help Center</li>
            <li>Blog</li>
            <li>Tutorials</li>
          </ul>
        </div>

        {/* Colonne 5 : Company */}
        <div className="footer-col">
          <h3 className="footer-title">Company</h3>
          <ul className="footer-links">
            <li>About</li>
            <li>Press</li>
            <li>Events</li>
            <li>Careers</li>
          </ul>
        </div>

      </div>

      {/* Bloc inférieur */}
      <div className="footer-bottom">

        <p className="footer-copy">
          © 2025 Weeb, Inc. All rights reserved.
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
