import "../styles/resetPassword.css";
import { useState } from "react";

export default function ResetPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Un lien de réinitialisation vous a été envoyé (simulation).");
  };

  return (
    <div className="reset-page">

      {/* HERO ALIGNÉ COMME RESSOURCES */}
      <section className="reset-hero">
        <h1 className="reset-hero-title blink">
          Réinitialiser <span className="violet">votre mot de passe</span>
        </h1>

        <p className="reset-hero-subtitle">
          Entrez votre adresse email pour recevoir un lien sécurisé de réinitialisation.
        </p>

        <form className="reset-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="reset-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="exemple@mail.com"
          />

          <button type="submit" className="reset-button">
            Envoyer le lien
          </button>
        </form>
      </section>

    </div>
  );
}
