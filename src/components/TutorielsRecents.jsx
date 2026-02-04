import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { useState } from "react";

export default function TutorielsRecents() {
  const navigate = useNavigate();

  // ============================
  // TRANSCRIPTIONS ACCESSIBLES
  // ============================
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
    <section className="ressources-tutos">
      <h2 className="section-title">Tutoriels récents</h2>

      <div className="tutos-grid">

        {/* TUTO 1 */}
        <div className="category-card-wrapper">
          <h3 className="category-title">Créer un mini‑audit IA pour votre organisation</h3>

          <div
            className="tuto-card card"
            onClick={() =>
              playAudioThenRedirect(
                "/audio/10_1_Creer_miniaudit_IA.mp3",
                "audit-ia"
              )
            }
            style={{
              backgroundImage: "url('/assets/TutoMiniAuditOrganisation.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
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
            onClick={() => toggleTranscript(1)}
            aria-expanded={openTranscript === 1}
          >
            {openTranscript === 1 ? "Masquer la transcription" : "Lire la transcription"}
          </button>

          {openTranscript === 1 && (
            <div className="transcript-text" aria-live="polite">
              Ce tutoriel vous montre comment réaliser un mini‑audit IA simple et rapide
              pour identifier les tâches automatisables dans votre organisation. Une méthode
              efficace pour gagner du temps et améliorer vos processus.

              <a href="/register" className="transcript-link">
                Créer un compte
              </a>
            </div>
          )}
        </div>

        {/* TUTO 2 */}
        <div className="category-card-wrapper">
          <h3 className="category-title">Installer une ChatBox IA pour gérer les demandes 24h/24</h3>

          <div
            className="tuto-card card"
            onClick={() =>
              playAudioThenRedirect(
                "/audio/11_1_Installer_ChaBox_IA.mp3",
                "chatbox"
              )
            }
            style={{
              backgroundImage: "url('/assets/TutoChatboxOrganisation.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
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
            onClick={() => toggleTranscript(2)}
            aria-expanded={openTranscript === 2}
          >
            {openTranscript === 2 ? "Masquer la transcription" : "Lire la transcription"}
          </button>

          {openTranscript === 2 && (
            <div className="transcript-text" aria-live="polite">
              Ce tutoriel explique comment installer une ChatBox IA capable de gérer les
              demandes 24h/24. Une solution idéale pour améliorer l’accueil, réduire la
              charge des équipes et fluidifier les échanges.

              <a href="/register" className="transcript-link">
                Créer un compte
              </a>
            </div>
          )}
        </div>

        {/* TUTO 3 */}
        <div className="category-card-wrapper">
          <h3 className="category-title">Centraliser et automatiser toutes vos demandes</h3>

          <div
            className="tuto-card card"
            onClick={() =>
              playAudioThenRedirect(
                "/audio/12_1_Centraliser_automatiser_toutes_vos_demandes.mp3",
                "centralisation"
              )
            }
            style={{
              backgroundImage: "url('/assets/TutoFormulaireIntelligent.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              cursor: "pointer"
            }}
          >
            <div className="card-bottom">
              <p>Un outil simple pour fluidifier les demandes internes et externes.</p>

              <span className="tuto-btn">
                <span>Lire</span> <FiArrowRight className="arrow-animate" />
              </span>
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
              Ce tutoriel présente un système intelligent capable de centraliser toutes les
              demandes, de les trier automatiquement et de les orienter vers les bons services.
              Une solution puissante pour fluidifier les flux internes et externes.

              <a href="/register" className="transcript-link">
                Créer un compte
              </a>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
