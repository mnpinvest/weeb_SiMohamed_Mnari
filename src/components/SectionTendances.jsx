import "../styles/tendances.css";
import { FiArrowRight } from "react-icons/fi";
import Shapes4 from "../assets/Shapes4.png";

export default function SectionTendances() {
  return (
    <section className="tendances">
      <div className="tendances-box">

        {/* Bloc gauche : carré + image */}
        <div className="tendances-left">
          <div className="tendances-image-wrapper">
            <img
              src={Shapes4}
              alt="Illustration tendances"
              className="tendances-image"
            />
          </div>
        </div>

        {/* Bloc droit : texte + bouton */}
        <div className="tendances-right">

          <h3 className="tendances-caption">
            Le web, un écosystème en constante évolution
          </h3>

          <h2 className="tendances-title">
            Restez informé des dernières tendances
          </h2>

          <p className="tendances-text">
            Chaque semaine, nous analysons les nouveautés du web : frameworks émergents,
            bonnes pratiques SEO, accessibilité, et bien plus encore. Ne manquez aucune
            actualité du digital !
          </p>

          <button className="tendances-btn">
            Lire les articles récents
            <FiArrowRight className="tendances-btn-icon" />
          </button>

        </div>

      </div>
    </section>
  );
}
