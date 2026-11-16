import { projects, slugifyProject } from "../../components/Projects";
import { posts } from "../../data/blog";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export function GET() {
  const lines = [
    "# Sameed Awais",
    "",
    "> Software engineer and technical leader focused on AI/ML, scalable products, and system design. This site is a portfolio of selected projects, writing, and professional experience.",
    "",
    "Sameed Awais has 10+ years of experience building software, leading engineering teams, and shipping AI-powered products. Core stack: Python, Django, FastAPI, React, Next.js, PostgreSQL, LangChain, LangGraph, and AWS.",
    "",
    "## Pages",
    `- [Home](${siteUrl}/): Portfolio overview, selected work, skills, experience, testimonials, and contact details.`,
    `- [About](${siteUrl}/about): Background, approach to product-minded engineering, and areas of focus.`,
    `- [Projects](${siteUrl}/projects): All delivered projects with descriptions and technology stacks.`,
    `- [Blogs](${siteUrl}/blogs): Articles on AI engineering, LLM systems, backend architecture, and building products.`,
    "",
    "## Projects",
    ...projects.map(
      (project) =>
        `- [${project.title}](${siteUrl}/projects/${slugifyProject(project.title)}): ${project.description}`
    ),
    "",
    "## Blog",
    ...posts.map((post) => `- [${post.title}](${siteUrl}/blogs/${post.slug}): ${post.description}`),
    "",
    "## Optional",
    `- [Sitemap](${siteUrl}/sitemap.xml): Full list of pages, projects, and articles.`,
    `- [Contact](mailto:sameedawais@gmail.com): Reach Sameed Awais directly.`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
