import Navbar from "../../components/Navbar";

export default function BlogsPage() {
  return (
    <main className="bg-white text-[#0b1230]">
      <section className="relative isolate min-h-screen overflow-hidden bg-[#0a1432] text-white">
        <Navbar />

        <div className="relative z-10 flex min-h-screen items-center px-6 pb-16 pt-28 sm:px-10 lg:w-[55%] lg:px-[6.3%] lg:pb-0 lg:pt-16">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#dfe7fd] px-4 py-2 text-sm font-semibold text-[#0b1230]">
              <span className="h-2 w-2 rounded-full bg-[#1a5cff]" />
              Thoughts, learnings &amp; ideas
            </span>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
              Blogs<span className="text-[#1a5cff]">.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
              Articles on software engineering, AI/ML, system design, and building products.
            </p>
          </div>
        </div>
      </section>

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
    </main>
  );
}
