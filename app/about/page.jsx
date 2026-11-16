import Navbar from "../../components/Navbar";
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
      <section className="relative bg-[#0a1432] text-white">
        <Navbar />
        <div className="mx-auto flex min-h-[340px] max-w-6xl flex-col justify-end px-5 pb-14 pt-32 sm:px-8 lg:min-h-[390px] lg:pb-16">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8eb3ff]">A little about me</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl">
            Engineering ideas into <span className="text-[#1a5cff]">impact.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#c0cce0] sm:text-lg">
            I’m Sameed Awais, a software engineer and technical leader focused on building thoughtful, scalable digital products.
          </p>
        </div>
      </section>

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
