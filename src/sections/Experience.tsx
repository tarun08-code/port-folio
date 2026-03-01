import TimelineItem from '../components/TimelineItem';
import { experiences } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="mt-12">
          {experiences.map((experience) => (
            <TimelineItem key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
