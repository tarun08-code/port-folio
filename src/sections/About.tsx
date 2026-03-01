import SkillBadge from '../components/SkillBadge';
import { skills } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm a passionate technology enthusiast with a strong foundation in full-stack web
            development and a growing expertise in cloud infrastructure and DevOps practices. My
            journey in tech has been driven by curiosity and a desire to build efficient, scalable
            solutions.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Currently focused on mastering AWS cloud services, containerization with Docker and
            Kubernetes, and implementing robust CI/CD pipelines. I believe in continuous learning
            and staying updated with the latest industry trends to deliver modern, production-ready
            applications.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Technical Skills</h3>
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
