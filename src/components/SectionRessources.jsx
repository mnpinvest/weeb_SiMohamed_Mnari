import "../styles/ressources.css";
import { FiArrowRight } from "react-icons/fi";
import Image2 from "../assets/Images2.png";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function SectionRessources() {

  useEffect(() => {
    const element = document.querySelector(".scroll-reveal");

    const handleScroll = () => {
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight - 100;

      if (isVisible) {
        element.classList.add("visible");
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="ressources"
      role="region"
      aria-label="Section présentant les ressources pour progresser dans le numérique"
    >
      <div className="ressources-box">

        {/* ============================
            COLONNE GAUCHE
        ============================ */}
        <div className="ressources-left">

          <h3 className="ressources-subtitle">
            DES RESSOURCES POUR TOUS LES NIVEAUX
          </h3>

          <h2 className="ressources-title">
            <span className="violet">Apprenez</span> et{" "}
            <span className="violet">progressez</span>
          </h2>

          <p className="ressources-text">
            Que vous souhaitiez moderniser vos services, optimiser vos processus
            ou découvrir les usages concrets de l’IA, nous mettons à votre
            disposition des ressources claires et accessibles pour accompagner
            toutes les organisations, quel que soit leur niveau de maturité
            digitale.
          </p>

          <Link
            to="/ressources"
            className="ressources-btn blink scroll-reveal"
            aria-label="Explorer toutes les ressources disponibles"
          >
            Explorer les ressources

            {/* Icône décorative ignorée par les lecteurs d’écran */}
            <FiArrowRight
              className="ressources-btn-icon arrow-animate"
              aria-hidden="true"
            />
          </Link>

        </div>

        {/* ============================
            COLONNE DROITE
        ============================ */}
        <div className="ressources-right">
          <img
            src={Image2}
            alt="Illustration représentant des ressources numériques et des outils d’apprentissage"
            className="ressources-image img-3d"
          />
        </div>

      </div>
    </section>
  );
}
