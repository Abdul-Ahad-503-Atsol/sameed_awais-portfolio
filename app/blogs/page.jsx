import PageHero from "../../components/PageHero";
import { Footer } from "../../components/Sections";

const journalTopics = ["Engineering deep dives", "AI/ML and systems", "Product lessons"];

export default function BlogsPage() {
  return (
    <main className="bg-white text-[#0b1230]">
      <PageHero
        eyebrow="Thoughts, learnings & ideas"
        title={<>Blogs<span className="text-[#1a5cff]">.</span></>}
        intro="Articles on software engineering, AI/ML, system design, and building products."
        actions={
          <>
            <a
              href="/#home"
              className="inline-flex items-center rounded-xl bg-[#1a5cff] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(26,92,255,0.28)] transition hover:-translate-y-0.5 hover:bg-[#174fe0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a5cff] focus-visible:ring-offset-2"
            >
              Back to portfolio
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center rounded-xl border border-[#0b1230]/15 bg-white px-6 py-3.5 text-sm font-semibold text-[#0b1230] shadow-[0_4px_14px_rgba(10,20,50,0.05)] transition hover:-translate-y-0.5 hover:border-[#1a5cff]/35 hover:bg-[#f7f9fc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a5cff] focus-visible:ring-offset-2"
            >
              Get in touch
            </a>
          </>
        }
        meta={["Engineering", "AI/ML", "System design", "New posts soon"]}
      >
        <div className="relative mx-auto w-full max-w-[380px]">
          <div aria-hidden="true" className="absolute -inset-4 rounded-[2rem] bg-[#1a5cff]/20 blur-2xl" />
          <div className="relative rotate-2 rounded-[1.75rem] border border-[#e3eaf5] bg-white p-7 text-[#0b1230] shadow-[0_24px_60px_rgba(3,12,32,0.45)]">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf0ff] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#1a5cff]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1a5cff]" />
              Journal
            </span>
            <h2 className="mt-5 text-2xl font-extrabold leading-snug text-[#0b1230]">
              Notes on building software that ships.
            </h2>
            <ul className="mt-5 space-y-3">
              {journalTopics.map((topic) => (
                <li key={topic} className="flex items-center gap-3 text-sm text-[#526078]">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#1a5cff]" />
                  {topic}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-[#dfe7fd] pt-4 text-xs font-semibold text-[#1a5cff]">
              New articles are on the way
            </p>
          </div>
        </div>
      </PageHero>

      <section className="min-h-[45vh] bg-white px-6 py-16 sm:px-10 lg:px-[12%] lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-3xl font-bold sm:text-4xl">Latest articles</h2>
          <div className="mt-8 rounded-3xl border border-[#dfe7fd] bg-white p-8 shadow-[0_12px_36px_rgba(20,30,80,0.08)] sm:p-12">
            <h3 className="text-2xl font-bold">New articles are on the way</h3>
            <p className="mt-3 max-w-xl leading-relaxed text-[#4b5468]">
              I’m putting together practical notes and lessons from my work. Check back soon for the first post.
            </p>
            <a href="/#home" className="mt-7 inline-flex rounded-lg bg-[#1a5cff] px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5">
              Back to portfolio
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
