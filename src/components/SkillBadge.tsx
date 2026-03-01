interface SkillBadgeProps {
  skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl text-white font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-gray-600">
      {skill}
    </div>
  );
}
