"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaCertificate,
  FaTrophy,
  FaArrowUp,
} from "react-icons/fa";
import Heading from "./Heading";
import { certifications } from "../data/portfolio";

const wrap = "mx-auto max-w-[1400px] px-5 py-20 lg:py-28";

export function About({ showPortrait = false, showStats = true }) {
  return (
    <section id="about" className={wrap}>
      <div className={`grid items-start gap-10 lg:gap-14 ${showPortrait ? "lg:grid-cols-[minmax(260px,0.72fr)_minmax(0,1.28fr)]" : "lg:grid-cols-[minmax(0,1.3fr)_minmax(300px,0.7fr)]"}`}>
        {showPortrait && (
          <div className="relative mx-auto h-[420px] w-full max-w-[360px] overflow-hidden rounded-[2rem] bg-[#0a1432] shadow-[0_18px_45px_rgba(10,20,50,0.16)] sm:h-[500px] lg:sticky lg:top-28 lg:mx-0">
            <Image
              src="/sameed.png"
              alt="Sameed Awais"
              fill
              priority
              sizes="(min-width: 1024px) 360px, 100vw"
              className="object-contain object-bottom"
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a1432]/35 to-transparent" />
          </div>
        )}

        <div>
          <Heading tag="About me">
            Building technology that{" "}
            <span className="text-[#1a5cff]">works</span>
          </Heading>

          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-[#4b5468] sm:text-lg">
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
        </div>

        {!showPortrait && <aside className="relative isolate overflow-hidden rounded-3xl bg-[#0a1432] p-7 mt-12 text-white shadow-[0_14px_38px_rgba(10,20,50,0.14)] sm:p-8">
          <div aria-hidden="true" className="absolute -right-14 -top-16 -z-10 h-48 w-48 rounded-full border-[24px] border-[#1a5cff]/10" />
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8eb3ff]">What I bring</p>
          <h3 className="mt-3 text-2xl font-bold leading-snug">Thoughtful engineering, end to end.</h3>
          <ul className="mt-6 space-y-4">
            {[
              "Scalable software and product development",
              "Practical AI and machine learning solutions",
              "System architecture and technical leadership",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#c5d2e8]">
                <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#4d83ff]" />
                {item}
              </li>
            ))}
          </ul>
        </aside>}
      </div>

      {showPortrait && (
        <aside className="relative isolate mt-10 overflow-hidden rounded-3xl bg-[#0a1432] p-7 text-white shadow-[0_14px_38px_rgba(10,20,50,0.14)] sm:p-8">
          <div aria-hidden="true" className="absolute -right-14 -top-16 -z-10 h-48 w-48 rounded-full border-[24px] border-[#1a5cff]/10" />
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8eb3ff]">What I bring</p>
          <h3 className="mt-3 text-2xl font-bold leading-snug">Thoughtful engineering, end to end.</h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              "Scalable software and product development",
              "Practical AI and machine learning solutions",
              "System architecture and technical leadership",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#c5d2e8]">
                <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#4d83ff]" />
                {item}
              </li>
            ))}
          </ul>
        </aside>
      )}

      {showStats && (
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { value: "10+", label: "Years of experience" },
            { value: "70+", label: "Projects delivered" },
            { value: "100+", label: "Happy clients" },
            { value: "20+", label: "Teams led" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-[#dfe7fd] bg-white p-5 shadow-[0_6px_24px_rgba(20,30,80,0.06)]">
              <div className="text-3xl font-extrabold text-[#1a5cff]">{s.value}</div>
              <div className="mt-1 text-sm font-medium text-[#4b5468]">{s.label}</div>
            </div>
          ))}
        </div>
      )}
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
      items: ["React.js", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      description:
        "Developing secure, scalable, and reliable server-side applications and APIs.",
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
      items: ["PostgreSQL", "MongoDB", "Redis", "Database Design"],
    },
    {
      title: "Cloud & DevOps",
      description:
        "Deploying, scaling, and maintaining applications with modern cloud and DevOps practices.",
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

  return (
    <section
      id="skills"
      className="w-full bg-[#f1f3fb] py-12 transition-colors duration-300 dark:bg-[#101827] sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1400px] px-5">
        <h2 className="mb-8 text-xl font-bold text-[#0b1230] md:text-2xl dark:text-white">
          Technical Expertise
        </h2>

        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-[minmax(240px,0.36fr)_minmax(0,1fr)] lg:gap-7">
          {/* CATEGORY NAVIGATION */}
          <div className="flex flex-col gap-2">
            {skillCategories.map((category, index) => {
              const isActive = selectedCategory === index;

              return (
                <button
                  key={category.title}
                  type="button"
                  onClick={() => setSelectedCategory(index)}
                  aria-pressed={isActive}
                  className={`group flex min-h-[52px] w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1a5cff] focus:ring-offset-2 focus:ring-offset-[#f1f3fb] dark:focus:ring-offset-[#101827] ${
                    isActive
                      ? "bg-white text-[#0b1230] shadow-[0_8px_22px_rgba(20,40,90,0.10)] ring-1 ring-inset ring-[#1a5cff]/30 dark:bg-[#1C2A40] dark:text-white dark:shadow-[0_8px_22px_rgba(0,0,0,0.14)] dark:ring-[#3B82F6]/35"
                      : "text-[#526078] hover:bg-white/70 hover:text-[#0b1230] dark:text-[#B8C4D8] dark:hover:bg-[#17263B] dark:hover:text-white"
                  }`}
                  aria-label={`Show ${category.title} skills`}
                >
                  <span className="flex-1 text-sm font-semibold sm:text-base">
                    {category.title}
                  </span>
                  {isActive && (
                    <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-[#1a5cff] shadow-[0_0_12px_rgba(26,92,255,0.35)] dark:bg-[#60A5FA] dark:shadow-[0_0_12px_rgba(96,165,250,0.5)]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* SELECTED CATEGORY DETAILS — ALWAYS OPEN, NO MODAL */}
          <div
            className="flex h-[560px] flex-col overflow-hidden rounded-3xl border border-[#dfe7fd] bg-gradient-to-br from-white via-white to-[#edf3ff] p-7 shadow-[0_12px_34px_rgba(20,40,90,0.08)] transition-colors duration-300 sm:h-[480px] sm:p-10 lg:h-[352px] dark:border-[#2B4566] dark:from-[#17263B] dark:via-[#15243A] dark:to-[#101D31] dark:shadow-[0_12px_34px_rgba(0,0,0,0.14)]"
            aria-live="polite"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1a5cff] dark:text-[#60A5FA]">
              Category · {String(selectedCategory + 1).padStart(2, "0")} / {String(skillCategories.length).padStart(2, "0")}
            </p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#0b1230] sm:text-3xl dark:text-white">
              {activeCategory.title}
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#526078] sm:text-lg dark:text-[#B8C4D8]">
              {activeCategory.description}
            </p>
            <div className="mt-7 flex min-h-0 flex-1 flex-wrap content-start gap-2.5 overflow-y-auto pr-2">
              {activeCategory.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#d7e3ff] bg-[#eaf0ff] px-4 py-2 text-xs font-semibold text-[#164ed1] transition duration-200 hover:border-[#1a5cff] hover:bg-[#dfe7fd] hover:text-[#0b1230] sm:text-sm dark:border-[#2B4566] dark:bg-[#1C2A40] dark:text-[#DCE7F7] dark:hover:border-[#3B82F6] dark:hover:bg-[#173B70] dark:hover:text-white"
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

        <div className="grid gap-5">
          {certifications.map((c) => (
            <article
              key={c.name}
              className="relative isolate mx-auto w-full max-w-4xl overflow-hidden rounded-[28px] border border-[#dce7ff] bg-gradient-to-r from-white via-white to-[#edf3ff] p-6 shadow-[0_16px_44px_rgba(20,50,120,0.1)] sm:p-9"
            >
              <div aria-hidden="true" className="absolute -right-16 -top-20 -z-10 h-56 w-56 rounded-full border-[28px] border-[#1a5cff]/[0.04]" />
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#1a5cff] to-[#0a1432] text-2xl text-white shadow-[0_8px_20px_rgba(26,92,255,0.24)] sm:h-20 sm:w-20 sm:text-3xl">
                  <FaTrophy aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#eaf0ff] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#1a5cff]">Award</span>
                    <span className="text-sm font-semibold text-[#64748b]">{c.date}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-extrabold leading-snug text-[#0b1230] sm:text-2xl">{c.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#526078]">
                    Issued by <strong className="font-semibold text-[#263957]">{c.issuer}</strong>
                    <span className="mx-2 text-[#9aa8bc]">·</span>
                    Associated with <strong className="font-semibold text-[#263957]">{c.associatedWith}</strong>
                  </p>
                </div>
                <div className="hidden shrink-0 items-center gap-2 rounded-full border border-[#dce7ff] bg-white/80 px-4 py-2 text-xs font-semibold text-[#1a5cff] sm:inline-flex">
                  <FaCertificate aria-hidden="true" /> Recognition
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="flex items-center justify-between bg-[#f1f3fb] px-6 py-8 text-sm text-[#4b5468] lg:px-12">
      <p>
        &copy; {new Date().getFullYear()} Sameed Awais. All rights reserved.
      </p>

      <a
        href="/#home"
        aria-label="Back to top"
        className="grid h-11 w-11 place-items-center rounded-full bg-[#1a5cff] text-white"
      >
        <FaArrowUp />
      </a>
    </footer>
  );
}
