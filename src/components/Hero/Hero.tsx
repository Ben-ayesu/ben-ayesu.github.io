import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section
      id="hero"
      className="py-16 min-h-screen md:min-h-[80vh] flex items-center"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left Column (Content) */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-lg mb-2">Hello, I'm</h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Benjamin Ayesu-Attah
          </h1>
          <div className="text-lg text-gray-600 mb-8">
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "Backend Developer",
                  "Mobile Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </div>
          <a href="#projects">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              Explore My Portfolio
            </button>
          </a>
        </div>

        {/* Right Column (Image & Fun Facts) */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src="/images/Online-BC-Headshots-March-2024_0019_Ben-Ayesu-Attah.jpg"
              alt="Benjamin Ayesu-Attah"
              className="rounded-full w-64 h-64 object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
