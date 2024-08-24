import { FaStar } from "react-icons/fa";

interface Skill {
    name: string;
    proficiency: number;
  }
  
  interface SkillCardProps {
    category: string;
    list: Skill[];
  }

  const SkillCard: React.FC<SkillCardProps> = ({ category, list }) => (
    <div className="skill-category bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 dark:border dark:border-gray-600"> 
    <h3 className="text-xl font-semibold mb-4 text-blue-500">{category}</h3>
    <ul>
      {list.map((skill) => (
        <li key={skill.name} className="flex items-center mb-2">
          <span className="mr-2 font-medium">{skill.name}</span>
          <span className="flex">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`h-4 w-4 ${
                  i < skill.proficiency ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default SkillCard