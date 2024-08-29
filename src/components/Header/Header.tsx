import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [activeLink, setActiveLink] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle window resize to reset the menu state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false); // Ensure the menu is closed when switching to desktop mode
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={`top-0 w-full z-10 pt-4`}>
      <div className="container mx-auto flex justify-between items-center p-4 relative">
        {/* Navigation links */}
        <nav
          className={`absolute md:static top-full left-0 w-full md:w-auto md:flex md:items-center ${
            isMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <AnimatePresence>
            {(isMenuOpen || window.innerWidth >= 768) && (
              <motion.ul
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`flex flex-col md:flex-row md:space-x-4 md:mt-0 md:bg-transparent p-4 dark:bg-[rbg(17,17,17)]`}
              >
                <li
                  className={`relative ${
                    activeLink === "hero" ? "active" : ""
                  }`}
                >
                  <Link
                    to="hero"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="block py-2 px-4 text-2xl font-bold text-gray-700 dark:text-gray-300 md:hover:bg-transparent rounded md:rounded-none transition duration-150 relative group"
                    onClick={() => {
                      setActiveLink("hero");
                      toggleMenu();
                    }}
                  >
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  {activeLink === "hero" && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-full"></div>
                  )}
                </li>
                <li
                  className={`relative ${
                    activeLink === "about" ? "active" : ""
                  }`}
                >
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="block py-2 px-4 text-2xl font-bold text-gray-700 dark:text-gray-300 md:hover:bg-transparent rounded md:rounded-none transition duration-150 relative group"
                    onClick={() => {
                      setActiveLink("about");
                      toggleMenu();
                    }}
                  >
                    About
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
                    {/* Underline effect */}
                  </Link>
                  {activeLink === "about" && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-full"></div>
                  )}
                </li>
                <li
                  className={`relative ${
                    activeLink === "projects" ? "active" : ""
                  }`}
                >
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="block py-2 px-4 text-2xl font-bold text-gray-700 dark:text-gray-300 md:hover:bg-transparent rounded md:rounded-none transition duration-150 relative group"
                    onClick={() => {
                      setActiveLink("projects");
                      toggleMenu();
                    }}
                  >
                    Portfolio
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  {activeLink === "projects" && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-full"></div>
                  )}
                </li>
                <li
                  className={`relative ${
                    activeLink === "contact" ? "active" : ""
                  }`}
                >
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="block py-2 px-4 text-2xl font-bold text-gray-700 dark:text-gray-300 md:hover:bg-transparent rounded md:rounded-none transition duration-150 relative group"
                    onClick={() => {
                      setActiveLink("contact");
                      toggleMenu();
                    }}
                  >
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  {activeLink === "contact" && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-full"></div>
                  )}
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </nav>
        {/* Hamburger menu for mobile/tablet */}
        <div className="flex items-center">
          {/* Dark mode toggle */}
          <label
            htmlFor="dark-mode-toggle"
            className="flex items-center cursor-pointer mr-4"
          >
            <div className="relative">
              <input
                type="checkbox"
                id="dark-mode-toggle"
                className="sr-only"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              <FontAwesomeIcon
                icon={darkMode ? faSun : faMoon}
                className="text-gray-400 dark:text-gray-200 h-7 w-7 fa-fw transition-transform duration-300"
              />
            </div>
          </label>
          <button
            className={`md:hidden text-gray-400 dark:text-gray-200 focus:outline-none transition-transform duration-300  ${
              isMenuOpen ? "rotate-180" : ""
            }`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon
              icon={isMenuOpen ? faXmark : faBars}
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
