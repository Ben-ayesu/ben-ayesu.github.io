import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import "./App.css";

interface AppProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

function App({ darkMode, toggleDarkMode }: AppProps) {
  return (
    <div className="App">
      <div className="container mx-auto px-4">
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
