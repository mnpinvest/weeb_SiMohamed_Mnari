import { Link, useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function RessourcesCategories() {
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
    <section className="ressources-categories">
      <h2 className="section-title">Catégories</h2>

      <div className="categories-grid">

        {/* 1. Automatisation & Agents IA */}
        <div className="category-card-wrapper">
          <h3 className="category-title">Automatisation & Agents IA</h3>
          <div
            className="category-card card"
            onClick={() => playAudioThenRedirect("/audio/1_1_Automatisation.mp3")}
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
                Automatisez vos tâches, fluidifiez vos processus et déployez des
                agents IA adaptés à votre organisation.
              </p>
              <span className="category-btn">
                Explorer <FiArrowRight className="arrow-animate" />
              </span>
            </div>
          </div>
        </div>

        {/* 2. Tunnels de vente & Conversion */}
        <div className="category-card-wrapper">
          <h3 className="category-title">Tunnels de vente & Conversion</h3>
          <div
            className="category-card card"
            onClick={() => playAudioThenRedirect("/audio/2_1_Tunel_de_vente.mp3")}
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
                Créez des tunnels performants, automatisés et conçus pour
                convertir en continu.
              </p>
              <span className="category-btn">
                Explorer <FiArrowRight className="arrow-animate" />
              </span>
            </div>
          </div>
        </div>

        {/* 3. Robots humanoïdes & IA embarquée */}
        <div className="category-card-wrapper">
          <h3 className="category-title">Robots humanoïdes & IA embarquée</h3>
          <div
            className="category-card card"
            onClick={() => playAudioThenRedirect("/audio/3_1_robots humanoïdes.txt.mp3")}
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
                Découvrez les usages professionnels des robots humanoïdes et des
                systèmes IA embarqués.
              </p>
              <span className="category-btn">
                Explorer <FiArrowRight className="arrow-animate" />
              </span>
            </div>
          </div>
        </div>

        {/* 4. Modernisation IA des services publics */}
        <div className="category-card-wrapper">
          <h3 className="category-title">Modernisation IA des services publics</h3>
          <div
            className="category-card card"
            onClick={() => playAudioThenRedirect("/audio/4_1_ModernisationIA_des_services_publics.mp3")}
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
                Digitalisez vos services, améliorez l’accueil et fluidifiez les
                demandes grâce à l’IA.
              </p>
              <span className="category-btn">
                Explorer <FiArrowRight className="arrow-animate" />
              </span>
            </div>
          </div>
        </div>

        {/* 5. Modèles IA & IA Santé */}
        <div className="category-card-wrapper">
          <h3 className="category-title">Modèles IA & IA Santé</h3>
          <div
            className="category-card card"
            onClick={() => playAudioThenRedirect("/audio/5_1_Modèles IA & IA Santé.mp3")}
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
                Déployez des modèles IA pour la recherche, l’analyse médicale,
                la gestion des flux et l’automatisation des tâches critiques.
              </p>
              <span className="category-btn">
                Explorer <FiArrowRight className="arrow-animate" />
              </span>
            </div>
          </div>
        </div>

        {/* 6. Intégrateur Robotique Humanoïde */}
        <div className="category-card-wrapper">
          <h3 className="category-title">Intégrateur Robotique Humanoïde</h3>
          <div
            className="category-card card"
            onClick={() => playAudioThenRedirect("/audio/6_1_Intégrateur Robotique Humanoïde.mp3")}
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
                Installation, configuration, adaptation métier et maintenance de
                robots humanoïdes pour entreprises, collectivités et
                établissements de santé.
              </p>
              <span className="category-btn">
                Explorer <FiArrowRight className="arrow-animate" />
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
