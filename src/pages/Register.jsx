import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/register.css";

export default function Register() {
  const navigate = useNavigate();

  // ============================
  // ÉTAT INITIAL (PRÉ-REMPLISSAGE SI CONTACT EN ATTENTE)
  // ============================
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    password: "",
    confirmPassword: "",
    rgpd: false,
  });

  const [errors, setErrors] = useState({});

  // Charger les données du message en attente (si l’utilisateur venait de Contact)
  useEffect(() => {
    const saved = localStorage.getItem("contact_message");

    if (saved) {
      try {
        const data = JSON.parse(saved);
        setFormData((prev) => ({
          ...prev,
          nom: data.nom || "",
          prenom: data.prenom || "",
          email: data.email || "",
        }));
      } catch (e) {
        console.error("Erreur parsing contact_message", e);
      }
    }
  }, []);

  // ============================
  // GESTION DES CHAMPS
  // ============================
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // ============================
  // VALIDATION + REDIRECTION
  // ============================
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.nom.trim()) newErrors.nom = "Champ obligatoire";
    if (!formData.prenom.trim()) newErrors.prenom = "Champ obligatoire";
    if (!formData.email.trim()) newErrors.email = "Champ obligatoire";
    if (!formData.telephone.trim()) newErrors.telephone = "Champ obligatoire";
    if (!formData.password.trim()) newErrors.password = "Champ obligatoire";

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
    }

    if (!formData.rgpd) {
      newErrors.rgpd = "Vous devez accepter les conditions";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // ============================
    // CRÉATION DE COMPTE + CONNEXION
    // ============================
    localStorage.setItem("user_account_created", "true");
    localStorage.setItem("isLoggedIn", "true");

    // Vérifier si un message Contact est en attente
    const savedMessage = localStorage.getItem("contact_message");

    if (savedMessage) {
      navigate("/contact"); // Champs pré-remplis
    } else {
      navigate("/ressources"); // Logique business : montrer les produits
    }
  };

  return (
    <div className="register-page">

      <div className="register-header">
        <h1>
          Votre <span className="register-highlight">espace</span> dédié vous attend
          <span style={{ color: "#9333EA" }}>!</span>
        </h1>

        <p>
          Créer un compte vous permet d’accéder à
          <span className="highlight"> vos services IA</span>, de centraliser vos demandes
          et de démarrer votre transformation digitale avec un accompagnement structuré.
        </p>
      </div>

      <form className="register-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Nom</label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Votre nom"
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
          />
          {errors.telephone && <span className="error">{errors.telephone}</span>}
        </div>

        <div className="form-group">
          <label>Mot de passe</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Votre mot de passe"
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
