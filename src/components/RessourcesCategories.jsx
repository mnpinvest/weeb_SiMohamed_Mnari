import { useNavigate, Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { useState } from "react";

export default function RessourcesCategories() {
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
      className="ressources-categories"
      role="region"
      aria-label="Catégories de ressources disponibles"
    >
      <h2 className="section-title">Catégories</h2>

      <div className="categories-grid">

        {/* 1. Automatisation & Agents IA */}
        <div className="category-card-wrapper" id="automatisation-agents-ia">
          <h3 className="category-title">Automatisation & Agents IA</h3>

          <div
            className="category-card card"
            role="button"
            tabIndex="0"
            aria-label="Automatisation et Agents IA. Automatisez vos tâches et déployez des agents IA adaptés."
            onClick={() =>
              playAudioThenRedirect("/audio/1_1_Automatisation.mp3", "automatisation")
            }
            onKeyDown={(e) =>
              handleKeyPress(e, "/audio/1_1_Automatisation.mp3", "automatisation")
            }
            style={{
              backgroundImage: "url('/assets/AutomatisationAgentsIA.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              cursor: "pointer"
            }}
          >
            <div className="card-bottom">
              <p>
                Automatisez vos tâches, fluidifiez vos processus et déployez des agents IA adaptés.
              </p>
              <span className="category-btn">
                Explorer <FiArrowRight className="arrow-animate" aria-hidden="true" />
              </span>
            </div>
          </div>

          <button
            className="transcript-btn"
            onClick={() => toggleTranscript(1)}
            aria-expanded={openTranscript === 1}
          >
            Lire la transcription
          </button>

          {openTranscript === 1 && (
            <div className="transcript-text" aria-live="polite">
              Imaginez vos projets propulsés par l’automatisation et des agents IA capables d’agir pour vous. 
              Sites web, e‑commerce, assistants intelligents… tout devient plus fluide, plus rapide, plus rentable. 
              Votre espace dédié vous attend pour aller plus loin.

              <Link to="/register" className="transcript-link">
                Créer un compte
              </Link>
            </div>
          )}
        </div>

        {/* 2. Tunnels de vente & Conversion */}
        <div className="category-card-wrapper" id="tunnels-conversion">
          <h3 className="category-title">Tunnels de vente & Conversion</h3>

          <div
            className="category-card card"
            role="button"
            tabIndex="0"
            aria-label="Tunnels de vente et Conversion. Créez des tunnels performants et automatisés."
            onClick={() =>
              playAudioThenRedirect("/audio/2_1_Tunel_de_vente.mp3", "tunnels")
            }
            onKeyDown={(e) =>
              handleKeyPress(e, "/audio/2_1_Tunel_de_vente.mp3", "tunnels")
            }
            style={{
              backgroundImage: "url('/assets/TunnelsDeVenteConversion.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              cursor: "pointer"
            }}
          >
            <div className="card-bottom">
              <p>
                Créez des tunnels performants, automatisés et conçus pour convertir en continu.
              </p>
              <span className="category-btn">
                Explorer <FiArrowRight className="arrow-animate" aria-hidden="true" />
              </span>
            </div>
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
              Visualisez un parcours où chaque étape pousse naturellement vos visiteurs à agir. 
              Une architecture pensée pour convertir, optimiser et accélérer vos résultats. 
              Votre espace personnalisé est prêt à vous accompagner.

              <Link to="/register" className="transcript-link">
                Créer un compte
              </Link>
            </div>
          )}
        </div>

        {/* 3. Robots humanoïdes & IA embarquée */}
        <div className="category-card-wrapper" id="robots-humanoides">
          <h3 className="category-title">Robots humanoïdes & IA embarquée</h3>

          <div
            className="category-card card"
            role="button"
            tabIndex="0"
            aria-label="Robots humanoïdes et IA embarquée. Découvrez les usages professionnels des robots humanoïdes."
            onClick={() =>
              playAudioThenRedirect("/audio/3_1_robots humanoïdes.txt.mp3", "robotique")
            }
            onKeyDown={(e) =>
              handleKeyPress(e, "/audio/3_1_robots humanoïdes.txt.mp3", "robotique")
            }
            style={{
              backgroundImage: "url('/assets/RobotsHumanoidesIAEmbarquee.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              cursor: "pointer"
            }}
          >
            <div className="card-bottom">
              <p>
                Découvrez les usages professionnels des robots humanoïdes et des systèmes IA embarqués.
              </p>
              <span className="category-btn">
                Explorer <FiArrowRight className="arrow-animate" aria-hidden="true" />
              </span>
            </div>
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
              Découvrez la nouvelle génération de robots humanoïdes. 
              Une technologie intelligente, prête à transformer votre organisation. 
              Accédez à votre espace dédié pour aller plus loin.

              <Link to="/register" className="transcript-link">
                Créer un compte
              </Link>
            </div>
          )}
        </div>

        {/* 4. Modernisation IA des services publics */}
        <div className="category-card-wrapper" id="modernisation-ia-services-publics">
          <h3 className="category-title">Modernisation IA des services publics</h3>

          <div
            className="category-card card"
            role="button"
            tabIndex="0"
            aria-label="Modernisation IA des services publics. Digitalisez vos services et améliorez l’accueil."
            onClick={() =>
              playAudioThenRedirect(
                "/audio/4_1_ModernisationIA_des_services_publics.mp3",
                "services-publics"
              )
            }
            onKeyDown={(e) =>
              handleKeyPress(
                e,
                "/audio/4_1_ModernisationIA_des_services_publics.mp3",
                "services-publics"
              )
            }
            style={{
              backgroundImage: "url('/assets/ModernisationIADesServicesPublics.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              cursor: "pointer"
            }}
          >
            <div className="card-bottom">
              <p>
                Digitalisez vos services, améliorez l’accueil et fluidifiez les demandes grâce à l’IA.
              </p>
              <span className="category-btn">
                Explorer <FiArrowRight className="arrow-animate" aria-hidden="true" />
              </span>
            </div>
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
              Pensez à l’impact d’une administration qui gagne en rapidité, en clarté et en efficacité grâce à l’IA. 
              Des services fluides, des processus optimisés, une organisation modernisée. 
              Votre espace dédié est prêt à vous accompagner.

              <Link to="/register" className="transcript-link">
                Créer un compte
              </Link>
            </div>
          )}
        </div>

        {/* 5. Modèles IA & IA Santé */}
        <div className="category-card-wrapper" id="modeles-ia-sante">
          <h3 className="category-title">Modèles IA & IA Santé</h3>

          <div
            className="category-card card"
            role="button"
            tabIndex="0"
            aria-label="Modèles IA et IA Santé. Déployez des modèles IA pour la recherche et l’analyse médicale."
            onClick={() =>
              playAudioThenRedirect("/audio/5_1_Modèles IA & IA Santé.mp3", "sante")
            }
            onKeyDown={(e) =>
              handleKeyPress(e, "/audio/5_1_Modèles IA & IA Santé.mp3", "sante")
            }
            style={{
              backgroundImage: "url('/assets/ModèlesIA_IASante.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              cursor: "pointer"
            }}
          >
            <div className="card-bottom">
              <p>
                Déployez des modèles IA pour la recherche, l’analyse médicale et l’automatisation des tâches critiques.
              </p>
              <span className="category-btn">
                Explorer <FiArrowRight className="arrow-animate" aria-hidden="true" />
              </span>
            </div>
          </div>

          <button
            className="transcript-btn"
            onClick={() => toggleTranscript(5)}
            aria-expanded={openTranscript === 5}
          >
            Lire la transcription
          </button>

          {openTranscript === 5 && (
            <div className="transcript-text" aria-live="polite">
              Envisagez des solutions de santé renforcées par des modèles IA capables d’analyser, assister et accélérer vos décisions. 
              Précision, fiabilité, performance… une nouvelle approche s’ouvre à vous. 
              Votre espace dédié est prêt à vous accompagner.

              <Link to="/register" className="transcript-link">
                Créer un compte
              </Link>
            </div>
          )}
        </div>

        {/* 6. Intégrateur Robotique Humanoïde */}
        <div className="category-card-wrapper" id="integrateur-robotique">
          <h3 className="category-title">Intégrateur Robotique Humanoïde</h3>

          <div
            className="category-card card"
            role="button"
            tabIndex="0"
            aria-label="Intégrateur Robotique Humanoïde. Installation, configuration et maintenance de robots humanoïdes."
            onClick={() =>
              playAudioThenRedirect(
                "/audio/6_1_Intégrateur Robotique Humanoïde.mp3",
                "integrateur"
              )
            }
            onKeyDown={(e) =>
              handleKeyPress(
                e,
                "/audio/6_1_Intégrateur Robotique Humanoïde.mp3",
                "integrateur"
              )
            }
            style={{
              backgroundImage: "url('/assets/IntegrateurRobotiqueHumanoïde.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              cursor: "pointer"
            }}
          >
            <div className="card-bottom">
              <p>
                Installation, configuration, adaptation métier et maintenance de robots humanoïdes pour entreprises et collectivités.
              </p>
              <span className="category-btn">
                Explorer <FiArrowRight className="arrow-animate" aria-hidden="true" />
              </span>
            </div>
          </div>

          <button
            className="transcript-btn"
            onClick={() => toggleTranscript(6)}
            aria-expanded={openTranscript === 6}
          >
            Lire la transcription
          </button>

          {openTranscript === 6 && (
            <div className="transcript-text" aria-live="polite">
              Projetez-vous avec des robots humanoïdes intégrés dans vos opérations, capables d’assister, automatiser et renforcer vos équipes. 
              Installation, adaptation, maintenance… tout devient simple et performant. 
              Votre espace dédié est prêt à vous accompagner.

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
