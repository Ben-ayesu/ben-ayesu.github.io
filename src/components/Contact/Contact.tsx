import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="container mx-auto py-24 mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
      <p className="text-center mb-8">
        Interested in collaborating or have opportunities to discuss? Feel free
        to reach out via email or connect with me on social media. You can also
        check out my code on GitHub!
      </p>
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/Ben-ayesu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-gray-700 hover:text-black dark:hover:text-white transition duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:ben.ayesu.attah@gmail.com"
          className="text-4xl text-gray-700 hover:text-black dark:hover:text-white transition duration-300"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/benjamin-ayesu-attah/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-gray-700 hover:text-black dark:hover:text-white transition duration-300"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}

export default Contact;
