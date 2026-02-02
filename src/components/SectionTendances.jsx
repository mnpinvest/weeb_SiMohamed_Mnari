import "../styles/tendances.css";
import { FiArrowRight } from "react-icons/fi";
import Shapes4 from "../assets/Shapes4.png";
import { Link } from "react-router-dom";

export default function SectionTendances() {
  return (
    <section className="tendances">
      <div className="tendances-box">

        {/* Bloc gauche : carré + image */}
        <div className="tendances-left">
          <div className="tendances-image-wrapper">
            <img
              src={Shapes4}
              alt="Illustration tendances numériques"
              className="tendances-image img-3d"
            />
          </div>
        </div>

        {/* Bloc droit : texte + bouton */}
        <div className="tendances-right">

          <h3 className="tendances-caption">
            Le numérique, un écosystème en constante évolution
          </h3>

          <h2 className="tendances-title">
            Restez informé des tendances essentielles
          </h2>

          <p className="tendances-text">
            Chaque semaine, nous analysons les évolutions qui transforment les organisations :
            modernisation des services, automatisation, intelligence artificielle,
            amélioration de l’accueil et optimisation des processus. Une veille claire
            et utile pour anticiper les changements du digital.
          </p>

          {/* CTA vers la page ressources */}
          <Link to="/ressources" className="tendances-btn">
            Explorer les ressources récentes
            <FiArrowRight className="tendances-btn-icon" />
          </Link>

        </div>

      </div>
    </section>
  );
}
