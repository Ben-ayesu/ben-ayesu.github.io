const About = () => {
  return (
    <section id="about" className="container mx-auto py-8 md:py-16">
      <h2 className="text-5xl font-bold md:mb-12 mb-4">About Me</h2>

      <div className="flex flex-col lg:flex-row items-center lg:items-start md:justify-between md:px-8">
        <div className="lg:w-1/2 mb-8 md:mb-0 order-1 md:order-1 lg:pr-8">
          <p className="text-lg font-semibold mb-2">
            Fueled by the same drive that propelled me to two Canadian national
            championships, I'm now applying the same competitive drive into my
            passion for software development.
          </p>
          <p className="mb-4">
            A four-month internship with Best Buy's Mobile App team sharpened my
            skills, gaining an understanding of software development and team
            collaboration. I've also explored Kotlin MultiPlatform, React
            Native, and iOS (Swift UI), eager to bring my athletic tenacity and
            technical expertise to the dynamic world of software development.
          </p>
          <p className="mb-4">
            My background includes leadership experience as vice president of
            the Coquitlam Cheetahs track and field club (150+ athletes), along
            with my technical skills, which led me to create an Android app with
            over 10k downloads, showcasing my practical problem-solving skills.
          </p>
        </div>
        <div className="lg:w-1/2 order-2 md:order-2">
          <img
            src="/images/ben-running.jpg"
            alt="Benjamin"
            className="rounded-lg shadow-lg w-full mb-4 md:mb-0"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
