import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';
import Button from './Button';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-700 text-blue-400 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
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
