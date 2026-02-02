import "./App.css";
import "./styles/responsive.css";

import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import About from "./pages/About";
import Ressources from "./pages/Ressources";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";

export default function App() {
  // Effet 3D sur les images
  useEffect(() => {
    const handleScroll = () => {
      const images = document.querySelectorAll(".img-3d");
      images.forEach((img) => {
        const speed = 0.15;
        const offset = window.scrollY * speed;
        img.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/ressources" element={<Ressources />} />
        </Route>
      </Routes>

      {/* 🔥 Bouton RESET TUNNEL (développement uniquement) */}
      <button
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "10px 15px",
          background: "#9333EA",
          color: "white",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          zIndex: 9999,
          fontSize: "14px"
        }}
      >
        RESET TUNNEL
      </button>
    </>
  );
}
