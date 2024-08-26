import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section
      id="hero"
      className="py-16 min-h-screen md:min-h-[80vh] flex items-center"
    >
      <div className="container mx-auto flex flex-col items-center justify-center md:flex-row md:justify-between p-4"> 
        {/* Right Column (Image) - Moved up for mobile */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0"> 
          <div className="relative">
            <div className="w-64 h-64 rounded-full bg-yellow-500 flex items-center justify-center overflow-hidden">
              <img
                src="/images/Online-BC-Headshots-March-2024_0019_Ben-Ayesu-Attah.jpg"
                alt="Benjamin Ayesu-Attah"
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
        {/* Left Column (Content) */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-lg dark:text-gray-300 text-gray-900 mb-2">Hello, I'm</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Benjamin Ayesu-Attah
          </h1>
          <div className="text-lg dark:text-gray-400 text-gray-900 mb-6">
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
          {/* Button arrangement */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start"> 
            <a href="#projects">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                CONTACT ME
              </button>
            </a>
            <a href="#projects">
              <button className="bg-transparent border border-gray-800 dark:border-gray-300 hover:bg-gray-700 dark:text-gray-300 text-gray-900 hover:text-white font-bold py-2 px-4 rounded">
                VIEW MY PORTFOLIO
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
