import Image from "next/image";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Navbar from "../../../components/Navbar";
import { Footer } from "../../../components/Sections";
import { posts, getPostBySlug, formatPostDate } from "../../../data/blog";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Article not found | Sameed Awais" };
  }

  return {
    title: `${post.title} | Sameed Awais`,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: {
      type: "article",
      url: `/blogs/${post.slug}`,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: ["Sameed Awais"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function ArticleBody({ blocks }) {
  return blocks.map((block, index) => {
    if (block.type === "h2") {
      return (
        <h2 key={index} className="mt-10 text-2xl font-bold tracking-tight text-[#0b1230] sm:text-3xl">
          {block.text}
        </h2>
      );
    }

    if (block.type === "ul") {
      return (
        <ul key={index} className="mt-4 space-y-2.5 pl-5">
          {block.items.map((item) => (
            <li key={item} className="list-disc text-base leading-8 text-[#526078] marker:text-[#1a5cff]">
              {item}
            </li>
          ))}
        </ul>
      );
    }

    if (block.type === "quote") {
      return (
        <blockquote key={index} className="mt-8 border-l-2 border-[#1a5cff] pl-5 text-lg font-medium italic leading-relaxed text-[#263957]">
          {block.text}
        </blockquote>
      );
    }

    if (block.type === "code") {
      return (
        <pre key={index} className="mt-5 overflow-x-auto rounded-xl bg-[#0a1432] p-5 text-xs leading-relaxed text-[#dbe7ff] sm:text-sm">
          <code>{block.code}</code>
        </pre>
      );
    }

    return (
      <p
        key={index}
        className={
          index === 0
            ? "mt-4 text-lg leading-8 text-[#4b5468] sm:text-xl sm:leading-9"
            : "mt-4 text-base leading-8 text-[#526078]"
        }
      >
        {block.text}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    keywords: post.tags.join(", "),
    author: {
      "@type": "Person",
      name: "Sameed Awais",
      url: `${siteUrl}/about`,
    },
    publisher: {
      "@type": "Person",
      name: "Sameed Awais",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blogs/${post.slug}`,
    },
  };

  return (
    <main className="min-h-screen bg-white text-[#0b1230]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="relative isolate overflow-hidden bg-[#0a1432] text-white">
        <Navbar />
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full bg-[#1a5cff]/20 blur-3xl" />
        <div className="relative mx-auto max-w-[1400px] px-5 pb-16 pt-32 sm:px-8 lg:pb-20">
          <nav aria-label="Breadcrumb" className="mb-8 text-xs font-medium text-[#8eb3ff]">
            <a href="/blogs" className="transition hover:text-white">
              Blogs
            </a>
            <span aria-hidden="true" className="px-2 text-[#4d83ff]">
              ›
            </span>
            <span className="text-[#c0cce0]">{post.category}</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-[#1a5cff]/40 bg-[#1a5cff]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8eb3ff]">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#1a5cff]" />
            {post.category}
          </span>

          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#c0cce0] sm:text-lg">
            {post.description}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#8b9cbd]">
            <span>By Sameed Awais</span>
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
          <article className="max-w-3xl">
            <ArticleBody blocks={post.body} />

            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#e5eaf2] pt-6">
              <a href="/blogs" className="inline-flex items-center gap-2 text-sm font-medium text-[#0b1230] transition hover:text-[#1a5cff]">
                <FiArrowLeft aria-hidden="true" /> All articles
              </a>
              <a href="/#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a5cff] transition hover:text-[#164ed1]">
                Work with me <FiArrowRight aria-hidden="true" />
              </a>
            </div>
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-[#e3eaf5] bg-white p-5 shadow-[0_6px_24px_rgba(20,30,80,0.06)]">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8190a8]">Written by</p>
              <div className="mt-3 flex items-center gap-3">
                <Image
                  src="/sameed.png"
                  alt="Sameed Awais"
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover object-[50%_15%]"
                />
                <div>
                  <p className="font-bold">Sameed Awais</p>
                  <p className="text-xs text-[#64748b]">Software engineer &amp; AI/ML lead</p>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-[#e3eaf5] bg-white p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8190a8]">Topics</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-[#dce3ed] bg-white px-2.5 py-1 text-[10px] font-medium text-[#334155]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-[#0a1432] p-5 text-white">
              <p className="text-sm font-semibold">Have an AI product to build?</p>
              <p className="mt-2 text-xs leading-relaxed text-[#a8b3cf]">
                I help teams design and ship production-grade AI systems.
              </p>
              <a
                href="/#contact"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#1a5cff] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#174fe0]"
              >
                Get in touch <FiArrowRight aria-hidden="true" />
              </a>
            </div>
          </aside>
        </div>

        <div className="border-t border-[#e5eaf2] py-14">
          <h2 className="text-2xl font-bold tracking-tight">Related articles</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <a
                key={item.slug}
                href={`/blogs/${item.slug}`}
                className="group rounded-2xl border border-[#e3eaf5] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#1a5cff]/30 hover:shadow-[0_10px_28px_rgba(10,20,50,0.08)]"
              >
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#8190a8]">
                  <span>{item.category}</span>
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#c3cfe3]" />
                  <span>{item.readingTime}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold leading-snug transition group-hover:text-[#1a5cff]">
                  {item.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#1a5cff]">
                  Read article <FiArrowRight aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
