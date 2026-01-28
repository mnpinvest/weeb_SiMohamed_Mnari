import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-box">

          {/* Bloc gauche : logo + liens */}
          <div className="nav-left">
            <div className="logo">weeb</div>
            <div className="nav-links">
              <Link className="nav-link" to="/about">About Us</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
            </div>
          </div>

          {/* Bloc droite : Log In + bouton */}
          <div className="btn-group">
            <Link className="nav-link" to="/login">Log In</Link>
            <button className="btn-primary">Join Now</button>
          </div>

        </div>
      </div>
    </header>
  );
}
