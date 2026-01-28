import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="contact-page">

      {/* SECTION HEADER DE LA PAGE */}
      <div className="contact-header">
        <h1 className="contact-title">Contact</h1>
        <p className="contact-subtitle">
          Nous sommes là pour répondre à vos questions.  
          Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
        </p>
      </div>

      {/* SECTION FORMULAIRE */}
      <div className="contact-container">

        <form className="contact-form">

          <div className="form-group">
            <label>Nom</label>
            <input type="text" placeholder="Votre nom" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Votre email" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Votre message"></textarea>
          </div>

          <button type="submit" className="contact-btn">
            Envoyer
          </button>

        </form>

      </div>

    </div>
  );
}
