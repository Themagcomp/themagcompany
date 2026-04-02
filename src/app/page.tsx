import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import MBack from "./components/MBack";
import ProductShowcase from "./components/ProductShowcase";
import Internals from "./components/Internals";
import Weather from "./components/Weather";
import Roadmap from "./components/Roadmap";
import StretchGoals from "./components/StretchGoals";
import About from "./components/About";
import SupportCTA from "./components/SupportCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-[#e5e2e1] selection:bg-primary/30">
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        <Features />
        <MBack />
        <ProductShowcase />
        <Internals />
        <Weather />
        <Roadmap />
        <StretchGoals />
        <About />
        <SupportCTA />
        <Footer />
      </main>
    </div>
  );
}
