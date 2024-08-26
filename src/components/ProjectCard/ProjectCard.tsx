interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg p-6 border border-gray-300 dark:border dark:border-gray-600 transform hover:scale-105 hover:shadow-2xl transition duration-300 flex flex-col justify-between">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-200 mb-4">{description}</p>
      <div className="flex flex-wrap">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100 text-sm font-medium mr-2 px-2.5 py-0.5 rounded mb-2"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded   
 mt-4 inline-block"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
