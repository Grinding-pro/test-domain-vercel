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
  title: "Why you need to join Zumba Class?",
  subtitle:
    "Instruktur Zumba Aerobik Jakarta - Lidya Zumba menghadirkan kelas Zumba yang energik dan menyenangkan untuk meningkatkan kesehatan Anda secara menyeluruh. Dengan gerakan tarian yang penuh energi dan musik yang seru, Zumba membantu membakar kalori, meningkatkan daya tahan tubuh, serta memperkuat otot—semuanya terasa seperti pesta dansa. Sebagai pilihan utama untuk Senam Aerobik Jakarta, Lidya Zumba Jakarta menawarkan pengalaman olahraga yang efektif untuk mengurangi stres dan meningkatkan suasana hati. Cocok untuk semua tingkatan kebugaran, Zumba bersama Lidya membantu meningkatkan fleksibilitas, koordinasi, dan stamina Anda. Bergabunglah sekarang dan temukan jadwal senam terbaik di Jakarta untuk hidup sehat dan aktif!",
  link: "#",
};

const Banner2Data = {
  image: Img2,
  title: "Why you need to join Aerobik Class?",
  subtitle:
    "Instruktur Zumba Aerobik Jakarta - Lidya Zumba menawarkan kelas senam Aerobik yang efektif untuk meningkatkan kesehatan dan kebugaran Anda. Dengan gerakan ritmis dan repetitif, Aerobik membantu memperkuat jantung, paru-paru, serta otot Anda, sekaligus meningkatkan daya tahan kardiovaskular dan sirkulasi oksigen dalam tubuh. Sebagai pilihan utama untuk Senam Aerobik Jakarta, sesi bersama Lidya Zumba Jakarta membantu membakar kalori, mendukung penurunan berat badan, serta mengurangi risiko penyakit kronis seperti penyakit jantung, diabetes, dan tekanan darah tinggi. Selain manfaat fisik, Aerobik juga mendukung kesejahteraan mental dengan mengurangi stres, meningkatkan suasana hati, dan menambah energi. Bergabunglah dalam kelas Senam Jakarta untuk hidup sehat, aktif, dan bugar bersama Lidya Aerobik Jakarta!",
  link: "#",
};


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div style={bgStyle}>
        <Navbar />
        <Hero />
      </div>
      <Equipment />
      <Banner {...BannerData} />
      <TabComp />
      <Banner {...Banner2Data} />
      <Sertification />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}