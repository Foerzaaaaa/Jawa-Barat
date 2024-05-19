import React, { useState } from 'react';
import '../css/Penginapan.css';

const Penginapan = () => {
  const [selectedAccommodation, setSelectedAccommodation] = useState("");
  const [selectedAccommodationDescription, setSelectedAccommodationDescription] = useState("");

  const accommodations = [
    { name: "Pilih Jenis Hotel", description: "Pilih jenis penginapan dari menu." },
    { name: "Hotel Bintang 1", description: "Hotel hemat yang menawarkan kamar dasar dan fasilitas terbatas. Cocok untuk wisatawan dengan anggaran terbatas yang mencari tempat tinggal sederhana." },
    { name: "Hotel Bintang 2", description: "Penginapan terjangkau dengan peningkatan fasilitas dan dekorasi kamar. Menyediakan kenyamanan dasar serta beberapa fasilitas tambahan seperti wifi dan sarapan gratis." },
    { name: "Hotel Bintang 3", description: "Hotel menengah yang menyediakan kamar nyaman dan fasilitas tambahan seperti kolam renang dan pilihan kamar yang beragam. Ideal untuk keluarga dan perjalanan bisnis." },
    { name: "Hotel Bintang 4", description: "Hotel mewah yang menawarkan layanan berkualitas tinggi, pilihan kamar yang beragam, fasilitas makan, dan hiburan. Menyediakan pengalaman menginap yang lengkap dan memanjakan." },
    { name: "Hotel Bintang 5", description: "Hotel mewah dengan fasilitas terbaik, layanan luar biasa, dan beragam pilihan hiburan dan makan. Memberikan pengalaman menginap yang tak terlupakan dengan standar tertinggi." }
  ];

  const handleAccommodationChange = e => {
    const accommodation = accommodations.find(acc => acc.name === e.target.value);
    setSelectedAccommodation(accommodation.name);
    setSelectedAccommodationDescription(accommodation.description);
  };

  return (
    <div className="container-penginapan">
      <h1>Jenis Penginapan</h1>
      <select value={selectedAccommodation} onChange={handleAccommodationChange}>
        {accommodations.map(acc => (
          <option key={acc.name} value={acc.name}>{acc.name}</option>
        ))}
      </select>
      <div className="category-penginapan">
        <div className="info-box-penginapan">
          <h2>{selectedAccommodation}</h2>
          <p>{selectedAccommodationDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default Penginapan;
