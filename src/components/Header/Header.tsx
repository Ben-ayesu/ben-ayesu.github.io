import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="sticky top-0 w-full z-10 text-gray-800 pt-4 bg-white dark:bg-gray-800 dark:text-white transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ben.dev</h1>
        <nav className="flex items-center">
          <ul className="flex space-x-4">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <label
            htmlFor="dark-mode-toggle"
            className="flex items-center cursor-pointer ml-4"
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
                className="text-gray-400 dark:text-gray-200 h-5 w-5 fa-fw transition-transform duration-300"
              />
            </div>
          </label>
        </nav>
      </div>
    </header>
  );
};

export default Header;
