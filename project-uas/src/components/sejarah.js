import React, { useState } from 'react';
import awalsejarah from '../assets/kerajaan.png'; 
import kerajaansunda from '../assets/kerajaan sunda.png'
import kerajaancirebon from '../assets/kerajaan cirebon.png'
import pembentukanjawa from '../assets/pembentukan.png'
import voc from '../assets/voc.png'
import '../css/sejarah.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const dataSejarah = [
  {
    title: "Awal Sejarah",
    content: "Jawa Barat, sebagai bagian dari Kerajaan Tarumanagara, memiliki peninggalan bersejarah berupa prasasti yang tersebar di wilayah ini. Prasasti-prasasti ini menjadi bukti keberadaan dan peran penting Tarumanagara dalam sejarah awal Jawa Barat.",
    image: awalsejarah
  },
  {
    title: "Kerajaan Sunda",
    content: "Setelah runtuhnya Tarumanagara, Kerajaan Sunda atau Pajajaran muncul sebagai kekuatan dominan di Jawa Barat. Kota Pakuan Pajajaran menjadi pusat kebudayaan, politik, dan ekonomi di wilayah ini. Kehidupan sosial dan budaya masyarakat Sunda berkembang pesat di bawah pemerintahan Kerajaan Sunda.",
    image: kerajaansunda
  },
  {
    title: "Kesultanan Cirebon",
    content: "Kesultanan Cirebon muncul sebagai pesaing Kerajaan Sunda, terutama dalam bidang ekonomi dan politik. Lepasnya pelabuhan Cirebon dari kekuasaan Kerajaan Sunda memungkinkan pembentukan kesultanan yang kemudian tumbuh menjadi kekuatan yang signifikan di wilayah barat Jawa Barat.",
    image: kerajaancirebon
  },
  {
    title: "Masuknya Belanda di Jawa Barat",
    content: "Masuknya VOC Belanda membawa perubahan besar dalam sejarah Jawa Barat. VOC mendirikan benteng dan kantor-kantor di wilayah Banten serta menjalin hubungan dagang yang kuat dengan Kesultanan Banten. Hal ini mempengaruhi dinamika politik dan ekonomi di Jawa Barat serta mempercepat proses kolonialisasi Belanda di wilayah tersebut.",
    image: voc
  },
  {
    title: "Pembentukan Provinsi Jawa Barat",
    content: "Pembentukan Provinsi Jawa Barat oleh pemerintah Hindia Belanda menandai awal dari era modern Provinsi Jawa Barat. Pembentukan ini mengubah administrasi dan pemerintahan di wilayah ini, membawa dampak signifikan bagi perkembangan masa depan Jawa Barat.",
    image: pembentukanjawa
  }
];

const HistoryComponent = () => { 
  const [activeData, setActiveData] = useState(null);

  const handleOpen = (data) => {
    setActiveData(data);
  };

  const handleClose = () => {
    setActiveData(null);
  };

  return (
    <div className="sejarah">
      <h1>Sejarah Jawa Barat</h1>
      <div className="row justify-content-center">  {/* Centering row content */}
        {dataSejarah.map((item, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 mb-3 d-flex align-items-stretch">
            <div className="card w-100" onClick={() => handleOpen(item)}>  {/* Ensure width is 100% of the column */}
              <img src={item.image} alt={item.title} className="card-img-top"/>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeData && (
        <div className="modal show fade" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered">  {/* Center modal */}
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{activeData.title}</h5>
                <button type="button" className="btn-close" onClick={handleClose}></button>
              </div>
              <div className="modal-body">
                <p>{activeData.content}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryComponent;