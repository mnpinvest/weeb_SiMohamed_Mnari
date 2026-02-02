import "../styles/Contact.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Contact() {
  const navigate = useNavigate();

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("contact_message");

    if (saved) {
      try {
        const data = JSON.parse(saved);
        setNom(data.nom || "");
        setPrenom(data.prenom || "");
        setAdresse(data.adresse || "");
        setEmail(data.email || "");
        setMessage(data.message || "");
      } catch (e) {
        console.error("Erreur parsing contact_message", e);
      }
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    const messageData = {
      nom,
      prenom,
      adresse,
      email,
      message,
    };

    if (!isLoggedIn) {
      localStorage.setItem("contact_message", JSON.stringify(messageData));
      navigate("/login");
      return;
    }

    console.log("Message envoyé :", messageData);

    localStorage.removeItem("contact_message");

    alert("Votre message a bien été envoyé !");

    setNom("");
    setPrenom("");
    setAdresse("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-page">

      <div className="contact-header">
        <h1 className="contact-title">Votre avis compte !</h1>

        <p className="contact-subtitle">
          Votre retour est essentiel pour nous améliorer ! Partagez votre expérience,
          dites‑nous ce que vous aimez et ce que nous pourrions améliorer. Vos suggestions
          nous aident à faire de ce blog une ressource toujours plus utile et enrichissante.
        </p>
      </div>

      <div className="contact-form-box">

        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="form-row">
            <div className="form-group underline">
              <label>Nom</label>
              <input
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
            </div>

            <div className="form-group underline">
              <label>Prénom</label>
              <input
                type="text"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group boxed">
              <label>Adresse</label>
              <input
                type="text"
                value={adresse}
                onChange={(e) => setAdresse(e.target.value)}
              />
            </div>

            <div className="form-group boxed">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group underline full-width">
            <label>Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <div className="form-footer">

            <button type="submit" className="contact-btn">Envoyer</button>

            <div className="radio-wrapper">
              <input type="checkbox" className="radio-input" />
              <span className="radio-custom"></span>

              <span className="radio-text">
                J’accepte le traitement de mes données.
              </span>
            </div>

          </div>

        </form>

      </div>

    </div>
  );
}
