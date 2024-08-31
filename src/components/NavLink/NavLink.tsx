import { Link } from "react-scroll";

interface NavLinkProps {
  to: string;
  label: string;
  activeLink: string;
  setActiveLink: (link: string) => void;
  toggleMenu: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({
  to,
  label,
  activeLink,
  setActiveLink,
  toggleMenu,
}) => {
  return (
    <li className={`relative ${activeLink === to ? "active" : ""}`}>
      <Link
        to={to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="block py-2 px-4 text-2xl font-bold text-gray-700 dark:text-gray-300 md:hover:bg-transparent rounded md:rounded-none transition duration-150 relative group"
        onClick={() => {
          setActiveLink(to);
          toggleMenu();
        }}
      >
        {label}
        <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
      </Link>
      {activeLink === to && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-full"></div>
      )}
    </li>
  );
};

export default NavLink;
