import "../styles/ressourcesPage.css";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import RessourcesCategories from "../components/RessourcesCategories";
import { useState, useEffect } from "react";

export default function Ressources() {
  const navigate = useNavigate();

  // ============================
  // SCROLL INTELLIGENT (HASH)
  // ============================
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200);
      }
    }
  }, []);

  // ============================
  // TRANSCRIPTIONS (ACCESSIBILITÉ)
  // ============================
  const [openTranscript, setOpenTranscript] = useState(null);
  const toggleTranscript = (id) => {
    setOpenTranscript(openTranscript === id ? null : id);
  };

  // ============================
  // AUDIO + REDIRECTION
  // ============================
  const playAudioThenRedirect = (audioPath) => {
    if (window.currentAudio) {
      window.currentAudio.pause();
      window.currentAudio.currentTime = 0;
    }

    const audio = new Audio(audioPath);
    audio.volume = 1;
    window.currentAudio = audio;

    audio.play().catch(() => {
      console.warn("Audio bloqué");
    });

    audio.onended = () => {
      if (window.currentAudio === audio) {
        window.currentAudio = null;
      }
      navigate("/register");
    };
  };

  return (
    <div className="ressources-page">

      {/* HERO */}
      <section className="ressources-hero">
        <h1 className="ressources-hero-title blink">
          Toutes nos <span className="violet">ressources</span> pour progresser
        </h1>
        <p className="ressources-hero-subtitle">
          Guides, tutoriels, systèmes IA et contenus exclusifs pour moderniser, automatiser et transformer votre organisation.
        </p>
      </section>

      {/* ============================
          CATÉGORIES (avec IDs dans le composant)
      ============================ */}
      <section id="categories">
        <RessourcesCategories />
      </section>

      {/* ============================
          GUIDES POPULAIRES
      ============================ */}
      <section className="ressources-guides" id="guides-populaires">
        <h2 className="section-title">Guides populaires</h2>

        <div className="guides-grid">

          {/* GUIDE 1 */}
          <div className="category-card-wrapper">
            <h3 className="category-title">
              Moderniser vos services<br />grâce à l’intelligence artificielle
            </h3>

            <div
              className="guide-card card"
              onClick={() => playAudioThenRedirect("/audio/7_1_Moderniser_services_IA.mp3")}
              style={{
                backgroundImage: "url('/assets/ModerniserVosServiceIA.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                cursor: "pointer"
              }}
            >
              <div className="card-bottom">
                <p>
                  Comprenez comment l’IA peut améliorer l’efficacité, réduire la charge et transformer vos services.
                </p>

                <Link to="/article/modernisation-ia" className="guide-btn">
                  <span>Lire le guide</span> <FiArrowRight className="arrow-animate" />
                </Link>
              </div>
            </div>

            {/* TRANSCRIPTION */}
            <button
              className="transcript-btn"
              onClick={() => toggleTranscript(1)}
              aria-expanded={openTranscript === 1}
            >
              {openTranscript === 1 ? "Masquer la transcription" : "Lire la transcription"}
            </button>

            {openTranscript === 1 && (
              <div className="transcript-text" aria-live="polite">
                L’intelligence artificielle modernise vos services, améliore l’efficacité,
                réduit la charge et transforme votre organisation. Une nouvelle approche
                plus fluide, plus rapide et plus performante.

                <Link to="/register" className="transcript-link">
                  Créer un compte
                </Link>
              </div>
            )}
          </div>

          {/* GUIDE 2 */}
          <div className="category-card-wrapper">
            <h3 className="category-title">Digitalisation intelligente : les systèmes essentiels</h3>

            <div
              className="guide-card card"
              onClick={() => playAudioThenRedirect("/audio/8_1_Digitalisation_systemes_essentels.mp3")}
              style={{
                backgroundImage: "url('/assets/DigitalisationIntelligente.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                cursor: "pointer"
              }}
            >
              <div className="card-bottom">
                <p>
                  Les solutions clés pour moderniser vos services, améliorer l’accueil et fluidifier les demandes.
                </p>

                <Link to="/article/digitalisation-intelligente" className="guide-btn">
                  <span>Lire le guide</span> <FiArrowRight className="arrow-animate" />
                </Link>
              </div>
            </div>

            {/* TRANSCRIPTION */}
            <button
              className="transcript-btn"
              onClick={() => toggleTranscript(2)}
              aria-expanded={openTranscript === 2}
            >
              {openTranscript === 2 ? "Masquer la transcription" : "Lire la transcription"}
            </button>

            {openTranscript === 2 && (
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
          <div className="category-card-wrapper">
            <h3 className="category-title">Modèles IA : usages avancés pour la santé et la recherche</h3>

            <div
              className="guide-card card"
              onClick={() => playAudioThenRedirect("/audio/9_1_Modeles_IA_sante_recherche.mp3")}
              style={{
                backgroundImage: "url('/assets/ModelesIASanteRecherche.png')",
                backgroundSize: "100% auto",
                backgroundPosition: "top center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#0F172A",
                cursor: "pointer"
              }}
            >
              <div className="card-bottom">
                <p>
                  Découvrez comment les modèles IA transforment l’analyse médicale, la recherche et la gestion des flux.
                </p>

                <Link to="/article/modeles-ia-sante" className="guide-btn">
                  <span>Lire le guide</span> <FiArrowRight className="arrow-animate" />
                </Link>
              </div>
            </div>

            {/* TRANSCRIPTION */}
            <button
              className="transcript-btn"
              onClick={() => toggleTranscript(3)}
              aria-expanded={openTranscript === 3}
            >
              {openTranscript === 3 ? "Masquer la transcription" : "Lire la transcription"}
            </button>

            {openTranscript === 3 && (
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

      {/* ============================
          TUTORIELS RÉCENTS
      ============================ */}
      <section className="ressources-tutos" id="tutoriels-recents">
        <h2 className="section-title">Tutoriels récents</h2>

        <div className="tutos-grid">

          {/* TUTO 1 */}
          <div className="category-card-wrapper">
            <h3 className="category-title">Créer un mini‑audit IA pour votre organisation</h3>

            <div
              className="tuto-card card"
              onClick={() => playAudioThenRedirect("/audio/10_1_Creer_miniaudit_IA.mp3")}
              style={{
                backgroundImage: "url('/assets/AuditIA.png')",
                backgroundSize: "100% auto",
                backgroundPosition: "top center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#0F172A",
                cursor: "pointer"
              }}
            >
              <div className="card-bottom">
                <p>Identifiez rapidement les tâches automatisables dans n’importe quel service.</p>

                <span className="tuto-btn">
                  <span>Lire</span> <FiArrowRight className="arrow-animate" />
                </span>
              </div>
            </div>

            {/* TRANSCRIPTION */}
            <button
              className="transcript-btn"
              onClick={() => toggleTranscript(4)}
              aria-expanded={openTranscript === 4}
            >
              {openTranscript === 4 ? "Masquer la transcription" : "Lire la transcription"}
            </button>

            {openTranscript === 4 && (
              <div className="transcript-text" aria-live="polite">
                Ce tutoriel vous montre comment réaliser un mini‑audit IA simple et rapide
                pour identifier les tâches automatisables dans votre organisation. Une méthode
                efficace pour gagner du temps et améliorer vos processus.

                <Link to="/register" className="transcript-link">
                  Créer un compte
                </Link>
              </div>
            )}
          </div>

          {/* TUTO 2 */}
          <div className="category-card-wrapper">
            <h3 className="category-title">Installer une ChatBox IA pour gérer les demandes 24h/24</h3>

            <div
              className="tuto-card card"
              onClick={() => playAudioThenRedirect("/audio/11_1_Installer_ChaBox_IA.mp3")}
              style={{
                backgroundImage: "url('/assets/ChatBoxIA.png')",
                backgroundSize: "100% auto",
                backgroundPosition: "top center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#0F172A",
                cursor: "pointer"
              }}
            >
              <div className="card-bottom">
                <p>Idéal pour les mairies, hôpitaux, associations et entreprises.</p>

                <span className="tuto-btn">
                  <span>Lire</span> <FiArrowRight className="arrow-animate" />
                </span>
              </div>
            </div>

            {/* TRANSCRIPTION */}
            <button
              className="transcript-btn"
              onClick={() => toggleTranscript(5)}
              aria-expanded={openTranscript === 5}
            >
              {openTranscript === 5 ? "Masquer la transcription" : "Lire la transcription"}
            </button>

            {openTranscript === 5 && (
              <div className="transcript-text" aria-live="polite">
                Ce tutoriel explique comment installer une ChatBox IA capable de gérer les
                demandes 24h/24. Une solution idéale pour améliorer l’accueil, réduire la
                charge des équipes et fluidifier les échanges.

                <Link to="/register" className="transcript-link">
                  Créer un compte
                </Link>
              </div>
            )}
          </div>

          {/* TUTO 3 */}
          <div className="category-card-wrapper">
            <h3 className="category-title">Centraliser et automatiser toutes vos demandes</h3>

            <div
              className="tuto-card card"
              onClick={() => playAudioThenRedirect("/audio/12_1_Centraliser_automatiser_toutes_vos_demandes.mp3")}
              style={{
                backgroundImage: "url('/assets/CentralisationIa.png')",
                backgroundSize: "100% auto",
                backgroundPosition: "top center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#0F172A",
                cursor: "pointer"
              }}
            >
              <div className="card-bottom">
                <p>
                  Un système intelligent qui centralise, trie et oriente automatiquement toutes les demandes internes et externes.
                </p>

                <span className="tuto-btn">
                  <span>Lire</span> <FiArrowRight className="arrow-animate" />
                </span>
              </div>
            </div>

            {/* TRANSCRIPTION */}
            <button
              className="transcript-btn"
              onClick={() => toggleTranscript(6)}
              aria-expanded={openTranscript === 6}
            >
              {openTranscript === 6 ? "Masquer la transcription" : "Lire la transcription"}
            </button>

            {openTranscript === 6 && (
              <div className="transcript-text" aria-live="polite">
                Ce tutoriel présente un système intelligent capable de centraliser toutes les
                demandes, de les trier automatiquement et de les orienter vers les bons services.
                Une solution puissante pour fluidifier les flux internes et externes.

                <Link to="/register" className="transcript-link">
                  Créer un compte
                </Link>
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
