import "../styles/hero.css";
import heroIllustration from "../assets/Heroillustration.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-box">
          
          {/* ============================
              CONTENU TEXTE
          ============================ */}
          <div className="hero-content">
            <h1 className="hero-title">
              Explorez le <span className="hero-web">Web</span> sous toutes<br />
              <span className="hero-facettes">ses facettes</span>
            </h1>

            <p className="hero-text">
              Le numérique évolue vite, et nous vous aidons à comprendre les solutions
              qui transforment les organisations : outils modernes, automatisation,
              optimisation des services et nouvelles pratiques digitales. Que vous
              souhaitiez gagner en efficacité ou moderniser vos processus, explorez
              des contenus pensés pour vous accompagner.
            </p>

            <div className="hero-buttons">
              <Link to="/ressources" className="btn-primary hero-btn">
                Explorer les ressources
              </Link>

              <Link to="/register" className="btn-outline hero-btn hero-btn-newsletter">
                <span>S’abonner à la</span>
                <span>newsletter</span>
              </Link>
            </div>
          </div>

          {/* ============================
              IMAGE + MOTS FLOTTANTS
          ============================ */}
          <div className="hero-image-wrapper">

            {/* Image principale */}
            <img
              src={heroIllustration}
              alt="Illustration interface web"
              className="hero-image img-3d"
            />

            {/* Mots flottants */}
            <div className="floating-words">
              <span className="word">Création de site IA</span>
              <span className="word">Tunnels de vente</span>
              <span className="word">Automatisation</span>
              <span className="word">Robot humanoïde</span>
              <span className="word">Audit IA</span>
              <span className="word">Acquisition clients</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
