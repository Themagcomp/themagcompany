import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import MBack from "./components/MBack";
import Internals from "./components/Internals";
import Weather from "./components/Weather";
import Roadmap from "./components/Roadmap";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-[#e5e2e1] selection:bg-primary/30">
      <Navbar />
      <main className="relative overflow-hidden">
        {/* Ambient Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary-container/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-primary-container/5 blur-[100px] rounded-full pointer-events-none" />
        <Hero />
        <Features />
        <MBack />
        <Internals />
        <Weather />
        <Roadmap />
        <About />
      </main>
      <Footer />
    </div>
  );
}
