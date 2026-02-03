import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function GuidesPopulaires() {
  const navigate = useNavigate();

  const playAudioThenRedirect = (audioPath) => {
    if (window.currentAudio) {
      window.currentAudio.pause();
      window.currentAudio.currentTime = 0;
    }

    const audio = new Audio(audioPath);
    audio.volume = 1;
    window.currentAudio = audio;

    audio.play().catch(() => {});

    audio.onended = () => {
      if (window.currentAudio === audio) {
        window.currentAudio = null;
      }
      navigate("/register");
    };
  };

  return (
    <section className="guides-populaires">
      <h2 className="section-title">Guides populaires</h2>

      {/* Guide principal */}
      <div className="guide-featured-wrapper">
        <div
          className="guide-featured card"
          onClick={() =>
            playAudioThenRedirect("/audio/7_1_Moderniser_services_IA.mp3")
          }
        >
          <div
            className="guide-image"
            style={{
              backgroundImage: "url('/assets/ModerniserVosServiceIA.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "12px",
              minHeight: "280px"
            }}
          ></div>

          <div className="guide-content">
            <h3 className="guide-title">
              Moderniser vos services grâce à l’intelligence artificielle
            </h3>

            <p className="guide-description">
              Comprenez comment l’IA peut améliorer l’efficacité, réduire la charge
              et transformer vos services.
            </p>

            <span className="guide-btn">
              <span>Lire le guide</span> <FiArrowRight className="arrow-animate" />
            </span>
          </div>
        </div>
      </div>

      {/* Liste des 3 guides */}
      <div className="guides-list">

        <div
          className="guide-item card"
          onClick={() =>
            playAudioThenRedirect("/audio/7_1_Moderniser_services_IA.mp3")
          }
        >
          <h4>Moderniser vos services grâce à l’intelligence artificielle</h4>
          <p>
            Comprenez comment l’IA peut améliorer l’efficacité, réduire la charge
            et transformer vos services.
          </p>
        </div>

        <div
          className="guide-item card"
          onClick={() =>
            playAudioThenRedirect("/audio/8_1_Digitalisation_systemes_essentiels.mp3")
          }
        >
          <h4>Digitalisation intelligente : les systèmes essentiels</h4>
          <p>
            Les solutions clés pour moderniser vos services, améliorer l’accueil
            et fluidifier les demandes.
          </p>
        </div>

        <div
          className="guide-item card"
          onClick={() =>
            playAudioThenRedirect("/audio/9_1_Modeles_IA_sante_recherche.mp3")
          }
        >
          <h4>Modèles IA : usages avancés pour la santé et la recherche</h4>
          <p>
            Découvrez comment les modèles IA transforment l’analyse médicale,
            la recherche et la gestion des flux.
          </p>
        </div>

      </div>
    </section>
  );
}
