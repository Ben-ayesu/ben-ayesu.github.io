const About = () => {
  return (
    <section id="about" className="container mx-auto py-16">
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        <div className="md:w-1/3 order-2 md:order-1"> 
          <img
            src="/Online-BC-Headshots-March-2024_0019_Ben-Ayesu-Attah.jpg"
            alt="Benjamin"
            className="rounded-lg shadow-lg w-full mb-4 md:mb-0" 
          />
        </div>
        
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg font-semibold mb-2">
            Two-time Canadian national champion in the 400m hurdles and 400m events, now applying the same competitive drive into my passion for software development. 
          </p>
          <p className="mb-4">
            My background includes leadership experience as vice president of the Coquitlam Cheetahs track and field club (150+ athletes), along with my technical skills, which led me to create a successful Android app with over 6k downloads, showcasing my practical problem-solving skills.
          </p>
          <p className="mb-4">
            A four-month internship with Best Buy's Mobile App team sharpened my skills, gaining an understanding of software development and team collaboration. I've also explored Kotlin MultiPlatform, React Native, and iOS (Swift UI), eager to bring my athletic tenacity and technical expertise to the dynamic world of software development.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            View My Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
