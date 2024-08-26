interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
}

const ProjectCard = ({
  title,
  description,
  technologies,
}: ProjectCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 dark:border dark:border-gray-600">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded mb-2"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
