import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  featured?: boolean;
  video?: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  link,
  github,
  featured = false,
  video,
}: ProjectCardProps) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg transition duration-300 ${
        featured ? "md:col-span-2" : "hover:shadow-xl"
      } relative`}
    >
      {/* Video */}
      <div className="rounded-lg overflow-hidden mb-4">
        <video autoPlay loop muted playsInline className="w-full h-auto">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Project Details */}
      <div className="p-6 flex flex-col pb-20">
        <h3 className={`font-bold mb-3 ${featured ? "text-2xl" : "text-xl"}`}>
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium mr-2 px-2.5 py-0.5 rounded mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex space-x-4">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
              >
                <FaExternalLinkAlt className="mr-2" />
                Project
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold py-2 px-4 rounded transition duration-300"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
