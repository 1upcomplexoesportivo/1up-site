import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Diferenciais from "./components/Diferenciais";
import Gallery from "./components/Gallery";
import Plans from "./components/Plans";
import Schedule from "./components/Schedule";
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
        <Gallery />
        <Plans />
        <Schedule />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
