import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";

import {
  faJsSquare,
  faReact,
  faPython,
  faHtml5,
  faCss3Alt,
  faSass,
  faNodeJs,
  faJava,
  faGitAlt,
  faAndroid,
  faConfluence,
  faJira,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faToolbox,
  faPeopleGroup,
  faFileCode,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

const skills = [
  {
    category: "Frontend",
    list: [
      { name: "HTML", proficiency: 5 },
      { name: "CSS", proficiency: 4 },
      { name: "Sass", proficiency: 4 },
      { name: "JavaScript", proficiency: 5 },
      { name: "React JS", proficiency: 4 },
      { name: "Typescript", proficiency: 3 },
    ],
  },
  {
    category: "Backend",
    list: [
      { name: "Python", proficiency: 4 },
      { name: "Node.js", proficiency: 3 },
      { name: "Java", proficiency: 3 },
      { name: "Kotlin", proficiency: 4 },
      { name: "MySQL", proficiency: 3 },
      { name: "RESTful APIs", proficiency: 4 },
    ],
  },
  {
    category: "Tools & Technologies",
    list: [
      { name: "Jetpack Compose", proficiency: 4 },
      { name: "Git", proficiency: 5 },
      { name: "Testing", proficiency: 4 },
      { name: "Google Cloud", proficiency: 3 },
      { name: "Google Generative AI", proficiency: 3 },
    ],
  },
  {
    category: "Collaborative Tools",
    list: [
      { name: "Confluence", proficiency: 3 },
      { name: "Jira", proficiency: 4 },
      { name: "Agile", proficiency: 4 },
    ],
  },
  {
    category: "IDEs",
    list: [
      { name: "Visual Studio", proficiency: 3 },
      { name: "IntelliJ", proficiency: 4 },
      { name: "Android Studio", proficiency: 4 },
    ],
  },
];

const getIconForSkill = (skillName: string) => {
  switch (skillName) {
    case "HTML":
      return faHtml5;
    case "CSS":
      return faCss3Alt;
    case "Sass":
      return faSass;
    case "JavaScript":
    case "Typescript":
      return faJsSquare;
    case "React JS":
      return faReact;
    case "Python":
      return faPython;
    case "Node.js":
      return faNodeJs;
    case "Java":
      return faJava;
    case "Kotlin":
    case "Google Generative AI":
    case "IntelliJ":
    case "Android Studio":
      return faFileCode;
    case "MySQL":
    case "RESTful APIs":
      return faDatabase;
    case "Jetpack Compose":
      return faAndroid;
    case "Git":
      return faGitAlt;
    case "Testing":
    case "Google Cloud":
      return faToolbox;
    case "Confluence":
      return faConfluence;
    case "Jira":
      return faJira;
    case "Agile":
      return faPeopleGroup;
    default:
      return faQuestionCircle;
  }
};

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
              <motion.div
                key={skill.name}
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
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
