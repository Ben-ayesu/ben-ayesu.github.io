import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import NavLink from "../NavLink/NavLink";
import "./Header.scss";

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

  const navLinks = [
    { to: "hero", label: "Home" },
    { to: "about", label: "About" },
    { to: "projects", label: "Portfolio" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <header className={`top-0 w-full z-10 pt-4`}>
      <div className="container mx-auto flex justify-between items-center p-4 relative">
        {/* Navigation links */}
        <nav
          className={`absolute md:static top-full left-0 w-full md:w-auto md:flex md:items-center ${
            isMenuOpen ? "block bg-white dark:bg-[#111]" : "hidden"
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
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    label={link.label}
                    activeLink={activeLink}
                    setActiveLink={setActiveLink}
                    toggleMenu={toggleMenu}
                  />
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </nav>
        {/* Hamburger menu for mobile/tablet */}
        <div className="flex items-center">
          <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
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
