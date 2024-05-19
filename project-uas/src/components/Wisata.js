import React, { useState } from 'react';
import '../css/Wisata.css'; 

const Wisata = () => {
  const [selectedAttraction, setSelectedAttraction] = useState("");
  const [attractionDetails, setAttractionDetails] = useState("");

  const attractions = [
    { name: "Pilih Tempat Wisata", description: "Pilih Tempat wisata dari menu untuk detail lebih lanjut." },
    { name: "Kawah Putih", description: "Lokasi: Ciwidey, Bandung - Kawah Putih merupakan danau kawah vulkanik dengan warna air yang kebiruan akibat kandungan belerang yang tinggi. Area sekitarnya menawarkan pemandangan yang sangat indah dengan latar belakang hutan dan perkebunan teh yang luas, menjadikannya tempat yang ideal untuk hiking dan fotografi." },
    { name: "Taman Safari Indonesia", description: "Lokasi: Cisarua, Bogor - Taman Safari Indonesia adalah kawasan konservasi dengan berbagai spesies hewan yang hidup bebas di habitatnya. Pengunjung dapat menjelajahi taman ini dengan mobil dan berinteraksi langsung dengan hewan seperti harimau, badak, dan jerapah. Taman ini juga menawarkan atraksi wahana, pertunjukan hewan, dan akomodasi di dalam area taman." },
    { name: "Tangkuban Perahu", description: "Lokasi: Lembang, Bandung - Gunung Tangkuban Perahu terkenal dengan bentuknya yang unik menyerupai perahu terbalik dan legenda Sangkuriang yang melegenda. Pengunjung dapat mendekati kawah gunung untuk melihat mata air panas dan lumpur mendidih. Area sekitar menawarkan berbagai jalur hiking yang menarik melalui hutan ke kawah-kawah kecil dan sumber belerang." },
    { name: "Geopark Ciletuh", description: "Lokasi: Sukabumi - Dikenal sebagai Geopark Global UNESCO, Geopark Ciletuh menawarkan lansekap yang spektakuler dengan ciri khas geologis yang terbentuk dari aktivitas tektonik kuno. Area ini memiliki tebing dramatis, air terjun yang menuju ke laut, sawah yang subur, dan desa tradisional yang menawarkan berbagai kegiatan ekowisata." },
    { name: "Kampung Naga", description: "Lokasi: Tasikmalaya - Kampung Naga adalah desa adat yang masih mempertahankan arsitektur dan cara hidup tradisional Sunda. Terletak di lembah hijau yang subur dan hanya bisa diakses dengan berjalan kaki, desa ini menawarkan kesempatan untuk mempelajari lebih lanjut tentang budaya dan tradisi yang dipertahankan oleh masyarakatnya." },
    { name: "Pantai Pangandaran", description: "Lokasi: Pangandaran, Ciamis - Pantai Pangandaran adalah salah satu destinasi pantai paling terkenal di Jawa Barat, terkenal dengan pasirnya yang putih dan hitam serta airnya yang jernih. Pantai ini ideal untuk berenang, berselancar, dan menikmati matahari terbenam yang spektakuler." },
    { name: "Curug Malela", description: "Lokasi: Bandung Barat - Sering disebut sebagai Niagara dari Jawa, Curug Malela menawarkan pemandangan air terjun yang mengesankan dengan beberapa aliran air yang jatuh dari ketinggian. Paling baik dikunjungi pada musim hujan, saat debit air terbesar, menampilkan keindahan alam yang memukau." },
    { name: "Kebun Teh Puncak", description: "Lokasi: Bogor - Kebun Teh Puncak adalah kawasan luas yang ditanami pohon teh dengan pemandangan bukit dan perkebunan yang hijau. Pengunjung dapat mengikuti tur panduan untuk mempelajari proses pembuatan teh dari memetik daun hingga pengolahan, menikmati teh segar, dan bahkan menginap di rumah tamu bergaya kolonial di tengah perkebunan." },
    { name: "Jatiluhur Water Park", description: "Lokasi: Purwakarta - Terletak di dekat Waduk Jatiluhur, taman air ini menawarkan berbagai fasilitas rekreasi air seperti kayak, memancing, dan bersepeda air. Tempat ini sangat cocok untuk acara keluarga, dengan area piknik, tempat bermain anak, dan pemandangan waduk yang indah." },
    { name: "Candi Cangkuang", description: "Lokasi: Garut - Candi Cangkuang adalah candi Hindu yang terletak di tengah danau kecil dan hanya bisa diakses dengan perahu. Tempat ini menawarkan pengalaman yang unik dan menenangkan dengan setting yang tenang dan dikelilingi oleh alam." }
  ];

  const handleAttractionChange = e => {
    const attraction = attractions.find(a => a.name === e.target.value);
    setSelectedAttraction(attraction.name);
    setAttractionDetails(attraction.description);
  };

  return (
    <div className="container-wisata">
      <h1>Top 10 Wisata di Jawa Barat</h1>
      <select value={selectedAttraction} onChange={handleAttractionChange}>
        {attractions.map(attraction => (
          <option key={attraction.name} value={attraction.name}>{attraction.name}</option>
        ))}
      </select>
      <div className="category-wisata">
        <div className="info-box-wisata">
          <h2>{selectedAttraction}</h2>
          <p>{attractionDetails}</p>
        </div>
      </div>
    </div>
  );
}

export default Wisata;
