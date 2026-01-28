import "../styles/hero.css";
import heroIllustration from "../assets/Heroillustration.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-box">
          
          <div className="hero-content">
            <h1 className="hero-title">
              Explorez le <span className="hero-web">Web</span> sous toutes<br />
              <span className="hero-facettes">ses facettes</span>
            </h1>

            <p className="hero-text">
              Le monde du web évolue constamment, et nous sommes là pour vous guider à travers ses tendances,
              technologies et meilleures pratiques. Que vous soyez développeur, designer ou passionné du digital,
              notre blog vous offre du contenu de qualité pour rester à la pointe.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary">Découvrir les articles</button>
              <button className="btn-outline">S’abonner à la newsletter</button>
            </div>
          </div>

          {/* Image intégrée dans le même rectangle */}
          <div className="hero-image-wrapper">
            <img
              src={heroIllustration}
              alt="Illustration interface web"
              className="hero-image"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
