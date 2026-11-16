import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import { About, Expertise, Skills, Experience, Footer } from "../components/Sections";

export default function Page() {
  return (
    <>
      <Hero />
      <About showStats={false} />
      <Expertise />
      <Skills />
      <Projects />
      <Reviews />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
