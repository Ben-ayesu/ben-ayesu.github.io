import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Sales Tax Calculator",
      description:
        "An Android app to calculate sales state and provincial tax calculations.",
      technologies: ["Kotlin", "Jetpack Compose", "MVVM"],
    },
    {
      title: "Brainstation Telus Industry Hackathon",
      description:
        "Developed an interactive questionnaire to optimize the bundling of Telus TV packages.",
      technologies: ["JavaScript", "React JS", "SCSS"],
    },
    {
      title: "Track it",
      description:
        "A sprint workout tracking app to help athletes log, analyze, and visualize performance data.",
      technologies: ["JavaScript", "Node.js", "React JS", "MySQL", "REST API"],
    },
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
