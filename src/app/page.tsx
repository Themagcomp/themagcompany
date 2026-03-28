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
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <div className="section-divider w-full" />
      <Features />
      <div className="section-divider w-full" />
      <MBack />
      <div className="section-divider w-full" />
      <Internals />
      <div className="section-divider w-full" />
      <Weather />
      <div className="section-divider w-full" />
      <Roadmap />
      <div className="section-divider w-full" />
      <About />
      <Footer />
    </div>
  );
}
