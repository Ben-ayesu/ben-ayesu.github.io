import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SkillItem from "../SkillItem/SkillItem";
import skills from "../../data/SkillsData";
import getIconForSkill from "../../utils/getIconForSkill";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Calculate the total number of skills
  const totalSkillsCount = skills.reduce(
    (count, category) => count + category.list.length,
    0
  );

  // Filter the skills based on activeCategory
  const filteredSkills = activeCategory
    ? skills.find((c) => c.category === activeCategory)?.list || []
    : skills.flatMap((category) => category.list);

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center">
          My Current Stack
        </h2>

        {/* Category Filter Section */}
        <ul className="unstyled mb-16 flex items-start">
          <li className="mx-2">Filter by</li>
          <li className="mx-2">
            <a
              href="#all"
              className={activeCategory === null ? "active" : ""}
              onClick={() => setActiveCategory(null)}
            >
              All
              {/* Display total count */}
              <span className="ml-1 rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-800">
                {totalSkillsCount}
              </span>
            </a>
          </li>
          <li className="mx-2">/</li>
          {skills.map((category) => (
            <li key={category.category} className="mx-2">
              <a
                href={`#${category.category.toLowerCase()}`}
                className={activeCategory === category.category ? "active" : ""}
                onClick={() => setActiveCategory(category.category)}
              >
                {category.category}
                {/* Display count */}
                <span className="ml-1 rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-800 mr-3">
                  {category.list.length}
                </span>
              </a>
              /
            </li>
          ))}
        </ul>
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
