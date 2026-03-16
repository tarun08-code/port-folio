import { Experience } from '../types';

interface TimelineItemProps {
  experience: Experience;
}

export default function TimelineItem({ experience }: TimelineItemProps) {
  return (
    <div className="relative border-l-2 border-cyan-300/40 pb-12 pl-8 last:pb-0">
      <div className="absolute left-0 top-0 h-4 w-4 -translate-x-[9px] rounded-full bg-cyan-300 shadow-[0_0_0_6px_rgba(34,211,238,0.15)]"></div>

      <div className="rounded-2xl border border-white/10 bg-[#0b1422]/80 p-6 shadow-[0_30px_60px_-40px_rgba(34,211,238,0.45)] transition-all duration-300 hover:border-cyan-200/30 hover:-translate-y-1">
        <span className="text-sm font-semibold tracking-wide text-cyan-200">{experience.period}</span>
        <h3 className="mt-2 text-xl font-bold text-white">{experience.title}</h3>
        <p className="mt-1 font-medium text-amber-200">{experience.organization}</p>
        <p className="mt-3 leading-relaxed text-zinc-300">{experience.description}</p>
      </div>
    </div>
  );
}
