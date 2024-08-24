import SkillCard from "../SkillCard/SkillCard";

const Skills = () => {
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
      category: "Project Management & Collaboration",
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

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory) => (  
          <SkillCard key={skillCategory.category} category={skillCategory.category} list={skillCategory.list} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
