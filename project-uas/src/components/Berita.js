import React, { useState } from 'react';
import '../css/Berita.css';

const BeritaJabar = () => {
  const [selectedNews, setSelectedNews] = useState("");
  const [newsDetails, setNewsDetails] = useState("");

  const newsItems = [
    { title: "Pilih Berita", details: "Pilih Berita dari menu untuk detail lebih lanjut." },
    { title: "Pengembangan Infrastruktur Baru di Bandung", details: "Kota Bandung akan memulai proyek ambisius yang mencakup pembangunan jalan layang baru untuk mengurangi kemacetan lalu lintas dan revitalisasi beberapa area publik seperti taman dan alun-alun. Proyek ini juga termasuk peningkatan sistem transportasi publik untuk mendukung mobilitas yang lebih efisien dan ramah lingkungan." },
    { title: "Festival Seni dan Budaya Sunda", details: "Festival tahunan ini akan kembali diselenggarakan di Bogor, menampilkan berbagai pertunjukan seni dan budaya Sunda, termasuk tari, musik, dan pameran kerajinan tradisional." },
    { title: "Konservasi Hutan Mangrove di Cirebon", details: "Program konservasi baru telah diluncurkan untuk melindungi dan memulihkan area hutan mangrove di Cirebon, yang esensial untuk menjaga keanekaragaman hayati dan melindungi terhadap erosi." },
    { title: "Peningkatan Fasilitas Pendidikan di Jawa Barat", details: "Pemerintah Provinsi Jawa Barat mengalokasikan dana signifikan untuk peningkatan fasilitas pendidikan, termasuk pembangunan sekolah baru dan renovasi fasilitas yang ada." },
    { title: "Inisiatif Energi Terbarukan", details: "Jawa Barat mengambil langkah besar menuju energi terbarukan dengan memulai proyek pembangkit listrik tenaga surya dan angin di beberapa lokasi strategis." },
    { title: "Pengembangan Wisata Eco di Sukabumi", details: "Sukabumi meluncurkan beberapa proyek pariwisata eco baru yang bertujuan untuk menarik wisatawan dengan menawarkan pengalaman alam yang autentik dan berkelanjutan." },
    { title: "Pemulihan Ekonomi Pasca-Pandemi", details: "Jawa Barat melaporkan pemulihan ekonomi yang kuat pasca-pandemi dengan fokus pada penguatan sektor manufaktur dan digital." },
    { title: "Inovasi di Sektor Teknologi", details: "Startup lokal di Bandung memperkenalkan serangkaian inovasi di bidang teknologi, termasuk aplikasi berbasis AI yang mendukung sektor kesehatan dan pendidikan." },
    { title: "Upaya Penanggulangan Banjir", details: "Pemerintah setempat mengimplementasikan sistem drainase baru dan penanaman ribuan pohon untuk mengurangi risiko banjir di musim hujan." },
    { title: "Festival Kuliner Jawa Barat", details: "Festival kuliner ini akan menampilkan makanan khas daerah dari seluruh Jawa Barat, berlangsung di berbagai lokasi dengan tujuan mempromosikan kuliner lokal kepada turis domestik dan internasional." }
  ];

  const handleNewsChange = e => {
    const news = newsItems.find(n => n.title === e.target.value);
    setSelectedNews(news.title);
    setNewsDetails(news.details);
  };

  return (
    <div className="container-berita">
      <h1>Top 10 Berita di Jawa Barat 2024</h1>
      <select value={selectedNews} onChange={handleNewsChange}>
        {newsItems.map(news => (
          <option key={news.title} value={news.title}>{news.title}</option>
        ))}
      </select>
      <div className="category-berita">
        <div className="info-box-berita">
          <h2>{selectedNews}</h2>
          <p>{newsDetails}</p>
        </div>
      </div>
    </div>
  );
}

export default BeritaJabar;
