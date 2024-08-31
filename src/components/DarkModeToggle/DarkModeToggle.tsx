import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

interface DarkModeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({
  darkMode,
  toggleDarkMode,
}) => {
  return (
    <button
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
      className="dark-mode-switch relative inline-flex items-center justify-center right-4 bottom-1 w-12 h-6 rounded-full bg-gray-300 dark:bg-gray-700 cursor-pointer transition-colors duration-300"
    >
      <span
        className={`dark-mode-switch-thumb absolute left-0 w-6 h-6 rounded-full bg-white dark:bg-gray-300 flex items-center justify-center transition-transform duration-300 transform ${
          darkMode ? "translate-x-6" : ""
        }`}
      >
        <FontAwesomeIcon
          icon={faMoon}
          className={`h-4 w-4 text-gray-700 transition-opacity duration-300 ${
            darkMode ? "opacity-0" : "opacity-100"
          }`}
        />
        <FontAwesomeIcon
          icon={faSun}
          className={`h-4 w-4 text-yellow-500 transition-opacity duration-300 ${
            darkMode ? "opacity-100" : "opacity-0"
          }`}
        />
      </span>
      <input
        type="checkbox"
        id="dark-mode-toggle"
        className="sr-only"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
    </button>
  );
};

export default DarkModeToggle;
