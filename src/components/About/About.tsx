const About = () => {
  return (
    <section id="about" className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <div className="flex flex-col items-center">
      <img
          src="/Online-BC-Headshots-March-2024_0019_Ben-Ayesu-Attah.jpg"
          alt="Benjamin"
          className="rounded-lg shadow-lg mb-8 w-1/2 md:w-1/3"
        />
        <p>Trading gold medals for killer code</p>
        <div className="text-center">
          <p>
            Software Developer with hands-on experience collaborating with teams
            to diagnose and resolve critical software issues. Developed a Sales
            Tax Calculator with over 5,000 downloads. Knowledge of multiple
            programming languages such as Python, JavaScript, Kotlin, along with
            modern software engineering practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
