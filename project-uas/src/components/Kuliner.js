import React, { useState } from 'react';
import '../css/Kuliner.css';

const Kuliner = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState("");
  const [restaurantDescription, setRestaurantDescription] = useState("");

  const restaurants = [
    { name: "Pilih Restoran", description: "Pilih Restoran dari menu untuk lebih detail." },
    { name: "Warung Nasi Ampera", description: "Lokasi: Bandung - Terkenal dengan sajian Nasi Timbel klasiknya yang lezat dan harga terjangkau." },
    { name: "Soto Sulung Stasiun", description: "Lokasi: Bandung - Menawarkan variasi Soto Bandung yang kaya rasa dengan daging yang empuk dan kuah yang segar." },
    { name: "Batagor Kingsley", description: "Lokasi: Bandung - Salah satu tempat terbaik untuk menikmati Batagor di Bandung, dengan tekstur yang garing dan saus yang kaya rasa." },
    { name: "Lotek Kalipah Apo", description: "Lokasi: Bandung - Dikenal dengan Lotek dan Karedok yang lezat serta saus kacangnya yang istimewa." },
    { name: "Rumah Makan Pagi Sore", description: "Lokasi: Bandung - Spesialis nasi padang dengan pilihan beragam lauk pauk yang menggugah selera." },
    { name: "Cafe Halaman", description: "Lokasi: Bogor - Cafe dengan konsep outdoor yang menyajikan kopi dan makanan ringan dalam suasana yang santai." },
    { name: "Saung Gawir", description: "Lokasi: Cianjur - Menawarkan pengalaman makan dengan pemandangan sawah yang menakjubkan dan menu tradisional Sunda." },
    { name: "RM Saung Bambu", description: "Lokasi: Karawang - Tempat makan keluarga yang terkenal dengan suasana alam dan menu masakan Sunda asli." },
    { name: "Ampera 2 Tak", description: "Lokasi: Sukabumi - Terkenal dengan sambalnya yang pedas dan pilihan ayam dan ikan bakar." },
    { name: "Kedai Kita", description: "Lokasi: Bogor - Terkenal dengan pizza bakar kayunya yang unik dan suasana yang nyaman untuk kumpul bersama." }
  ];

  const handleRestaurantChange = e => {
    const restaurant = restaurants.find(r => r.name === e.target.value);
    setSelectedRestaurant(restaurant.name);
    setRestaurantDescription(restaurant.description);
  };

  return (
    <div className="container-kuliner">
      <h1>Top 10 Kuliner di Jawa Barat</h1>
      <select value={selectedRestaurant} onChange={handleRestaurantChange}>
        {restaurants.map(r => (
          <option key={r.name} value={r.name}>{r.name}</option>
        ))}
      </select>
      <div className="category-kuliner">
        <div className="info-box-kuliner">
          <h2>{selectedRestaurant}</h2>
          <p>{restaurantDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default Kuliner;
