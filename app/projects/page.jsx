import Navbar from "../../components/Navbar";
import Projects from "../../components/Projects";
import { Footer } from "../../components/Sections";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative flex min-h-[280px] flex-col justify-end bg-[#0a1432] px-6 pb-10 pt-28 text-white sm:px-10 lg:px-[6.3%]">
        <Navbar />
        <div className="relative z-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Portfolio</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">All projects<span className="text-[#1a5cff]">.</span></h1>
        </div>
      </section>
      <Projects showAll />
      <Footer />
    </main>
  );
}
