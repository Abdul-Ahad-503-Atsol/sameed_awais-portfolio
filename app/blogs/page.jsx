import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import PageHero from "../../components/PageHero";
import { Footer } from "../../components/Sections";
import { posts, formatPostDate } from "../../data/blog";

export const metadata = {
  title: "Blogs | Sameed Awais",
  description:
    "Practical articles on AI engineering, LLM systems, backend architecture, and building production software.",
  keywords: ["AI engineering", "LLM", "RAG", "LangGraph", "Django", "system design"],
  alternates: { canonical: "/blogs" },
  openGraph: {
    type: "website",
    url: "/blogs",
    title: "Blogs | Sameed Awais",
    description:
      "Practical articles on AI engineering, LLM systems, backend architecture, and building production software.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs | Sameed Awais",
    description:
      "Practical articles on AI engineering, LLM systems, backend architecture, and building production software.",
  },
};

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
        meta={["Engineering", "AI/ML", "System design"]}
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
            <a
              href={`/blogs/${posts[0].slug}`}
              className="mt-6 inline-flex items-center gap-2 border-t border-[#dfe7fd] pt-4 text-xs font-semibold text-[#1a5cff] transition hover:text-[#164ed1]"
            >
              Read the latest article <FiArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </PageHero>

      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#dfe7fd] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0b1230]">
              <span className="h-2 w-2 rounded-full bg-[#1a5cff]" />
              Latest articles
            </span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.03em] text-[#0b1230] sm:text-4xl">
              Notes from building <span className="text-[#1a5cff]">AI systems</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#526078]">
            Practical lessons on retrieval, agents, backend architecture, and shipping AI products that hold up in production.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-[1.35rem] border border-[#e3eaf5] bg-white shadow-[0_8px_24px_rgba(10,20,50,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(10,20,50,0.12)]"
            >
              <a href={`/blogs/${post.slug}`} className="flex h-full flex-col">
                <div className="relative aspect-[2] overflow-hidden bg-[linear-gradient(125deg,#dfe7fd_0%,#8eaeff_38%,#1a5cff_70%,#0a1432_100%)]">
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#06172b]/75 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur">
                    {post.category}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-white/20 text-white backdrop-blur transition group-hover:bg-white/35"
                  >
                    <FiArrowUpRight />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#8190a8]">
                    <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#c3cfe3]" />
                    <span>{post.readingTime}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold leading-snug text-[#0b1230] transition group-hover:text-[#1a5cff]">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#526078]">
                    {post.description}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-[#1a5cff]">
                    Read article <FiArrowRight aria-hidden="true" />
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
