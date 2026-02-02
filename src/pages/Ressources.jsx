import "../styles/ressourcesPage.css";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import RessourcesCategories from "../components/RessourcesCategories";

export default function Ressources() {
  const navigate = useNavigate();

  // Fonction audio + redirection
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
      // ❌ PAS DE REDIRECTION ICI
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

      {/* CATÉGORIES */}
      <RessourcesCategories />

      {/* GUIDES POPULAIRES */}
      <section className="ressources-guides">
        <h2 className="section-title">Guides populaires</h2>

        <div className="guides-grid">

          {/* Guide 1 */}
          <div className="category-card-wrapper">
            <h3 className="category-title">
              Moderniser vos services<br />grâce à l’intelligence artificielle
            </h3>

            <div
              className="guide-card card"
              onClick={() => playAudioThenRedirect("/audio/7_1_Moderniser_services_IA.mp3")}
              style={{
                backgroundImage: "url('/src/assets/ModerniserVosServiceIA.png')",
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
          </div>

          {/* Guide 2 */}
          <div className="category-card-wrapper">
            <h3 className="category-title">Digitalisation intelligente : les systèmes essentiels</h3>

            <div
              className="guide-card card"
              onClick={() => playAudioThenRedirect("/audio/8_1_Digitalisation_systemes_essentiels.mp3")}
              style={{
                backgroundImage: "url('/src/assets/DigitalisationIntelligente.png')",
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
          </div>

          {/* Guide 3 */}
          <div className="category-card-wrapper">
            <h3 className="category-title">Modèles IA : usages avancés pour la santé et la recherche</h3>

            <div
              className="guide-card card"
              onClick={() => playAudioThenRedirect("/audio/9_1_Modeles_IA_sante_recherche.mp3")}
              style={{
                backgroundImage: "url('/src/assets/ModelesIASanteRecherche.png')",
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
          </div>

        </div>
      </section>

      {/* TUTORIELS RÉCENTS */}
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
                backgroundImage: "url('/src/assets/AuditIA.png')",
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
          </div>

          {/* Tuto 2 */}
          <div className="category-card-wrapper">
            <h3 className="category-title">Installer une ChatBox IA pour gérer les demandes 24h/24</h3>

            <div
              className="tuto-card card"
              onClick={() => playAudioThenRedirect("/audio/11_1_Installer_ChaBox_IA.mp3")}
              style={{
                backgroundImage: "url('/src/assets/ChatBoxIA.png')",
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
          </div>

          {/* Tuto 3 */}
          <div className="category-card-wrapper">
            <h3 className="category-title">Centraliser et automatiser toutes vos demandes</h3>

            <div
              className="tuto-card card"
              onClick={() => playAudioThenRedirect("/audio/12_1_Centraliser_automatiser_toutes_vos_demandes.mp3")}
              style={{
                backgroundImage: "url('/src/assets/CentralisationIa.png')",
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
          </div>

        </div>
      </section>

    </div>
  );
}
