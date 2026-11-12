import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { About, Expertise, Skills, Experience, Footer } from "../components/Sections";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Expertise />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
