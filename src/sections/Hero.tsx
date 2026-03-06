import { Github, Linkedin, Mail } from 'lucide-react';
import Button from '../components/Button';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Seema G :)
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-300 mb-8 animate-slide-up-delay-1">
            Aspiring Cloud & DevOps Engineer
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 animate-slide-up-delay-2">
            Passionate about building scalable cloud infrastructure and automating deployment
            pipelines. Experienced in modern web technologies, containerization, and continuous
            integration. Always eager to learn and implement cutting-edge DevOps & Cloud practices.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up-delay-3">
            <Button variant="primary" onClick={() => scrollToSection('projects')}>
              View Projects
            </Button>
          </div>

          <div className="flex justify-center gap-6 animate-slide-up-delay-4">
            <a
              href="https://github.com/tarun08-code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/dineshtarun-g-999140338/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
