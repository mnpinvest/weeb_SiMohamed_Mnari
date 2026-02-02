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
    <section className="ressources">
      <div className="ressources-box">

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

          <Link to="/ressources" className="ressources-btn blink scroll-reveal">
            Explorer les ressources
            <FiArrowRight className="ressources-btn-icon arrow-animate" />
          </Link>

        </div>

        <div className="ressources-right">
          <img
            src={Image2}
            alt="Illustration ressources"
            className="ressources-image img-3d"
          />
        </div>

      </div>
    </section>
  );
}
