import { FaArrowRight } from "react-icons/fa";
import PageHero from "../../components/PageHero";
import Projects, { projects } from "../../components/Projects";
import { Footer } from "../../components/Sections";

const categories = [...new Set(projects.flatMap((project) => project.category))];

const fanLayout = [
  "left-0 top-14 z-10 w-[64%] -rotate-6",
  "left-[18%] top-0 z-20 w-[64%]",
  "left-[36%] top-14 z-10 w-[64%] rotate-6",
];

function ProjectFan() {
  return (
    <div className="relative mx-auto h-[300px] w-full max-w-[480px] sm:h-[340px]">
      {projects.slice(0, 3).map((project, index) => (
        <article
          key={project.title}
          className={`absolute ${fanLayout[index]} overflow-hidden rounded-2xl border border-white/15 shadow-[0_20px_50px_rgba(3,12,32,0.45)] transition duration-300 hover:z-30 hover:-translate-y-1`}
        >
          <div className="relative aspect-[1.55] bg-[linear-gradient(125deg,#dfe7fd_0%,#8eaeff_38%,#1a5cff_70%,#0a1432_100%)]">
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#06172b]/90 via-[#06172b]/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#a9c4ff]">
                {project.category.slice(0, 2).join(" / ")}
              </p>
              <h2 className="mt-1 text-sm font-bold leading-snug text-white sm:text-base">{project.title}</h2>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        eyebrow="Portfolio"
        title={<>All projects<span className="text-[#1a5cff]">.</span></>}
        intro="Platforms, products, and AI systems shipped for startups, enterprises, and public-sector teams."
        actions={
          <>
            <a
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#1a5cff] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(26,92,255,0.28)] transition hover:-translate-y-0.5 hover:bg-[#174fe0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a5cff] focus-visible:ring-offset-2"
            >
              Start a project
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="/about"
              className="inline-flex items-center rounded-xl border border-[#0b1230]/15 bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1230] shadow-[0_4px_14px_rgba(10,20,50,0.05)] transition hover:-translate-y-0.5 hover:border-[#1a5cff]/35 hover:bg-[#f7f9fc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a5cff] focus-visible:ring-offset-2"
            >
              About me
            </a>
          </>
        }
        meta={[`${projects.length} projects delivered`, `${categories.length} industries`, "AI · SaaS · FinTech"]}
      >
        <ProjectFan />
      </PageHero>

      <Projects showAll />
      <Footer />
    </main>
  );
}
