import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SkillItem from "../SkillItem/SkillItem";
import skills from "../../data/SkillsData";
import getIconForSkill from "../../utils/getIconForSkill";
import CategoryFilter from "../CategoryFilter/CategoryFilter";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Filter the skills based on activeCategory
  const filteredSkills = activeCategory
    ? skills.find((c) => c.category === activeCategory)?.list || []
    : skills.flatMap((category) => category.list);

  return (
    <section id="skills" className="py-8 md:py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center">
          My Current Stack
        </h2>
        {/* Category Filter Section */}
        <CategoryFilter
          skills={skills}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        {/* Skill Display Section (Cloud/Cluster Layout) */}
        <div className="skills-cloud flex flex-wrap justify-center my-8">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <SkillItem
                key={skill.name}
                skill={skill}
                getIconForSkill={getIconForSkill}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
