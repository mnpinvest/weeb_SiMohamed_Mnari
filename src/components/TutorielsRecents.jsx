import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function TutorielsRecents() {
  const navigate = useNavigate();

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
    <section className="ressources-tutos">
      <h2 className="section-title">Tutoriels récents</h2>

      <div className="tutos-grid">

        {/* Tuto 1 */}
        <div className="category-card-wrapper">
          <h3 className="category-title">Créer un mini‑audit IA pour votre organisation</h3>

          <div
            className="tuto-card card"
            onClick={() => playAudioThenRedirect("/audio/10_1_Creer_miniaudit_IA.mp3")}
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
        </div>

        {/* Tuto 2 */}
        <div className="category-card-wrapper">
          <h3 className="category-title">Installer une ChatBox IA pour gérer les demandes 24h/24</h3>

          <div
            className="tuto-card card"
            onClick={() => playAudioThenRedirect("/audio/11_1_Installer_ChaBox_IA.mp3")}
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
        </div>

        {/* Tuto 3 */}
        <div className="category-card-wrapper">
          <h3 className="category-title">Centraliser et automatiser toutes vos demandes</h3>

          <div
            className="tuto-card card"
            onClick={() =>
              playAudioThenRedirect("/audio/12_1_Centraliser_automatiser_toutes_vos_demandes.mp3")
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
        </div>

      </div>
    </section>
  );
}
