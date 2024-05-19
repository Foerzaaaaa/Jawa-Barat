import React, { useState } from "react";
import { Link } from "react-router-dom";
import Budaya from '../assets/budaya.png';
import Kuliner from '../assets/kuliner.png';
import Wisata from '../assets/wisata.png';
import Penginapan from '../assets/penginapan.png';
import Berita from '../assets/berita.png';

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/categorybox.css";

const CategoryBox = () => {
  const paths = ["/Budaya", "/Kuliner", "/Wisata", "/Penginapan", "/Berita"];
  const boxNames = ["BUDAYA", "KULINER", "WISATA", "PENGINAPAN", "BERITA"];
  const imageUrls = [Budaya, Kuliner, Wisata, Penginapan, Berita];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % boxNames.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + boxNames.length) % boxNames.length);
  };

  return (
    <div className="category-container">
      <h2 className="category-title">Kategori Pilihan</h2>
      <button id="prev-btn" onClick={handlePrev}>&lt;</button>
      <div className="box-wrapper">
        {imageUrls.map((url, index) => (
          <Link key={index} to={paths[index]} className={`box-link ${index === activeIndex ? "active" : ""}`}>
            <div className="box">
              <img src={url} alt={boxNames[index]} />
              <div className="category-name">{boxNames[index]}</div>
            </div>
          </Link>
        ))}
      </div>
      <button id="next-btn" onClick={handleNext}>&gt;</button>
      <div className="indicator-container">
        {imageUrls.map((_, index) => (
          <span key={index} className={`indicator ${index === activeIndex ? "active" : ""}`}></span>
        ))}
      </div>
    </div>
  );
};

export default CategoryBox;
