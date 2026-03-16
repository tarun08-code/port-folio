import { Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.14),transparent_40%),radial-gradient(circle_at_80%_100%,rgba(251,191,36,0.10),transparent_35%)]" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 rounded-3xl border border-white/10 bg-[#0b1422]/80 p-8 text-center shadow-[0_35px_80px_-45px_rgba(34,211,238,0.5)] backdrop-blur-sm md:p-12">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Let's Build Something <span className="bg-gradient-to-r from-cyan-300 to-amber-300 bg-clip-text text-transparent">Great</span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-zinc-300">
            I am open to DevOps, Cloud, and full-stack opportunities. If you are hiring or want to collaborate on a
            project, connect with me on GitHub or LinkedIn.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/tarun08-code"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/35 bg-cyan-500/10 px-5 py-3 font-semibold text-cyan-100 transition-all hover:-translate-y-0.5 hover:bg-cyan-500/20"
            >
              <Github size={18} />
              GitHub Profile
            </a>
            <a
              href="https://www.linkedin.com/in/dineshtarun-g-999140338/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-amber-300/35 bg-amber-500/10 px-5 py-3 font-semibold text-amber-100 transition-all hover:-translate-y-0.5 hover:bg-amber-500/20"
            >
              <Linkedin size={18} />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
