import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/hero";
import Skills from "./components/skills/skills";
import About from "./components/about/about";
import Services from "./components/services/services";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </>
  );
}

export default App;