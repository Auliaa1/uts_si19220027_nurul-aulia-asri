import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Tombol from './komponen/atoms/tombol';
import Navbar from './komponen/Navbar';
import Hero from './komponen/Hero';
import Section1 from './komponen/Section';
import Footer from './komponen/Footer';

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Navbar />
      <Hero title="Memberi Solusi Bisnis Anda." desc="Kami menyediakan rangkaian produk skincare yang dirancang khusus untuk merawat, melembapkan, dan melindungi kulit Anda setiap hari. Dengan bahan-bahan alami dan formula yang teruji, setiap produk kami membantu memperbaiki tekstur kulit, mengurangi tanda-tanda penuaan, dan menjaga kulit tetap sehat dan bercahaya. Temukan solusi perawatan kulit yang tepat untuk kebutuhan Anda dan wujudkan kulit yang lebih segar, halus, dan tampak alami." src="http://getwallpapers.com/wallpaper/full/7/5/4/232708.jpg" />
      <Section1 title="Perusahaan  Yang Telah Bergabung" desc="Jelaskan Deskripsi"></Section1>
      <Footer></Footer>
    </>

  );
}

export default App
