interface SkillBadgeProps {
  skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div className="rounded-xl border border-cyan-300/20 bg-cyan-500/10 px-6 py-3 text-center font-semibold tracking-wide text-cyan-100 shadow-[0_20px_40px_-30px_rgba(34,211,238,0.55)] transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/35 hover:bg-amber-500/10 hover:text-amber-100">
      {skill}
    </div>
  );
}
