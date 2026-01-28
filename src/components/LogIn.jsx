import React from "react";
import "../styles/login.css";

export default function LogIn() {
  return (
    <main className="login-wrapper">

      {/* ============================
          SECTION FIGMA LOGIN
      ============================ */}
      <section className="login-figma-box">
        <div className="login-inner-box">

          {/* Titre */}
          <h2 className="login-figma-title">Se connecter</h2>

          {/* Champs Email + Password */}
          <form className="login-figma-form">

            {/* Champ Email */}
            <div className="login-field">
              <label htmlFor="email" className="login-label">Email</label>

              <input
                type="email"
                id="email"
                className="login-input"
                autoComplete="off"
              />

              <div className="login-underline"></div>
            </div>

            {/* Champ Password */}
            <div className="login-field">
              <label htmlFor="password" className="login-label">Password</label>

              <input
                type="password"
                id="password"
                className="login-input"
                autoComplete="off"
              />

              <div className="login-underline"></div>
            </div>

            {/* Bouton */}
            <button type="submit" className="login-figma-button">
              Se connecter
            </button>
          </form>

          {/* Lien mot de passe oublié */}
          <a href="#" className="login-forgot">Mot de passe oublié ?</a>

          {/* Texte créer un compte */}
          <div className="login-create">
            <p>Vous n’avez pas de compte ?</p>
            <p>Vous pouvez</p>
            <p><a href="#">en créer un</a></p>
          </div>

        </div>
      </section>

    </main>
  );
}
