import "./App.css";
import "./styles/responsive.css";

import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import About from "./pages/About";

export default function App() {
  return (
    <Routes>

      {/* Toutes les pages passent par Layout */}
      <Route element={<Layout />}>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

      </Route>

    </Routes>
  );
}
