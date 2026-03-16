import {
  ArrowRight,
  Play,
  Target,
  Crown,
  Star,
  Hexagon,
  Triangle,
  Command,
  Ghost,
  Gem,
  Cpu,
} from 'lucide-react';

const CLIENTS = [
  { name: 'Acme Corp', icon: Hexagon },
  { name: 'Quantum', icon: Triangle },
  { name: 'Command+Z', icon: Command },
  { name: 'Phantom', icon: Ghost },
  { name: 'Ruby', icon: Gem },
  { name: 'Chipset', icon: Cpu },
];

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex cursor-default flex-col items-center justify-center transition-transform hover:-translate-y-1">
    <span className="text-xl font-bold text-zinc-100 sm:text-2xl">{value}</span>
    <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 sm:text-xs">{label}</span>
  </div>
);

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#060b12] font-sans text-white">
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-fade-in {
          animation: fadeSlideIn 0.9s ease-out forwards;
          opacity: 0;
        }
        .animate-marquee {
          animation: marquee 38s linear infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      <div
        className="absolute inset-0 z-0 bg-[url(https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2000&q=80)] bg-cover bg-center opacity-45"
        style={{
          maskImage: 'linear-gradient(180deg, transparent 0%, black 8%, black 78%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, black 8%, black 78%, transparent 100%)',
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#060b12]/90 via-[#061120]/70 to-[#060b12]/92" />
      <div className="pointer-events-none absolute -left-28 top-20 z-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-10 z-0 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-14 pt-24 sm:px-6 md:pb-24 md:pt-32 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col justify-center space-y-8 pt-8 lg:col-span-7">
            <div className="animate-fade-in delay-100">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/25 bg-white/[0.05] px-3.5 py-1.5 backdrop-blur-md transition-colors hover:bg-white/[0.08]">
                <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-200 sm:text-xs">
                  Cloud • DevOps • Full Stack
                  <Star className="h-3.5 w-3.5 fill-amber-300 text-amber-300" />
                </span>
              </div>
            </div>

            <h1
              className="animate-fade-in delay-200 text-5xl font-medium leading-[0.9] tracking-tighter sm:text-6xl lg:text-7xl xl:text-8xl"
              style={{
                maskImage: 'linear-gradient(180deg, black 0%, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(180deg, black 0%, black 80%, transparent 100%)',
              }}
            >
              Building Reliable
              <br />
              <span className="bg-gradient-to-r from-cyan-200 via-white to-amber-200 bg-clip-text text-transparent">
                Cloud Experiences
              </span>
              <br />
              That Scale
            </h1>

            <p className="animate-fade-in delay-300 max-w-xl text-lg leading-relaxed text-zinc-300">
              I build modern web products and CI/CD-ready cloud solutions with a focus on clean delivery, performance,
              and production-grade reliability.
            </p>

            <div className="animate-fade-in delay-400 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-200 to-amber-200 px-8 py-4 text-sm font-semibold text-slate-950 transition-all hover:scale-[1.02] hover:from-cyan-100 hover:to-amber-100 active:scale-[0.98]"
              >
                View Portfolio
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://github.com/tarun08-code"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-8 py-4 text-sm font-semibold text-zinc-100 backdrop-blur-sm transition-colors hover:border-cyan-200/35 hover:bg-white/[0.12]"
              >
                <Play className="h-4 w-4 fill-current" />
                View GitHub
              </a>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-5 lg:mt-12">
            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] p-8 shadow-[0_35px_80px_-45px_rgba(34,211,238,0.45)] backdrop-blur-md">
              <div className="pointer-events-none absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-cyan-200/10 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-cyan-200/35">
                    <Target className="h-6 w-6 text-cyan-100" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold tracking-tight text-zinc-100">150+</div>
                    <div className="text-sm text-zinc-300">Projects Delivered</div>
                  </div>
                </div>

                <div className="mb-8 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-300">Client Satisfaction</span>
                    <span className="font-semibold text-cyan-100">98%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800/40">
                    <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-cyan-200 to-amber-200" />
                  </div>
                </div>

                <div className="mb-6 h-px w-full bg-white/10" />

                <div className="grid grid-cols-3 gap-4 text-center">
                  <StatItem value="5+" label="Years" />
                  <div className="mx-auto h-full w-px bg-white/10" />
                  <StatItem value="24/7" label="Support" />
                  <div className="mx-auto h-full w-px bg-white/10" />
                  <StatItem value="100%" label="Quality" />
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200/25 bg-cyan-500/10 px-3 py-1 text-[10px] font-semibold tracking-wide text-cyan-100">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                    ACTIVE
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/30 bg-amber-400/10 px-3 py-1 text-[10px] font-semibold tracking-wide text-amber-100">
                    <Crown className="h-3 w-3 text-amber-300" />
                    PREMIUM
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] py-8 backdrop-blur-md">
              <h3 className="mb-6 px-8 text-sm font-semibold text-zinc-300">Trusted by Industry Leaders</h3>

              <div
                className="relative flex overflow-hidden"
                style={{
                  maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                }}
              >
                <div className="animate-marquee flex gap-12 whitespace-nowrap px-4">
                  {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
                    <div
                      key={i}
                      className="flex cursor-default items-center gap-2 opacity-70 transition-all hover:scale-105 hover:opacity-100"
                    >
                      <client.icon className="h-6 w-6 fill-current text-cyan-100" />
                      <span className="text-lg font-bold tracking-tight text-zinc-100">{client.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
