import SkillBadge from '../components/SkillBadge';
import { skills } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(34,211,238,0.14),transparent_42%),radial-gradient(circle_at_85%_10%,rgba(251,191,36,0.10),transparent_36%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 text-center mb-16">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            About <span className="bg-gradient-to-r from-cyan-300 to-amber-300 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-cyan-300 to-amber-300"></div>
        </div>

        <div className="relative z-10 mx-auto mb-16 max-w-4xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_30px_70px_-40px_rgba(34,211,238,0.45)] backdrop-blur-sm md:p-10">
          <p className="mb-6 text-lg leading-relaxed text-zinc-200">
            I'm a passionate technology enthusiast with a strong foundation in full-stack web
            development and a growing expertise in cloud infrastructure and DevOps practices. My
            journey in tech has been driven by curiosity and a desire to build efficient, scalable
            solutions.
          </p>
          <p className="text-lg leading-relaxed text-zinc-200">
            Currently focused on mastering AWS cloud services, containerization with Docker and
            Kubernetes, and implementing robust CI/CD pipelines. I believe in continuous learning
            and staying updated with the latest industry trends to deliver modern, production-ready
            applications.
          </p>
        </div>

        <div className="relative z-10 mb-8">
          <h3 className="mb-8 text-center text-2xl font-bold text-white">Technical Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
