import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import PageSatu from "./components/pagesatu";
import CategoryBox from "./components/categorybox";
import Budaya from "./components/Budaya";
import Kuliner from "./components/Kuliner";
import Wisata from "./components/Wisata";
import Penginapan from "./components/Penginapan";
import Berita from "./components/Berita";
import Sejarah from "./components/sejarah";
import ProfileContainer from "./components/profil";
import Weather from "./components/weather"; 
import About from "./components/about"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/style.css'; 

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  const location = useLocation(); 

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<><PageSatu /><CategoryBox /></>} />
        <Route path="/budaya" element={<Budaya />} />
        <Route path="/kuliner" element={<Kuliner />} />
        <Route path="/wisata" element={<Wisata />} />
        <Route path="/penginapan" element={<Penginapan />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/profil" element={<ProfileContainer />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {location.pathname === '/' && <Sejarah />}
    </div>
  );
}

export default AppWrapper;
