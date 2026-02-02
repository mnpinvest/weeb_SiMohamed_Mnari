import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/login.css";

export default function LogIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérifier si un compte existe
    const userExists = localStorage.getItem("user_account_created") === "true";

    // Aucun compte → redirection vers Register
    if (!userExists) {
      navigate("/register");
      return;
    }

    // Connexion simulée (backend plus tard)
    localStorage.setItem("isLoggedIn", "true");

    // Vérifier si un message Contact est en attente
    const savedMessage = localStorage.getItem("contact_message");

    if (savedMessage) {
      navigate("/contact");
    } else {
      navigate("/ressources"); // Redirection logique si aucun message
    }
  };

  return (
    <main className="login-wrapper">

      <section className="login-figma-box">
        <div className="login-inner-box">

          <h2 className="login-figma-title">Se connecter</h2>

          {error && <p style={{ color: "#F87171", fontSize: "14px" }}>{error}</p>}

          <form className="login-figma-form" onSubmit={handleSubmit}>

            <div className="login-field">
              <label htmlFor="email" className="login-label">Email</label>

              <input
                type="email"
                id="email"
                className="login-input"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="login-underline"></div>
            </div>

            <div className="login-field">
              <label htmlFor="password" className="login-label">Password</label>

              <input
                type="password"
                id="password"
                className="login-input"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="login-underline"></div>
            </div>

            <button type="submit" className="login-figma-button">
              Se connecter
            </button>
          </form>

          <Link to="/reset-password" className="login-forgot">
            Mot de passe oublié ?
          </Link>

          <div className="login-create">
            <p>
              Vous n’avez pas de compte ?{" "}
              <Link to="/register">Créer un compte</Link>
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
