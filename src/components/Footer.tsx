import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-cyan-200/10 bg-[#060b12] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center text-zinc-400 md:text-left">
            <p className="font-semibold text-zinc-200">Dineshtarun G</p>
            <p className="text-sm">&copy; {currentYear} All rights reserved.</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/tarun08-code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition-all duration-300 hover:scale-110 hover:text-cyan-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/dineshtarun-g-999140338/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition-all duration-300 hover:scale-110 hover:text-amber-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
