import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(251,191,36,0.10),transparent_35%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Featured{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-amber-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-cyan-300 to-amber-300"></div>
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={`${project.id}-${project.title}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
