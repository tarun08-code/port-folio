import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';
import Button from './Button';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0b1422]/80 shadow-[0_30px_60px_-40px_rgba(34,211,238,0.45)] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-200/30">
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1422] via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="mb-3 line-clamp-2 text-xl font-bold text-white">{project.title}</h3>
        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-zinc-300">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-300/25 bg-cyan-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {project.liveUrl && (
            <Button
              variant="primary"
              href={project.liveUrl}
              className="flex items-center gap-2 text-sm"
            >
              <ExternalLink size={16} />
              Live Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button
              variant="secondary"
              href={project.githubUrl}
              className="flex items-center gap-2 text-sm"
            >
              <Github size={16} />
              GitHub
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
