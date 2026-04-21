import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Diferenciais from "./components/Diferenciais";
import Historia from "./components/Historia";
import Gallery from "./components/Gallery";
import Depoimentos from "./components/Depoimentos";
import Schedule from "./components/Schedule";
import Plans from "./components/Plans";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Diferenciais />
        <Historia />
        <Gallery />
        <Depoimentos />
        <Schedule />
        <Plans />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
