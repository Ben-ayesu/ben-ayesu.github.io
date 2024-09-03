import ProjectCard from "../ProjectCard/ProjectCard";
import projects from "../../data/ProjectsData";

const Projects = () => {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <section id="projects" className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold md:mb-12 mb-4">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard {...featuredProject} featured={true} />
          {otherProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
