import { useState } from 'react';
import { ArrowRight, Cloud, Code2, GitBranch, Gauge, Play, ShieldCheck, Star, Timer } from 'lucide-react';

const FOCUS_AREAS = [
  {
    id: 'cloud',
    label: 'Cloud Infra',
    icon: Cloud,
    headline: 'Production-ready cloud setup',
    summary: 'Scalable AWS-focused architecture with clean deployment workflows and monitoring in place.',
    stack: ['AWS', 'Docker', 'Terraform'],
    output: 'Reliable infrastructure with clear scaling paths.',
  },
  {
    id: 'devops',
    label: 'DevOps',
    icon: GitBranch,
    headline: 'CI/CD that ships confidently',
    summary: 'Automated pipelines from commit to deploy with repeatable environments and fast feedback loops.',
    stack: ['GitHub Actions', 'Jenkins', 'Linux'],
    output: 'Faster releases with fewer delivery errors.',
  },
  {
    id: 'fullstack',
    label: 'Full Stack',
    icon: Code2,
    headline: 'Frontend + backend that stays maintainable',
    summary: 'Modern React interfaces backed by clean APIs and practical architecture decisions.',
    stack: ['React', 'TypeScript', 'Node.js'],
    output: 'Smooth UX with stable, maintainable codebases.',
  },
] as const;

type FocusAreaId = (typeof FOCUS_AREAS)[number]['id'];

export default function HeroSection() {
  const [activeFocus, setActiveFocus] = useState<FocusAreaId>('cloud');
  const [deliveryIntensity, setDeliveryIntensity] = useState(72);
  const currentFocus = FOCUS_AREAS.find((item) => item.id === activeFocus) ?? FOCUS_AREAS[0];
  const turnaroundWeeks = Math.max(2, Math.round((120 - deliveryIntensity) / 18));
  const reliabilityScore = Math.min(99, Math.round(86 + deliveryIntensity / 7));

  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#060b12] font-sans text-white">
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeSlideIn 0.9s ease-out forwards;
          opacity: 0;
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
            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] p-7 shadow-[0_35px_80px_-45px_rgba(34,211,238,0.45)] backdrop-blur-md">
              <div className="pointer-events-none absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-cyan-200/10 blur-3xl" />
              <div className="relative z-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/80">Interactive Focus</p>
                <h3 className="mt-2 text-2xl font-bold text-zinc-100">Choose What You Want Built</h3>

                <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
                  {FOCUS_AREAS.map((area) => {
                    const AreaIcon = area.icon;
                    const isActive = area.id === activeFocus;

                    return (
                      <button
                        key={area.id}
                        onClick={() => setActiveFocus(area.id)}
                        className={`rounded-xl border px-3 py-2 text-left transition-all ${
                          isActive
                            ? 'border-cyan-200/50 bg-cyan-400/15 text-cyan-100'
                            : 'border-white/15 bg-white/[0.04] text-zinc-300 hover:border-cyan-200/30 hover:bg-white/[0.08]'
                        }`}
                      >
                        <AreaIcon className="mb-1.5 h-4 w-4" />
                        <span className="text-xs font-semibold tracking-wide">{area.label}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-[#0a1422]/70 p-5">
                  <h4 className="text-lg font-bold text-zinc-100">{currentFocus.headline}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">{currentFocus.summary}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {currentFocus.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-amber-200/35 bg-amber-300/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-amber-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 rounded-xl border border-cyan-200/20 bg-cyan-400/10 px-3 py-2 text-xs font-medium text-cyan-100">
                    Outcome: {currentFocus.output}
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur-md">
              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-zinc-200">Delivery Tuner</h3>
                  <span className="text-xs text-zinc-400">Interactive</span>
                </div>

                <input
                  type="range"
                  min={45}
                  max={95}
                  step={1}
                  value={deliveryIntensity}
                  onChange={(event) => setDeliveryIntensity(Number(event.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-zinc-700 accent-cyan-300"
                  aria-label="Adjust delivery intensity"
                />

                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div className="rounded-xl border border-white/10 bg-[#0a1422]/70 p-3">
                    <Gauge className="mb-1 h-4 w-4 text-cyan-200" />
                    <p className="text-xs text-zinc-400">Execution</p>
                    <p className="text-lg font-bold text-zinc-100">{deliveryIntensity}%</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-[#0a1422]/70 p-3">
                    <Timer className="mb-1 h-4 w-4 text-amber-200" />
                    <p className="text-xs text-zinc-400">Turnaround</p>
                    <p className="text-lg font-bold text-zinc-100">{turnaroundWeeks}w</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-[#0a1422]/70 p-3">
                    <ShieldCheck className="mb-1 h-4 w-4 text-cyan-200" />
                    <p className="text-xs text-zinc-400">Reliability</p>
                    <p className="text-lg font-bold text-zinc-100">{reliabilityScore}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
