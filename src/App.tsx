import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/ui/glassmorphism-trust-hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#060b12] text-white">
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
