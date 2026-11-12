"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaCertificate,
  FaArrowUp,
  FaDesktop,
  FaServer,
  FaMicrochip,
  FaDatabase,
  FaCloud,
  FaLink,
  FaChevronRight,
} from "react-icons/fa";
import Heading from "./Heading";
import { certifications } from "../data/portfolio";

const wrap = "mx-auto max-w-6xl px-5 py-20 lg:py-28";

export function About() {
  return (
    <section id="about" className={wrap}>
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[32px] bg-[#0a1432] pt-8">
          <Image
            src="/sameed.png"
            alt="Sameed Awais"
            width={1086}
            height={1448}
            className="h-auto w-full"
          />
        </div>

        <div>
          <Heading tag="About me">
            Building technology that{" "}
            <span className="text-[#1a5cff]">works</span>
          </Heading>

          <div className="space-y-4 text-lg leading-relaxed text-[#4b5468]">
            <p>
              I'm Sameed Awais, a technology professional with 10+ years of
              experience in software engineering, system architecture, and
              AI/ML. I specialize in designing and building scalable digital
              products, developing reliable software systems, and solving
              complex technical challenges through thoughtful engineering.
            </p>

            <p>
              My expertise spans backend and full-stack development,
              artificial intelligence, machine learning, system design, and
              modern software architecture. I bring together technical depth,
              problem-solving, and strategic thinking to transform ideas into
              practical, efficient, and scalable solutions.
            </p>

            <p>
              I'm passionate about exploring emerging technologies,
              engineering impactful products, and continuously pushing the
              boundaries of what's possible through technology.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: "10+", label: "Years of experience" },
              { value: "70+", label: "Projects delivered" },
              { value: "100+", label: "Happy clients" },
              { value: "20+", label: "Teams led" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white p-5 shadow-[0_6px_24px_rgba(20,30,80,0.06)]"
              >
                <div className="text-3xl font-extrabold text-[#1a5cff]">
                  {s.value}
                </div>
                <div className="mt-1 text-sm font-medium text-[#4b5468]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Industries section removed temporarily.
// Industry data remains preserved in portfolio data for future use.

export function Expertise() {
  return null;
}

// TECHNICAL EXPERTISE
export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const skillCategories = [
    {
      title: "Frontend Development",
      description:
        "Building modern, responsive, and high-performance user interfaces.",
      icon: FaDesktop,
      items: ["React.js", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      description:
        "Developing secure, scalable, and reliable server-side applications and APIs.",
      icon: FaServer,
      items: [
        "Python",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Django",
        "FastAPI",
        "REST API Development",
        "WebSockets",
        "Authentication & Authorization",
        "Full-Stack Development",
      ],
    },
    {
      title: "AI & LLM Engineering",
      description:
        "Creating intelligent applications, AI agents, and LLM-powered solutions.",
      icon: FaMicrochip,
      items: [
        "OpenAI API",
        "Anthropic Claude API",
        "Google Gemini API",
        "AI Application Development",
        "AI Agent Development",
        "LangChain",
        "LangGraph",
        "Retrieval-Augmented Generation (RAG)",
        "Vector Databases",
        "Qdrant",
        "Prompt Engineering",
        "LLM Integration",
        "Multi-Agent Systems",
        "AI Chatbot Development",
        "AI-Powered SaaS Development",
      ],
    },
    {
      title: "Database & Data",
      description:
        "Structuring, managing, and optimizing data for dependable applications.",
      icon: FaDatabase,
      items: ["PostgreSQL", "MongoDB", "Redis", "Database Design"],
    },
    {
      title: "Cloud & DevOps",
      description:
        "Deploying, scaling, and maintaining applications with modern cloud and DevOps practices.",
      icon: FaCloud,
      items: [
        "Docker",
        "AWS",
        "Google Cloud Platform (GCP)",
        "DigitalOcean",
        "CI/CD",
        "Cloud Deployment",
        "Git & GitHub",
        "System Architecture",
      ],
    },
    {
      title: "Integrations & Automation",
      description:
        "Connecting platforms and automating workflows to reduce manual work.",
      icon: FaLink,
      items: [
        "API Integration",
        "Stripe Integration",
        "AI Workflow Automation",
        "Model Context Protocol (MCP)",
        "n8n Automation",
      ],
    },
  ];

  const activeCategory = skillCategories[selectedCategory];
  const ActiveIcon = activeCategory.icon;

  return (
    <section
      id="skills"
      className="w-full bg-[#101827] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="mb-8 text-xl font-bold text-white md:text-2xl">
          Technical Expertise
        </h2>

        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-[minmax(260px,0.36fr)_minmax(0,1fr)] lg:gap-7">
          {/* CATEGORY NAVIGATION */}
          <div className="flex flex-col gap-3">
            {skillCategories.map((category, index) => {
              const CategoryIcon = category.icon;
              const isActive = selectedCategory === index;

              return (
                <button
                  key={category.title}
                  type="button"
                  onClick={() => setSelectedCategory(index)}
                  aria-pressed={isActive}
                  className={`group relative flex min-h-[70px] w-full items-center gap-4 rounded-xl border px-5 py-4 text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#60A5FA] focus:ring-offset-2 focus:ring-offset-[#101827] sm:min-h-[72px] ${
                    isActive
                      ? "border-[#3B82F6] bg-gradient-to-r from-[#173B70] to-[#1C3558] text-white shadow-[0_0_18px_rgba(37,99,235,0.18)]"
                      : "border-[#263B59] bg-[#1C2A40] text-white hover:border-[#3B82F6]/60 hover:bg-[#223652]"
                  }`}
                  aria-label={`Show ${category.title} skills`}
                >
                  <CategoryIcon
                    className={`shrink-0 text-xl transition-colors ${
                      isActive ? "text-[#60A5FA]" : "text-[#DCE7F7]"
                    }`}
                  />
                  <span className="flex-1 text-sm font-semibold sm:text-base">
                    {category.title}
                  </span>
                  <FaChevronRight
                    className={`shrink-0 text-sm transition-transform duration-300 ${
                      isActive
                        ? "translate-x-0.5 text-[#60A5FA]"
                        : "text-[#DCE7F7] group-hover:translate-x-1"
                    }`}
                  />

                  {/* POINTER CONNECTING THE SELECTED CATEGORY TO THE PANEL */}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute -right-[15px] top-1/2 z-20 hidden h-0 w-0 -translate-y-1/2 border-y-[12px] border-y-transparent border-l-[15px] border-l-[#3B82F6] lg:block"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* SELECTED CATEGORY DETAILS — ALWAYS OPEN, NO MODAL */}
          <div
            className="min-h-[360px] rounded-2xl border border-[#2B4566] bg-gradient-to-br from-[#17263B] to-[#132137] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)] sm:p-8 lg:min-h-full"
            aria-live="polite"
          >
            <div className="flex items-center gap-4">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-[#173B70] text-2xl text-[#60A5FA]">
                <ActiveIcon />
              </div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                {activeCategory.title}
              </h3>
            </div>

            <p className="mt-4 text-base leading-relaxed text-[#B8C4D8] sm:text-lg">
              {activeCategory.description}
            </p>

            <div className="my-6 border-t border-[#2B4566]" />

            <div className="flex flex-wrap gap-3">
              {activeCategory.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#2563EB]/20 bg-[#173B70]/70 px-4 py-2 text-sm font-semibold text-[#60A5FA] transition duration-200 hover:border-[#60A5FA]/60 hover:bg-[#1D477F] hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// EXPERIENC// EXPERIENCE
const experienceDetails = [
  {
    role: "IT Lead",
    company: "MezAgent",
    period: "Jan 2025 – Present",
    points: [
      "Lead technical direction and delivery for an AI-powered CRM and professional referral platform.",
      "Oversee backend architecture, AI agent workflows, retrieval-augmented generation, and third-party integrations.",
      "Technologies: Python, FastAPI, LangGraph, Qdrant, React, Stripe, PostgreSQL.",
    ],
  },
  {
    role: "Co-Founder & CTO",
    company: "Atsol Inc.",
    period: "Dec 2024 – Present",
    points: [
      "Co-founded the company and lead its technical strategy, software architecture, and product engineering.",
      "Guide engineering teams in delivering AI solutions, SaaS platforms, and custom software products.",
      "Technologies: Python, Django, FastAPI, React, Next.js, Node.js, PostgreSQL, AWS.",
    ],
  },
  {
    role: "Senior Backend Developer",
    company: "xiQ, Inc.",
    period: "2022 – Jan 2025",
    points: [
      "Developed and maintained backend services, APIs, and integrations for production applications.",
      "Contributed to backend architecture, database-driven features, and application reliability.",
      "Technologies: Python, Django, REST APIs, SQL databases, backend integrations.",
    ],
  },
  {
    role: "Senior Full Stack Software Engineer",
    company: "Alchemative",
    period: "2021 – 2022",
    points: [
      "Built and enhanced full-stack web applications, delivering frontend experiences alongside backend functionality.",
      "Worked on e-commerce solutions, API integrations, database operations, and end-to-end feature delivery.",
      "Technologies: JavaScript, Python, Django, React, REST APIs, SQL databases.",
    ],
  },
  {
    role: "Full Stack Software Engineer",
    company: "Alchemative",
    period: "2020 – 2021",
    points: [
      "Developed frontend and backend features for web applications and e-commerce platforms.",
      "Implemented application functionality, connected APIs, and supported database-driven workflows.",
      "Technologies: JavaScript, Python, Django, HTML, CSS, REST APIs, SQL databases.",
    ],
  },
  {
    role: "Python Django Developer",
    company: "YumyApps (Pvt) Ltd.",
    period: "2019 – 2020",
    points: [
      "Developed server-side application features and backend functionality using Python and Django.",
      "Worked on database integration, API development, and application maintenance.",
      "Technologies: Python, Django, MySQL, REST APIs.",
    ],
  },
  {
    role: "Python Django Developer",
    company: "W Group",
    period: "2018 – 2019",
    points: [
      "Built backend features and server-side functionality for database-driven web applications.",
      "Supported API integrations, data handling, and ongoing application improvements.",
      "Technologies: Python, Django, SQL databases, REST APIs.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className={wrap}>
      <Heading tag="Experience">
        My professional{" "}
        <span className="text-[#1a5cff]">journey</span>
      </Heading>

      <div className="relative space-y-6 border-l-2 border-[#dfe7fd] pl-8">
        {experienceDetails.map((e, i) => (
          <div
            key={`${e.company}-${e.role}-${i}`}
            className="relative rounded-3xl bg-white p-7 shadow-[0_6px_24px_rgba(20,30,80,0.06)]"
          >
            <span className="absolute -left-[2.65rem] top-9 h-4 w-4 rounded-full border-4 border-[#f1f3fb] bg-[#1a5cff]" />

            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl font-bold">{e.role}</h3>

              <span className="rounded-full bg-[#dfe7fd] px-4 py-1 text-sm font-semibold">
                {e.period}
              </span>
            </div>

            <p className="mt-1 font-semibold text-[#1a5cff]">
              {e.company}
            </p>

            <ul className="mt-4 list-disc space-y-1.5 pl-5 text-[#4b5468]">
              {e.points.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CERTIFICATIONS */}
      <div id="certifications" className="mt-20">
        <Heading tag="Certifications">
          Learning &amp;{" "}
          <span className="text-[#1a5cff]">credentials</span>
        </Heading>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c, i) => (
            <a
              key={i}
              href={c.link}
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl bg-white p-6 shadow-[0_6px_24px_rgba(20,30,80,0.06)] transition hover:-translate-y-1"
            >
              <FaCertificate className="text-3xl text-[#1a5cff]" />

              <h3 className="mt-4 font-bold">{c.name}</h3>

              <p className="mt-1 text-sm text-[#4b5468]">
                {c.issuer} &middot; {c.year}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="flex items-center justify-between px-6 py-8 text-sm text-[#4b5468] lg:px-12">
      <p>
        &copy; {new Date().getFullYear()} Sameed Awais. All rights reserved.
      </p>

      <a
        href="#home"
        aria-label="Back to top"
        className="grid h-11 w-11 place-items-center rounded-full bg-[#0f5cff] text-white"
      >
        <FaArrowUp />
      </a>
    </footer>
  );
}