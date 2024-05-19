import React, { useState } from 'react';
import '../css/Budaya.css';

const Budaya = () => {
  const [selectedMusic, setSelectedMusic] = useState("");
  const [selectedMusicDescription, setSelectedMusicDescription] = useState("");
  const [selectedDance, setSelectedDance] = useState("");
  const [selectedDanceDescription, setSelectedDanceDescription] = useState("");
  const [selectedHouse, setSelectedHouse] = useState("");
  const [selectedHouseDescription, setSelectedHouseDescription] = useState("");
  const [selectedFood, setSelectedFood] = useState("");
  const [selectedFoodDescription, setSelectedFoodDescription] = useState("");

  const musicInstruments = [
    { name: "Pilih Alat Musik", description: "Pilih Alat Musik dari menu untuk detail lebih lanjut." },
    { name : "Angklung", description : "Angklung adalah alat musik tradisional yang terbuat dari bambu dan berasal dari Jawa Barat. Setiap tabung bambu pada angklung memiliki ukuran dan nada yang berbeda. Angklung dimainkan dengan cara digoyangkan, menghasilkan bunyi yang khas. Alat musik ini sering dimainkan dalam berbagai acara budaya dan sering dijadikan sebagai instrumen pendidikan dan hiburan."},
    { name : "Suling", description : "Suling Sunda adalah alat musik tiup tradisional yang terbuat dari bambu dan berasal dari Jawa Barat. Suling ini memiliki nada yang lembut dan sering digunakan dalam berbagai jenis musik tradisional Sunda. Suling Sunda biasanya dimainkan sebagai alat musik soliter atau sebagai bagian dari ensemble musik tradisional Sunda. Alat musik ini memiliki peran penting dalam mendukung melodi dalam musik tradisional Jawa Barat."},
    { name : "Kendang", description : "Kendang Sunda adalah alat musik perkusi tradisional berbentuk drum yang berasal dari Jawa Barat. Kendang Sunda memiliki bentuk dan gaya bermain yang khas. Kendang Sunda sering dimainkan dalam gamelan degung dan berbagai jenis musik tradisional Sunda lainnya. Alat musik ini memiliki peran penting dalam mengatur irama dan ritme dalam musik tradisional Jawa Barat."},
    { name : "Kacapi", description : "Kacapi adalah alat musik petik tradisional yang berasal dari Jawa Barat. Terdapat dua jenis kacapi, yaitu kacapi indung dan kacapi rincik. Kacapi biasanya dimainkan bersama dengan suling dalam musik tradisional Sunda. Alat musik ini memiliki peran penting dalam menyusun dan mengiringi melodi dalam musik tradisional Jawa Barat."},
    { name : "Calung", description : "Calung adalah alat musik tradisional yang terbuat dari bambu dan dimainkan dengan cara dipukul. Calung sering dimainkan dalam ansambel musik calung dengan variasi ukuran tabung bambu yang menghasilkan bunyi yang khas. Alat musik ini menjadi salah satu elemen penting dalam musik tradisional Jawa Barat."},
    { name : "Rebab", description : "Rebab Pewayangan adalah alat musik gesek yang digunakan dalam pertunjukan wayang golek Sunda. Rebab ini memiliki bentuk dan gaya bermain yang khas yang mendukung musik dalam pertunjukan wayang. Biasanya, rebab digunakan untuk mengiringi adegan-adegan tertentu dalam cerita yang diperankan oleh tokoh-tokoh wayang golek."},
    { name : "Siter", description : "Siter adalah alat musik tradisional berupa bilah-bilah bambu yang ditarik dan dipukul untuk menghasilkan bunyi. Siter sering dimainkan dalam ansambel musik rakyat Sunda di Jawa Barat. Alat musik ini biasanya digunakan untuk memberikan nuansa melodi dan irama dalam pertunjukan musik tradisional."},
    { name : "Gong", description : "Gong adalah alat musik perkusi yang terbuat dari logam dan sering digunakan dalam gamelan Sunda. Gong memiliki peran penting dalam mengatur ritme dan struktur musik dalam pertunjukan gamelan. Bunyi gong sering digunakan untuk memberikan akhiran dalam beberapa pola musik dalam gamelan."},
    { name : "Celempung", description : "Celempung adalah alat musik tradisional petik yang terbuat dari bambu. Celempung memiliki bunyi yang lembut dan menenangkan. Alat musik ini sering dimainkan sebagai alat musik soliter dalam pertunjukan musik tradisional Sunda atau sebagai bagian dari ansambel musik."},
    { name : "Bonang", description : "Bonang adalah alat musik perkusi dalam gamelan degung yang terbuat dari logam. Bonang memiliki beberapa ukuran dan menghasilkan bunyi yang khas dalam ansambel musik gamelan degung. Alat musik ini sering digunakan untuk memberikan nuansa ritmis dalam musik tradisional Sunda."},
  ];
  const dances = [
    { name: "Pilih Tarian Adat", description: "Pilih Tarian Adat dari menu untuk detail lebih lanjut." },
    { name : "Jaipong", description : "Tari Jaipong merupakan tarian yang berasal dari Jawa Barat yang terkenal dengan gerakan yang enerjik, dinamis, dan sensual. Tarian ini diiringi oleh musik gamelan dan biasanya dimainkan oleh grup musik yang disebut kendang penca. Tari Jaipong awalnya merupakan kreasi dari tarian tradisional Sunda yang kemudian dikembangkan oleh Gugum Gumbira, seorang seniman dari Bandung. Tarian ini sering dijadikan sebagai hiburan dalam berbagai acara dan perayaan di Jawa Barat."},
    { name : "Ketuk Tilu", description : "Tari Ketuk Tilu adalah tarian dalam upacara adat untuk menyambut musim panen. Tarian ini merupakan ungkapan rasa syukur kepada dewi padi dalam kepercayaan masyarakat Sunda.Nama Tari Ketuk Tilu berasal dari alat musik pengiring yang mengeluarkan tiga suara, yaitu rebab, kendang, dan kulanter.Saat ini Tari Ketuk Tilu tak hanya dilakukan ketika musim panen, namun menjadi tarian hiburan masyarakat."},
    { name : "Baksa", description : "Tari Baksa merupakan tarian yang menggambarkan keperkasaan seorang prajurit yang bertanggung jawab atas keselamatan raja dan keluarganya dari serangan musuh.Sebelum ditarikan, biasanya akan dinyanyikan syair berisi sejarah Tari Baksa oleh seorang tokoh. Tari Baka diiringi lagu Sonteng yang artinya kuat dan ringan yang dimainkan dengan gamelan renteng atau gong renteng."},
    { name : "Boboko Mangkup", description : "Tari Boboko Mangkup berasal dari kata boboko yang berarti bakul atau tempat nasi sebagai lambang kehidupan masyarakat Sunda.Tari Boboko Mangkup oleh 12 orang yang terdiri dari satu penari pria, lima penari wanita, dan enam penari anak-anak. Properti yang digunakan berupa boboko besar atau bakul yang diletakkan dengan posisi mangkup atau telungkup. Tari tradisional ini menggambarkan kondisi masyarakat yang sedang kesulitan."},
    { name : "Kedok Ireng", description : "Tari Kedok Ireng Tarian Jawa Barat ini sarat akan gambaran kehidupan manusia. Tari Kedok Ireng berkisah tentang kehidupan manusia dari dua sisi, yaitu baik dan buruk. Pada awal pementasan akan ada tiga orang penari yang duduk bersila di atas panggung. Beberapa saat kemudian, mereka akan membungkuk lalu berdiri seraya mengenakan topeng."},
    { name : "Ronggeng Gunung", description : "Tari Ronggeng Gunung adalah tari tradisional dari Kabupaten Ciamis, tepatnya Kecamatan Banjarsari. Ronggeng berasal dari kata renggana dari Bahasa Sansekerta yang memiliki arti perempuan pujaan hati. Tarian ini merupakan sebuah kesenian dengan peran utamanya ronggeng atau penari perempuan. Tarian ini dijadikan sebagai sarana ritual untuk menghormati Dewi Sri dan hiburan setelah melepas lelah selesai melakukan satu periode menanam padi."},
    { name : "Merak", description : "Tari Merak adalah tarian yang menggambarkan gerakan-gerakan burung merak. Gerakan dalam tarian ini cenderung lemah gemulai dan indah, mirip dengan gerakan burung merak. Tari Merak merupakan salah satu tarian tradisional Sunda yang populer di Jawa Barat. Tarian ini sering ditampilkan dalam berbagai acara budaya, pernikahan, dan festival di Jawa Barat."},
    { name : "Buyung", description : "Tari Buyung adalah tarian tradisional yang berasal dari daerah Sunda di Jawa Barat. Tarian ini menampilkan gerakan yang dinamis dan atraktif yang menggambarkan keceriaan dan kekompakan dalam berkelompok. Tari Buyung biasanya dipertunjukkan dalam berbagai acara keagamaan, festival, atau perayaan adat di Jawa Barat. Gerakan dalam tarian ini sering disertai dengan musik tradisional Sunda yang khas."},
    { name : "Serimpi", description : "Tari Serimpi adalah tarian tradisional Jawa Barat yang elegan dan anggun. Gerakan dalam tarian ini menggambarkan kelembutan dan keanggunan, sering kali diiringi dengan irama gamelan. Tari Serimpi berasal dari keraton-keraton di Jawa Barat, khususnya dari Keraton Kasepuhan di Cirebon. Tarian ini sering dipentaskan dalam upacara adat, pernikahan, dan pertunjukan seni tradisional di Jawa Barat."},
    { name : "Kidang Pananjung", description : "Tari Kidang Pananjung adalah tarian yang menggambarkan gerakan-gerakan rusa (kidang) yang elegan dan anggun. Tarian ini sering kali diiringi dengan musik gamelan atau angklung. Tari Kidang Pananjung merupakan bagian dari tradisi seni pertunjukan Sunda yang khas dari Jawa Barat. Tarian ini sering dipentaskan dalam berbagai upacara adat atau festival budaya di wilayah tersebut."},
  ];
  const traditionalHouses = [
    { name: "Pilih Rumah Adat", description: "Pilih Rumah Adat dari menu untuk detail lebih lanjut." },
    { 
      name: "Imah Julang Ngapak", 
      description: "Rumah adat Jawa Barat ini memiliki atap yang menyerupai burung dengan sayap terbuka dan bagian atas segitiga yang melebar ke bawah. Cagak gunting di sudut atap mencegah air hujan masuk. Awalnya atap dibuat dari ijuk daun rumbia atau alang-alang yang tahan air. Saat ini, rumah ini telah dimodifikasi dan bisa ditemukan di Tasikmalaya."
    },
    { 
      name: "Rumah Adat Parahu Kumurep", 
      description: "Rumah ini unik dengan atap yang menyerupai perahu terbalik, terbagi menjadi dua bagian besar; bagian depan berbentuk trapesium dan bagian belakang berbentuk segitiga sama sisi. Meskipun rumit, rumah ini kurang populer untuk modifikasi karena kurang tahan terhadap curah hujan tinggi di Jawa Barat."
    },
    { 
      name: "Imah Badak Heuay", 
      description: "Disebut Badak Heuay karena atapnya menyerupai badak yang sedang menguap. Rumah ini memiliki atap besar dengan beberapa bagian kecil, melindungi teras bagian depan yang digunakan untuk menerima tamu laki-laki. Ditemukan di Sukabumi, rumah ini membantu melestarikan budaya Jawa."
    },
    { 
      name: "Rumah Adat Tagog Anjing", 
      description: "Diberi nama karena atapnya yang menyerupai anjing duduk, terdiri dari dua bidang yang bertemu di garis batas suhunan. Bagian pertama atapnya lebih lebar, menutupi seluruh bagian atas rumah, biasa ditemukan di Garut."
    },
    { 
      name: "Rumah Adat Jolopong", 
      description: "Rumah tradisional yang mengusung kesederhanaan dengan bentuk lurus dan atap berbentuk saung atau dangau, dipisahkan oleh jalur suhunan di tengahnya. Terdiri dari beberapa ruang termasuk emper, imah, pawon, dan pangkeng. Masih bisa ditemukan di Sumedang dan Garut."
    },
    { 
      name: "Rumah Capit Gunting", 
      description: "Sebuah legenda urban populer di Malaysia tentang rumah berhantu yang dipenuhi dengan aktivitas supernatural, sering dikaitkan dengan cerita tentang gunting. Meskipun tidak ada bukti konkret, cerita ini tetap menjadi bagian populer dari folklore Malaysia."
    },
    { 
      name: "Rumah Adat Kasepuhan Cirebon", 
      description: "Dibuat oleh Pangeran Cakrabuana pada 1529, digunakan untuk pelatihan prajurit, pengadilan, dan hukum adat. Ruangannya termasuk Jinem, Pringgodani, Prabayasa, dan ruang istirahat sultan."
    },
    { 
      name: "Jubleg Nangkub", 
      description: "Atap bertingkat dengan dinding bambu besar, mencerminkan kepribadian ramah dan sederhana masyarakat Jawa Barat. Simbol tanah subur dan makmur, banyak ditemui di Sumedang."
    }
  ];
  
  const foods = [
    { name: "Pilih Makanan Khas", description: "Pilih Makanan Khas dari menu untuk detail lebih lanjut." },
    { name: "Tahu Sumedang", description: " Tahu sumedang merupakan salah satu makanan khas daerah Jawa Barat yang cukup populer. Sebenarnya, bahan utama jajanan ini sama dengan tahu lainnya, yaitu kedelai. Tahu sumedang memiliki tekstur lebih lembut meski sudah digoreng. Anda juga akan merasakan perpaduan antara asin, gurih dan lembut meski dalamnya tidak berisi. Bisa juga dibarengi dengan cabe agar terasa pedas" },
    { name: "Batagor", description: " Batagor adalah makanan khas Jawa Barat yang terkenal. Nama batagor berasal dari singkatan baso tahu goreng. Makanan ini terdiri dari adonan baso ikan dan tahuyang digoreng, disajikan dengan saus kacang. Batagor biasanya disajikan denganpotongan kecil mentimun dan perasan jeruk limau untuk menambah rasa segar." },
    { name: "Colenak", description: " Colenak adalah makanan khas Jawa Barat yang berasal dari bahan dasar peuyeum (tape singkong) yang dibakar diatas arang. Nama colenak merupakan singkatan dari dicocol enak. Hidangan ini disajikan dengan saus yang terbuat dari gula merah cair dan parutan kelapa, menciptakan perpaduan rasa manis dan asam yang khas. Penyajiannya bisa dengan menyiramkan saus gula merah di atas tape bakar atau menyajikannya terpisah." },
    { name: "Karedok", description: "Karedok adalah makanan khas Sunda dari Jawa Barat yang terdiri dari sayuran mentah seperti tauge, ketimun, kol, kacang panjang, daun kemangi, dan terong. Sayuran yang sudah dipotong kecil-kecil ini disiram dengan saus bumbu kacang yang dicampur dengan rempah lainnya. Sekilas, karedok mirip dengan pecel atau lotek, namun bedanya adalah karedok menggunakan sayur mentah." },
    { name: "Nasi Timbel", description: " Nasi timbel adalah makanan khas Jawa Barat berupa nasi yang dibungkus daun pisang berbentuk bulat lonjong, mirip dengan timbel pada alat pancing. Hidangan ini biasa disajikan dengan sayur ayam atau lauk pauk seperti ikan goreng (ikan mas, mujair, atau gurame), tahu, tempe, ayam bakar atau goreng, dan ikan asin jambal roti. Nasi timbel nikmat disantap hangat dengan tambahan lalap dan sambal, dan cocok untuk sarapan, makan siang, atau makan malam." },
    
  ];

  const handleMusicChange = e => {
    const instrument = musicInstruments.find(instrument => instrument.name === e.target.value);
    setSelectedMusic(instrument.name);
    setSelectedMusicDescription(instrument.description);
  };
  const handleDanceChange = e => {
    const dance = dances.find(dance => dance.name === e.target.value);
    setSelectedDance(dance.name);
    setSelectedDanceDescription(dance.description);
  };
  const handleHouseChange = e => {
    const house = traditionalHouses.find(house => house.name === e.target.value);
    setSelectedHouse(house.name);
    setSelectedHouseDescription(house.description);
  };
  const handleFoodChange = e => {
    const food = foods.find(food => food.name === e.target.value);
    setSelectedFood(food.name);
    setSelectedFoodDescription(food.description);
  };

  return (
    <div className="container-budaya">
      <h1>Alat Musik</h1>
      <select value={selectedMusic} onChange={handleMusicChange}>
        {musicInstruments.map(instrument => (
          <option key={instrument.name} value={instrument.name}>{instrument.name}</option>
        ))}
      </select>
      <div className="category-budaya">
        <div className="info-box-budaya">
          <h2>{selectedMusic}</h2>
          <p>{selectedMusicDescription}</p>
        </div>
      </div>

      <h1>Tarian</h1>
      <select value={selectedDance} onChange={handleDanceChange}>
        {dances.map(dance => (
          <option key={dance.name} value={dance.name}>{dance.name}</option>
        ))}
      </select>
      <div className="category-budaya">
        <div className="info-box-budaya">
          <h2>{selectedDance}</h2>
          <p>{selectedDanceDescription}</p>
        </div>
      </div>

      <h1>Rumah Adat</h1>
      <select value={selectedHouse} onChange={handleHouseChange}>
        {traditionalHouses.map(house => (
          <option key={house.name} value={house.name}>{house.name}</option>
        ))}
      </select>
      <div className="category-budaya">
        <div className="info-box-budaya">
          <h2>{selectedHouse}</h2>
          <p>{selectedHouseDescription}</p>
        </div>
      </div>

      <h1>Makanan Khas</h1>
      <select value={selectedFood} onChange={handleFoodChange}>
        {foods.map(food => (
          <option key={food.name} value={food.name}>{food.name}</option>
        ))}
      </select>
      <div className="category-budaya">
        <div className="info-box-budaya">
          <h2>{selectedFood}</h2>
          <p>{selectedFoodDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default Budaya;
