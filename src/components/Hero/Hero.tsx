const Hero = () => {
  return (
    <section id="hero" className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Hi, I'm Benjamin Ayesu-Attah
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Passionate Software Developer with a focus on Frontend, Backend and
          Mobile development.
        </p>
        <a href="#projects">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Explore My Projects
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
