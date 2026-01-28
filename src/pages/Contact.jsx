import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">

      {/* SECTION TITRE + PARAGRAPHE */}
      <div className="contact-header">
        <h1 className="contact-title">Votre avis compte !</h1>

        <p className="contact-subtitle">
          Votre retour est essentiel pour nous améliorer ! Partagez votre expérience,
          dites‑nous ce que vous aimez et ce que nous pourrions améliorer. Vos suggestions
          nous aident à faire de ce blog une ressource toujours plus utile et enrichissante.
        </p>
      </div>

      {/* SECTION FORMULAIRE */}
      <div className="contact-form-box">

        <form className="contact-form">

          {/* LIGNE 1 : NOM + PRÉNOM */}
          <div className="form-row">
            <div className="form-group underline">
              <label>Nom</label>
              <input type="text" />
            </div>

            <div className="form-group underline">
              <label>Prénom</label>
              <input type="text" />
            </div>
          </div>

          {/* LIGNE 2 : ADRESSE (ENCADRÉ) + EMAIL */}
          <div className="form-row">
            <div className="form-group boxed">
              <label>Adresse</label>
              <input type="text" />
            </div>

            <div className="form-group underline">
              <label>Email</label>
              <input type="email" />
            </div>
          </div>

          {/* MESSAGE */}
          <div className="form-group underline full-width">
            <label>Message</label>
            <textarea></textarea>
          </div>

          {/* BOUTON + CASE RADIO ALIGNÉS */}
          <div className="form-footer">
            <button type="submit" className="contact-btn">Contact</button>

            <div className="radio-wrapper">
              <input type="checkbox" className="radio-input" />
              <span className="radio-custom"></span>
            </div>
          </div>

        </form>

      </div>

    </div>
  );
}
