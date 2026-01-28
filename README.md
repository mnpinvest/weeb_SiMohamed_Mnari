# Weeb — Projet Front-End (Semaine 1)

Développé par **Si Mohamed Mnari**  
Cursus : Software Engineering
École : DataScientest  
Semaine : 05 — Partie Vitrine

---

## Objectif du projet

L’entreprise **Weeb** souhaite créer un site comprenant :

- une **partie vitrine**
- un **blog**
- un **espace d’authentification**

Pour cette première semaine, la mission consiste à développer **la partie vitrine**, c’est‑à‑dire :

- la page **Home**
- la page **Contact**
- la page **Login**

Le tout en respectant strictement la **maquette Figma fournie par le client**.

---

## Contraintes techniques imposées

Le client impose l’utilisation de :

- **React**
- **React Router**
- **Git / GitHub**

Aucun autre framework n’est imposé.  
L’IDE est libre.

---

## Architecture du projet

```
frontend/
│
├── public/
├── src/
│   ├── assets/              → Images et icônes
│   ├── components/          → Composants réutilisables (Header, Footer, Hero…)
│   ├── pages/               → Pages principales (Home, Contact, Login…)
│   ├── router/              → Fichier AppRouter.jsx (structure des routes)
│   ├── styles/              → Fichiers CSS par section/page
│   ├── App.jsx              → Routeur principal
│   ├── main.jsx             → Point d’entrée React
│
├── .gitignore
├── package.json
├── vite.config.js
├── README.md
```

---

# Architecture fonctionnelle — Qui contrôle quoi ?

Cette section explique **le rôle précis de chaque fichier**, comme demandé dans le sujet.

---

## `main.jsx` — Le point d’entrée (chef d’orchestre initial)

- Monte l’application React dans le DOM
- Charge le composant `App.jsx`
- Initialise toute l’application

**Sans lui, rien ne s’affiche.**

---

## `App.jsx` — Le routeur principal (chef d’orchestre logique)

- Gère la navigation avec `react-router-dom`
- Affiche le `Header` et le `Footer` sur toutes les pages
- Rend les pages `Home`, `Contact`, `Login` selon l’URL

➡️ **C’est lui qui décide quelle page afficher.**

---

## 🔹 `AppRouter.jsx` — Le contrôleur des routes

- Définit les routes `/`, `/contact`, `/login`
- Centralise la logique de navigation

**Il organise les chemins et les pages.**

---

## `Header.jsx` — Le contrôleur du responsive

- Affiche les liens de navigation en version desktop
- Affiche le hamburger en version mobile
- Gère l’état `menuOpen` pour ouvrir/fermer le menu mobile
- Utilise `.desktop-only` et `.mobile-only` pour basculer selon la résolution

**C’est le cerveau du comportement responsive du header.**

---

##`header.css` — Le régisseur du comportement responsive

- Gère l’affichage conditionnel du header selon la largeur d’écran
- Cache ou affiche les éléments avec `.desktop-only` / `.mobile-only`
- Contient les media queries :
  - `<600px` → mobile
  - `601px → 900px` → tablette
  - `>900px` → desktop

**C’est lui qui décide quand le hamburger apparaît ou disparaît.**

---

## 🔹 `Footer.jsx` — Le bloc final universel

- Affiché sur toutes les pages
- Contient les icônes sociales et les liens bas de page
- Utilise les assets du dossier `src/assets`

**Il ferme visuellement toutes les pages.**

---

#🔹 Pages : `Home.jsx`, `Contact.jsx`, `Login.jsx`

- Chaque fichier représente une page complète
- Elles sont rendues par `App.jsx` selon l’URL
- Elles utilisent des composants internes (`Hero`, `FormContact`, etc.)

**Ce sont les acteurs principaux du contenu.**

---

## Composants internes (`Hero.jsx`, `Trust.jsx`, `SectionTendances.jsx`, etc.)

- Découpent la page Home en sections logiques
- Permettent une meilleure réutilisation et maintenance

**Ils structurent la page Home comme dans la maquette.**

---

## `FormContact.jsx` — Le formulaire intelligent

- Gère les inputs, labels, bouton
- Utilise `contact.css` pour le style
- Respecte la maquette Figma

➡️ **Il gère toute la logique visuelle du formulaire.**

---

## `styles/*.css` — Les costumiers du projet

Chaque fichier CSS correspond à une section ou une page :

- `header.css` → header + responsive
- `footer.css` → footer
- `hero.css` → section Hero
- `tendances.css` → section Tendances
- `ressources.css` → section Ressources
- `trust.css` → section Trust
- `contact.css` → page Contact
- `login.css` → page Login

➡️ **Chaque fichier contrôle le style d’un composant précis.**

---

# Librairies installées

- **react**
- **react-dom**
- **react-router-dom**
- **vite**
- **@vitejs/plugin-react**

Aucune librairie inutile n’a été ajoutée.

---

# Fonctionnement de l’application

## Navigation

La navigation est gérée avec **react-router-dom** :

- `/` → Home
- `/contact` → Contact
- `/login` → Login

Le **Header** et le **Footer** sont affichés sur toutes les pages.

---

## Responsive

Le site est entièrement responsive :

### 📱 Mobile (<600px)
- Menu hamburger
- Navigation mobile
- Layout compact

### Tablette (601px → 900px)
- Header réorganisé
- Boutons centrés
- Pas de hamburger

### Desktop (>900px)
- Layout complet
- Navigation horizontale

---

# Respect de la maquette Figma

Tous les éléments présents dans la maquette ont été intégrés :

- Header
- Hero
- Sections de contenu
- Formulaire de contact
- Page Login
- Couleurs, typographies, espacements
- Responsive mobile / tablette / desktop
- Hover, transitions

**Le design est fidèle à 100%.**

---

# ualité du code

- Code indenté et lisible
- Composants découpés proprement
- CSS organisé par page
- Pas de code mort
- Nommage cohérent
- Aucun warning dans la console

---

# Git & Workflow

- Commits réguliers et clairs
- Messages explicites
- Dépôt nommé correctement : `weeb_SiMohamed_Mnari`
- Déploiement automatique via Vercel

---

# Conclusion

Le projet respecte :

- toutes les **exigences techniques**
- toutes les **pages demandées**
- la **maquette Figma**
- le **responsive mobile / tablette / desktop**
- les **bonnes pratiques Git**
- une **architecture propre et professionnelle**

Le site est fonctionnel, fidèle au design, et prêt pour la suite du développement (blog + authentification).

