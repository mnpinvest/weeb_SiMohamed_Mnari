import "./App.css";
import "./styles/responsive.css"; // ⭐ On importe le responsive global ici

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import LogIn from "./components/LogIn";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <main className="container">
              <Home />
            </main>
            <Footer />
          </>
        }
      />

      <Route
        path="/login"
        element={
          <main className="container">
            <LogIn />
          </main>
        }
      />

      <Route
        path="/contact"
        element={
          <>
            <Header />
            <main className="container">
              <Contact />
            </main>
            <Footer />
          </>
        }
      />
    </Routes>
  );
}
