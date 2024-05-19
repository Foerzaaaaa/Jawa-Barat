import React from "react";
import "../css/pagesatu.css"; 
import Gambar from "../assets/pemandangan.png"; 

const PageSatu = () => {
  return (
    <div className="pagesatu-container-flex">
      <img
        className="gambar-besar"
        src={Gambar}
        alt="Gambar Besar"
      />
      <div className="tulisan-jawa-barat">Jawa Barat</div>
    </div>
  );
};

export default PageSatu;
