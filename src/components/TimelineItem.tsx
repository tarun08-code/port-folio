import { Experience } from '../types';

interface TimelineItemProps {
  experience: Experience;
}

export default function TimelineItem({ experience }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-12 border-l-2 border-blue-600 last:pb-0">
      <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-[9px]"></div>

      <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <span className="text-blue-400 text-sm font-medium">{experience.period}</span>
        <h3 className="text-xl font-bold text-white mt-2">{experience.title}</h3>
        <p className="text-purple-400 font-medium mt-1">{experience.organization}</p>
        <p className="text-gray-400 mt-3">{experience.description}</p>
      </div>
    </div>
  );
}
