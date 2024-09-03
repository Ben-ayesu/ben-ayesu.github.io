const About = () => {
  return (
    <section id="about" className="container mx-auto py-8 md:py-16">
      <h2 className="text-5xl font-bold md:mb-12 mb-4">About Me</h2>

      <div className="flex flex-col lg:flex-row items-center lg:items-start md:justify-between md:px-8">
        <div className="lg:w-1/2 mb-8 md:mb-0 order-1 md:order-1 lg:pr-8">
          <p className="text-lg font-semibold mb-2">
            Driven by the same determination that led me to win two Canadian
            national championships, I now channel that competitive spirit into
            my passion for software development.
          </p>
          <p className="mb-4">
            With 7 years of experience in the retail industry focusing on
            merchandise operations, I bring a unique perspective to the tech
            world. During a four-month internship with Best Buy's Mobile App
            team, I honed my skills in software development and team
            collaboration.
          </p>
          <p className="mb-4">
            My leadership experience as vice president and coach of the
            Coquitlam Cheetahs track (150+ athletes), complements my technical
            abilities. I am motivated to apply my athletic tenacity and
            technical expertise in the fast-paced world of software development.
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
