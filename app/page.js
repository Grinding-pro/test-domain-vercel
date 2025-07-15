import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import bgImage from './assets/bg.png'
import Equipment from "./components/Equipment/Equipment";
import Banner from "./components/Banner/Banner";
import Img1 from "./assets/2.png";
import Img2 from "./assets/3.png";
import TabComp from "./components/Tab/TabComp";
import Testimonials from "./components/Testimonial/Testimonial";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer/Footer";
import Sertification from "./components/Sertification/Sertification";
import Contact from "./components/Contact/Contact";

const bgStyle = {
  backgroundImage: `url(${bgImage.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
}

const BannerData = {
  image: Img1,
  title: "Kenapa Harus Ikut Kelas Zumba di Jakarta?",
  subtitle: `
    Ingin olahraga yang menyenangkan dan efektif? Kelas Zumba Jakarta bersama instruktur Lidya adalah jawabannya! Dengan gerakan dansa enerjik dan musik Latin yang seru, kamu bisa membakar kalori, meningkatkan stamina, dan menjaga kesehatan jantung tanpa merasa terbebani.

    Sebagai instruktur senam aerobik berpengalaman di Jakarta, Lidya menghadirkan suasana kelas yang fun, friendly, dan cocok untuk semua level — dari pemula hingga aktif olahraga.

    Bergabunglah sekarang dan rasakan manfaat senam aerobik untuk kesehatan tubuh dan pikiran. Cari tahu jadwal kelas Zumba terbaik di Jakarta dan mulai hidup lebih aktif hari ini!
  `,
  link: "#",
};


const Banner2Data = {
  image: Img2,
  title: "Manfaat Ikut Kelas Aerobik di Jakarta",
  subtitle: `
    Ingin tubuh sehat, bugar, dan bebas stres? Yuk, coba kelas senam aerobik Jakarta bareng instruktur berpengalaman Lidya! Dengan gerakan ritmis dan menyenangkan, senam aerobik bantu memperkuat jantung, paru-paru, dan otot tubuh — cocok untuk semua usia dan tingkat kebugaran.

    Selain membakar kalori dan mendukung penurunan berat badan, aerobik juga bisa menurunkan risiko penyakit jantung, diabetes, dan tekanan darah tinggi. Plus, manfaat mentalnya juga besar: kurangi stres, tingkatkan mood, dan tambah energi positif!

    Bergabunglah dalam kelas aerobik Jakarta sekarang juga, dan rasakan hidup lebih aktif, sehat, dan bahagia bareng Lidya!
  `,
  link: "#",
};



export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        <section style={bgStyle}>
          <Navbar />
          <Hero />
        </section>
        <section><Equipment /></section>
        <section><Banner {...BannerData} /></section>
        <section><TabComp /></section>
        <section><Banner {...Banner2Data} /></section>
        <section><Sertification /></section>
        {/* <Testimonials /> */}
        <section><Contact /></section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
