import { useState } from "react";
import "../styles/register.css";

export default function Register() {
  const detectedTag = localStorage.getItem("selectedTag") || "";

  let contactData = {};
  const savedMessage = localStorage.getItem("contact_message");

  if (savedMessage) {
    try {
      contactData = JSON.parse(savedMessage);
    } catch (e) {
      console.error("Erreur parsing contact_message", e);
    }
  }

  const [formData, setFormData] = useState({
    nom: contactData.nom || "",
    prenom: contactData.prenom || "",
    email: contactData.email || "",
    telephone: "",
    password: "",
    confirmPassword: "",
    rgpd: false,
    theme: detectedTag,
  });

  const [errors, setErrors] = useState({});
  const [showWelcome, setShowWelcome] = useState(false); // popup de remerciement

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.nom.trim()) newErrors.nom = "Champ obligatoire";
    if (!formData.prenom.trim()) newErrors.prenom = "Champ obligatoire";
    if (!formData.email.trim()) newErrors.email = "Champ obligatoire";
    if (!formData.telephone.trim()) newErrors.telephone = "Champ obligatoire";
    if (!formData.password.trim()) newErrors.password = "Champ obligatoire";

    if (!formData.theme.trim())
      newErrors.theme = "Veuillez choisir une thématique";

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
    }

    if (!formData.rgpd) {
      newErrors.rgpd = "Vous devez accepter les conditions";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // Sauvegarde
    localStorage.setItem("user_account_created", "true");
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user_selected_tag", formData.theme);

    // Affichage de la modale (sans masquer la page)
    setShowWelcome(true);
  };

  return (
    <div className="register-page">

      {/* ============================ */}
      {/* MODALE PREMIUM */}
      {/* ============================ */}
      {showWelcome && (
        <div className="modal-overlay">
          <div className="modal-box">

            <h2 className="modal-title">
              Bienvenue dans votre espace IA 🎉
            </h2>

            <p className="modal-text">
              Votre inscription est confirmée ! Vous avez désormais accès à des ressources
              mises à jour en temps réel, adaptées à votre thématique et à votre activité.
              Vous pourrez suivre les dernières tendances, découvrir de nouvelles opportunités
              et prendre des décisions plus éclairées pour accélérer la croissance de votre
              entreprise. L'accès est <strong>gratuit, illimité et sans engagement</strong>.
              Et si vous le souhaitez, nos services restent à votre disposition pour un
              accompagnement personnalisé dans vos futurs projets digitaux.
            </p>

            <button
              onClick={() => setShowWelcome(false)}
              className="modal-close-btn"
            >
              Fermer
            </button>

          </div>
        </div>
      )}

      {/* ============================ */}
      {/* HEADER */}
      {/* ============================ */}
      <div className="register-header">
        <h1>
          Votre <span className="register-highlight">espace</span> dédié vous attend
          <span style={{ color: "#9333EA" }}>!</span>
        </h1>

        <p>
          Créez votre compte gratuitement pour accéder à des ressources IA mises à jour en temps réel,
          adaptées à votre thématique et à votre activité. Vous recevrez les dernières tendances,
          analyses et opportunités stratégiques pour prendre de meilleures décisions, gagner du temps
          et accélérer la croissance de votre entreprise. L’accès est gratuit, illimité et sans
          engagement. Et si vous le souhaitez, nos services restent à votre disposition pour un
          accompagnement personnalisé dans vos futurs projets digitaux.
        </p>

        {detectedTag && (
          <p className="detected-tag">
            Thématique détectée : {detectedTag}
          </p>
        )}
      </div>

      {/* ============================ */}
      {/* FORMULAIRE (toujours visible) */}
      {/* ============================ */}
      <form className="register-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Nom</label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Votre nom"
            className="register-input"
          />
          {errors.nom && <span className="error">{errors.nom}</span>}
        </div>

        <div className="form-group">
          <label>Prénom</label>
          <input
            type="text"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            placeholder="Votre prénom"
            className="register-input"
          />
          {errors.prenom && <span className="error">{errors.prenom}</span>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="exemple@mail.com"
            className="register-input"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Téléphone</label>
          <input
            type="text"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            placeholder="06 00 00 00 00"
            className="register-input"
          />
          {errors.telephone && <span className="error">{errors.telephone}</span>}
        </div>

        <div className="form-group">
          <label>Thématique choisie</label>
          <select
            name="theme"
            value={formData.theme}
            onChange={handleChange}
            className="register-input"
          >
            <option value="">Sélectionnez une thématique</option>
            <option value="automatisation">Automatisation & Agents IA</option>
            <option value="tunnels">Tunnels de vente & Conversion</option>
            <option value="robotique">Robots humanoïdes & IA embarquée</option>
            <option value="services-publics">Modernisation IA des services publics</option>
            <option value="sante">Modèles IA & IA Santé</option>
            <option value="integrateur">Intégrateur Robotique Humanoïde</option>
            <option value="audit-ia">Mini‑audit IA</option>
            <option value="chatbox">ChatBox IA</option>
            <option value="centralisation">Centralisation & automatisation</option>
            <option value="digitalisation">Digitalisation intelligente</option>
          </select>

          {errors.theme && <span className="error">{errors.theme}</span>}
        </div>

        <div className="form-group">
          <label>Mot de passe</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Votre mot de passe"
            className="register-input"
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label>Confirmer le mot de passe</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirmez votre mot de passe"
            className="register-input"
          />
          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword}</span>
          )}
        </div>

        <div className="form-checkbox">
          <input
            type="checkbox"
            name="rgpd"
            checked={formData.rgpd}
            onChange={handleChange}
          />
          <label>
            J’accepte les conditions d’utilisation et la politique de confidentialité.
          </label>
        </div>
        {errors.rgpd && <span className="error">{errors.rgpd}</span>}

        <button type="submit" className="btn-primary register-btn">
          Créer mon compte
        </button>

      </form>
    </div>
  );
}
