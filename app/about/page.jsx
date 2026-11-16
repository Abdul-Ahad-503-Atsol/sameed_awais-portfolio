import { FaArrowRight } from "react-icons/fa";
import PageHero from "../../components/PageHero";
import { About, Footer } from "../../components/Sections";
import Heading from "../../components/Heading";

const strengths = [
  {
    number: "01",
    title: "Product-minded engineering",
    description:
      "I connect technical decisions to the people using a product, focusing on clear workflows, reliable experiences, and outcomes that matter.",
  },
  {
    number: "02",
    title: "Systems built to scale",
    description:
      "From APIs and data models to cloud architecture, I build foundations that can grow with a product while staying maintainable and secure.",
  },
  {
    number: "03",
    title: "Practical AI",
    description:
      "I bring AI and language models into real applications where they can solve useful problems, work with existing systems, and support people effectively.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f1f3fb]">
      <PageHero
        eyebrow="A little about me"
        title={<>Engineering ideas into <span className="text-[#1a5cff]">impact.</span></>}
        intro="I&rsquo;m Sameed Awais, a software engineer and technical leader focused on building thoughtful, scalable digital products."
        actions={
          <>
            <a
              href="/#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#1a5cff] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(26,92,255,0.28)] transition hover:-translate-y-0.5 hover:bg-[#174fe0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a5cff] focus-visible:ring-offset-2"
            >
              View my work
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center rounded-xl border border-[#0b1230]/15 bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1230] shadow-[0_4px_14px_rgba(10,20,50,0.05)] transition hover:-translate-y-0.5 hover:border-[#1a5cff]/35 hover:bg-[#f7f9fc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a5cff] focus-visible:ring-offset-2"
            >
              Get in touch
            </a>
          </>
        }
        meta={["Based in Lahore, Pakistan", "10+ years experience", "AI/ML · Full-stack"]}
      />

      <About showPortrait />

      <section className="mx-auto max-w-[1400px] px-5 pb-20 sm:px-8 lg:pb-28">
        <Heading tag="How I work">
          More than <span className="text-[#1a5cff]">writing code</span>
        </Heading>
        <p className="mb-8 max-w-2xl text-base leading-relaxed text-[#64748b]">
          I bring product thinking, technical depth, and clear ownership together from the first idea through delivery.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {strengths.map((strength) => (
            <article key={strength.number} className="rounded-3xl border border-[#e3eaf5] bg-white p-6 shadow-[0_8px_28px_rgba(20,30,80,0.06)] sm:p-7">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#eaf0ff] text-sm font-bold text-[#1a5cff]">
                {strength.number}
              </span>
              <h2 className="mt-5 text-lg font-bold text-[#0b1230]">{strength.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#526078]">{strength.description}</p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
