import "../styles/ressources.css";
import { FiArrowRight } from "react-icons/fi";
import Image2 from "../assets/Images2.png";

export default function SectionRessources() {
  return (
    <section className="ressources">
      <div className="ressources-box">

        {/* Bloc gauche */}
        <div className="ressources-left">

          <h3 className="ressources-subtitle">
            DES RESSOURCES POUR TOUS LES NIVEAUX
          </h3>

          <h2 className="ressources-title">
            <span className="violet">Apprenez</span> et{" "}
            <span className="violet">progressez</span>
          </h2>

          <p className="ressources-text">
            Que vous débutiez en développement web ou que vous soyez un expert
            cherchant à approfondir vos connaissances, nous vous proposons des
            tutoriels, guides et bonnes pratiques pour apprendre efficacement.
          </p>

          <button className="ressources-btn">
            Explorer les ressources
            <FiArrowRight className="ressources-btn-icon" />
          </button>

        </div>

        {/* Bloc droit : image */}
        <div className="ressources-right">
          <img
            src={Image2}
            alt="Illustration ressources"
            className="ressources-image"
          />
        </div>

      </div>
    </section>
  );
}
