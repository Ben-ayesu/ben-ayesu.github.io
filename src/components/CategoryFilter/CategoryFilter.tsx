interface CategoryFilterProps {
  skills: { category: string; list: { name: string; proficiency: number }[] }[];
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  skills,
  activeCategory,
  setActiveCategory,
}) => {
  // Calculate the total number of skills
  const totalSkillsCount = skills.reduce(
    (count, category) => count + category.list.length,
    0
  );

  return (
    <ul className="unstyled mb-16 flex items-start">
      <li className="mx-2">Filter by</li>
      <li className="mx-2">
        <a
          href="#all"
          className={activeCategory === null ? "active" : ""}
          onClick={() => setActiveCategory(null)}
        >
          All
          {/* Display total count */}
          <span className="ml-1 rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-800">
            {totalSkillsCount}
          </span>
        </a>
      </li>
      <li className="mx-2">/</li>
      {skills.map((category) => (
        <li key={category.category} className="mx-2">
          <a
            href={`#${category.category.toLowerCase()}`}
            className={activeCategory === category.category ? "active" : ""}
            onClick={() => setActiveCategory(category.category)}
          >
            {category.category}
            {/* Display count */}
            <span className="ml-1 rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-800 mr-3">
              {category.list.length}
            </span>
          </a>
          /
        </li>
      ))}
    </ul>
  );
};
export default CategoryFilter;
