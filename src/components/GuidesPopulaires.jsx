import { useNavigate, Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { useState } from "react";

export default function GuidesPopulaires() {
  const navigate = useNavigate();

  const [openTranscript, setOpenTranscript] = useState(null);
  const toggleTranscript = (id) => {
    setOpenTranscript(openTranscript === id ? null : id);
  };

  const playAudioThenRedirect = (audioPath, tag) => {
    localStorage.setItem("selectedTag", tag);

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

  const handleKeyPress = (e, audioPath, tag) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      playAudioThenRedirect(audioPath, tag);
    }
  };

  return (
    <section
      className="guides-populaires"
      role="region"
      aria-label="Guides populaires"
    >
      <h2 className="section-title">Guides populaires</h2>

      {/* ================================
          GUIDE PRINCIPAL
      ================================= */}
      <div className="guide-featured-wrapper">
        <div
          className="guide-featured card"
          role="button"
          tabIndex="0"
          aria-label="Moderniser vos services grâce à l’intelligence artificielle"
          onClick={() =>
            playAudioThenRedirect(
              "/audio/7_1_Moderniser_services_IA.mp3",
              "services-publics"
            )
          }
          onKeyDown={(e) =>
            handleKeyPress(
              e,
              "/audio/7_1_Moderniser_services_IA.mp3",
              "services-publics"
            )
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
              <span>Lire le guide</span>
              <FiArrowRight className="arrow-animate" />
            </span>
          </div>
        </div>

        {/* Transcription */}
        <button
          className="transcript-btn"
          onClick={() => toggleTranscript(1)}
          aria-expanded={openTranscript === 1}
        >
          Lire la transcription
        </button>

        {openTranscript === 1 && (
          <div className="transcript-text" aria-live="polite">
            Découvrez comment l’intelligence artificielle modernise vos services,
            améliore l’efficacité, réduit la charge et transforme votre organisation.
            Une nouvelle approche plus fluide, plus rapide et plus performante.

            <Link to="/register" className="transcript-link">
              Créer un compte
            </Link>
          </div>
        )}
      </div>

      {/* ================================
          LISTE DES 3 GUIDES
      ================================= */}
      <div className="guides-list">

        {/* GUIDE 1 */}
        <div className="guide-item-wrapper">
          <div
            className="guide-item card"
            role="button"
            tabIndex="0"
            aria-label="Moderniser vos services grâce à l’intelligence artificielle"
            onClick={() =>
              playAudioThenRedirect(
                "/audio/7_1_Moderniser_services_IA.mp3",
                "services-publics"
              )
            }
            onKeyDown={(e) =>
              handleKeyPress(
                e,
                "/audio/7_1_Moderniser_services_IA.mp3",
                "services-publics"
              )
            }
          >
            <h4>Moderniser vos services grâce à l’intelligence artificielle</h4>
            <p>
              Comprenez comment l’IA peut améliorer l’efficacité, réduire la charge
              et transformer vos services.
            </p>
          </div>

          <button
            className="transcript-btn"
            onClick={() => toggleTranscript(2)}
            aria-expanded={openTranscript === 2}
          >
            Lire la transcription
          </button>

          {openTranscript === 2 && (
            <div className="transcript-text" aria-live="polite">
              L’IA permet d’automatiser, d’optimiser et de fluidifier vos services.
              Une transformation progressive qui améliore l’accueil, réduit les délais
              et renforce l’efficacité globale.

              <Link to="/register" className="transcript-link">
                Créer un compte
              </Link>
            </div>
          )}
        </div>

        {/* GUIDE 2 */}
        <div className="guide-item-wrapper">
          <div
            className="guide-item card"
            role="button"
            tabIndex="0"
            aria-label="Digitalisation intelligente : les systèmes essentiels"
            onClick={() =>
              playAudioThenRedirect(
                "/audio/8_1_Digitalisation_systemes_essentiels.mp3",
                "digitalisation"
              )
            }
            onKeyDown={(e) =>
              handleKeyPress(
                e,
                "/audio/8_1_Digitalisation_systemes_essentiels.mp3",
                "digitalisation"
              )
            }
          >
            <h4>Digitalisation intelligente : les systèmes essentiels</h4>
            <p>
              Les solutions clés pour moderniser vos services, améliorer l’accueil
              et fluidifier les demandes.
            </p>
          </div>

          <button
            className="transcript-btn"
            onClick={() => toggleTranscript(3)}
            aria-expanded={openTranscript === 3}
          >
            Lire la transcription
          </button>

          {openTranscript === 3 && (
            <div className="transcript-text" aria-live="polite">
              La digitalisation intelligente repose sur des systèmes essentiels qui
              simplifient les démarches, améliorent l’accueil et fluidifient les flux.
              Une modernisation progressive et efficace.

              <Link to="/register" className="transcript-link">
                Créer un compte
              </Link>
            </div>
          )}
        </div>

        {/* GUIDE 3 */}
        <div className="guide-item-wrapper">
          <div
            className="guide-item card"
            role="button"
            tabIndex="0"
            aria-label="Modèles IA : usages avancés pour la santé et la recherche"
            onClick={() =>
              playAudioThenRedirect(
                "/audio/9_1_Modeles_IA_sante_recherche.mp3",
                "sante"
              )
            }
            onKeyDown={(e) =>
              handleKeyPress(
                e,
                "/audio/9_1_Modeles_IA_sante_recherche.mp3",
                "sante"
              )
            }
          >
            <h4>Modèles IA : usages avancés pour la santé et la recherche</h4>
            <p>
              Découvrez comment les modèles IA transforment l’analyse médicale,
              la recherche et la gestion des flux.
            </p>
          </div>

          <button
            className="transcript-btn"
            onClick={() => toggleTranscript(4)}
            aria-expanded={openTranscript === 4}
          >
            Lire la transcription
          </button>

          {openTranscript === 4 && (
            <div className="transcript-text" aria-live="polite">
              Les modèles IA révolutionnent la santé et la recherche en accélérant
              l’analyse, en renforçant la précision et en facilitant la prise de décision.
              Une nouvelle ère d’efficacité s’ouvre à vous.

              <Link to="/register" className="transcript-link">
                Créer un compte
              </Link>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
