import { projects, slugifyProject } from "../components/Projects";
import { posts } from "../data/blog";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function sitemap() {
  const lastModified = new Date();

  const staticRoutes = ["", "/about", "/projects", "/blogs"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteUrl}/projects/${slugifyProject(project.title)}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const postRoutes = posts.map((post) => ({
    url: `${siteUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes, ...postRoutes];
}
