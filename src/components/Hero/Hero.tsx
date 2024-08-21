const Hero = () => {
  return (
    <section id="hero" className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Hi, I'm Benjamin Ayesu-Attah
        </h1>
        <img
          src="/Online-BC-Headshots-March-2024_0019_Ben-Ayesu-Attah.jpg"
          alt="Benjamin"
          className="rounded-lg shadow-lg mb-8 w-1/2 md:w-1/3"
        />
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
