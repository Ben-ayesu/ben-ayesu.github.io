import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SkillItemProps {
  skill: { name: string; proficiency: number };
  getIconForSkill: (skillName: string) => any;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, getIconForSkill }) => {
  return (
    <motion.div
      className="skill-item m-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.3 }}
      layout
    >
      <FontAwesomeIcon
        icon={getIconForSkill(skill.name)}
        className="text-4xl mb-2"
      />
      <span className="font-medium text-lg">{skill.name}</span>
    </motion.div>
  );
};

export default SkillItem;
