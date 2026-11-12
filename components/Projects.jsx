 "use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import Heading from "./Heading";

/*
 * Self-contained Projects section.
 * Images are intentionally left empty until the matching project screenshots are supplied.
 * Add an image later by setting image: "/projects/your-image.png".
 */

const projects = [
  {
    title: "MezAgent",
    category: ["AI", "SaaS"],
    description: "AI-powered B2B SaaS platform combining intelligent CRM, automated client outreach, real-time messaging, and AI-driven engagement tools to help financial advisors, influencers, and agency teams streamline client relationships and scale business interactions.",
    tech: ["Python", "Django", "React", "PostgreSQL", "LangGraph", "LiteLLM", "GPT-4o", "Qdrant", "Celery", "AWS", "Stripe", "Material UI"],
    highlights: [
      "Unified CRM, AI engagement, and real-time communication into one platform.",
      "Automated personalized outreach and intelligent lead management.",
      "Improved client engagement through AI-driven insights and real-time collaboration."
    ],
    image: "",
    live: "https://mezagent.com/"
  },
  {
    title: "Advanced Situational Awareness System",
    category: ["AI", "GovTech"],
    description: "A platform for law enforcement and security agencies in Pakistan that consolidates intelligence datasets, sensor inputs, historical incidents, and operational information for real-time threat monitoring, predictive analysis, and data-driven command decision support.",
    tech: ["Python", "Django", "Django REST Framework", "PostgreSQL", "GIS", "AI", "Probability Modeling", "Predictive Analytics"],
    highlights: [
      "Centralized intelligence and operational data.",
      "AI threat analysis and incident probability modeling.",
      "Predictive response analysis and interactive intelligence visualization."
    ],
    image: ""
  },
  {
    title: "WellmeAI – AI-Powered Health Platform",
    category: ["AI", "HealthTech"],
    description: "An AI mental health companion developed in collaboration with licensed therapist Christina Whitney. It provides personalized emotional support through voice and text, using CBT, EFT, and mindfulness to extend therapeutic guidance beyond traditional sessions.",
    tech: ["Python", "FastAPI", "LangChain", "OpenAI API", "React Native", "Deepgram", "ElevenLabs", "Streamlit"],
    highlights: [
      "Provided 24/7 personalized support.",
      "Scaled therapist expertise through AI voice and text experiences.",
      "Improved continuity of care through context-aware guidance and safety interventions."
    ],
    image: "",
    live: "https://www.wellmeai.com/"
  },
  {
    title: "Armor Wallet",
    category: ["AI", "FinTech"],
    description: "An AI-powered Solana crypto wallet using conversational AI. Users can manage wallets, execute trades, swap tokens, stake assets, and automate trading strategies through text and voice interactions.",
    tech: ["Python", "Django", "React", "FastAPI", "LangChain", "LangGraph", "OpenRouter", "Qwen", "Mistral", "PromptOwl"],
    highlights: [
      "Enabled conversational crypto trading and wallet management.",
      "Delivered 5x faster trading operations through automation.",
      "Simplified advanced trading strategies without requiring technical expertise."
    ],
    image: "",
    live: "https://www.rootdata.com/projects/detail/Armor%20Wallet?k=MTQ3NDg%3D"
  },
  {
    title: "Aurora Analytics",
    category: ["AI", "SaaS"],
    description: "An AI market research platform that helps entrepreneurs and investors evaluate opportunities, analyze competitors, and understand market potential. It automates market research, TAM/SAM calculations, and competitive intelligence using multiple AI models and verified sources.",
    tech: ["Python", "Django", "LangChain", "OpenAI", "Anthropic", "Perplexity", "Streamlit", "Jupyter Notebook", "LangSmith"],
    highlights: [
      "Reduced research timelines from 1–2 weeks to hours.",
      "Enabled 42x faster report generation.",
      "Delivered evidence-backed market intelligence and competitive analysis."
    ],
    image: ""
  },
  {
    title: "Comverse by Ginkgo",
    category: ["SaaS", "E-commerce"],
    description: "An enterprise e-commerce and multi-channel platform that centralizes products, inventory, orders, vendors, payments, and logistics. It connects online stores, ERP/POS systems, marketplaces, and courier services through a unified ecosystem.",
    tech: ["Python", "Django", "Django REST Framework", "Angular", "MySQL", "Redis", "AWS", "Docker", "REST APIs"],
    highlights: [
      "Unified multichannel commerce and central order management.",
      "Automated inventory, product, and pricing synchronization.",
      "Connected ERP/POS, courier, and payment platforms."
    ],
    image: "",
    live: "https://comverseglobal.com/"
  },
  {
    title: "Dropesy",
    category: ["SaaS", "E-commerce"],
    description: "A Shopify dropshipping middleware platform connecting vendors and merchants with centralized product and order management. It synchronizes products, inventory, pricing, and orders across Shopify stores.",
    tech: ["Python", "Django", "Django REST Framework", "Angular", "MySQL", "Shopify API", "Docker"],
    highlights: [
      "Connected vendors and merchants through a shared platform.",
      "Automated product and inventory synchronization.",
      "Streamlined order processing and vendor–merchant workflows."
    ],
    image: "",
    live: "https://www.dropesy.com/"
  },
  {
    title: "Elewa",
    category: ["AI", "SaaS", "Marketplace"],
    description: "A creative talent and hiring marketplace connecting film professionals, production crews, vendors, freelancers, and businesses. The platform supports talent discovery, opportunities, applications, communication, and creative project engagements.",
    tech: ["Python", "Django", "React", "ChatGPT API", "REST APIs"],
    highlights: [
      "Connected creative professionals and businesses.",
      "Streamlined talent discovery, job posting, and hiring.",
      "Integrated AI assistance, real-time communication, and escrow transactions."
    ],
    image: "",
    live: "https://elewa.ke/"
  },
  {
    title: "Hire A Fractional",
    category: ["SaaS", "Recruitment"],
    description: "A hiring platform connecting businesses with experienced fractional technology leaders. It includes professional profiles, candidate matching, application workflows, and administrative dashboards.",
    tech: ["Python", "Django", "React", "MySQL", "Stripe", "AWS", "Docker"],
    highlights: [
      "Connected businesses with fractional technology leaders.",
      "Streamlined applications and profile matching.",
      "Supported secure payments and scalable cloud operations."
    ],
    image: "",
    live: "https://hireafractional.com/"
  },
  {
    title: "Leopards Courier Shopify App",
    category: ["SaaS", "Logistics", "E-commerce"],
    description: "A Shopify embedded application integrating Leopards Courier directly into Shopify stores. It enables merchants to generate shipping consignments, manage fulfillment, access courier reports, and track shipments from the Shopify admin.",
    tech: ["C#", ".NET Core", "ASP.NET Core", "Entity Framework", "MySQL", "ShopifySharp", "Shopify API", "Hangfire", "Docker", "AWS"],
    highlights: [
      "Integrated Leopards Courier into Shopify.",
      "Automated consignment number generation and shipment workflows.",
      "Simplified fulfillment reporting and order tracking."
    ],
    image: "",
    live: "https://www.leopardscourier.com/"
  },
  {
    title: "Magna Foodservice",
    category: ["SaaS", "Enterprise Software"],
    description: "A corporate digital platform for a UK foodservice company. It provides a centralized online presence for product catalogs, company information, careers, kitchen stories, and client content through a flexible CMS.",
    tech: ["C#", "ASP.NET Core", ".NET Core", "Razor Pages", "Orchard Core CMS", "Docker", "Microsoft Azure"],
    highlights: [
      "Centralized company information and product catalog.",
      "Enabled administrators to manage content independently.",
      "Streamlined careers, product publishing, and editorial workflows."
    ],
    image: "",
    live: "https://www.magnafoodservice.co.uk/"
  },
  {
    title: "Moufit",
    category: ["SaaS", "HealthTech"],
    description: "A subscription fitness platform connecting members with 50+ gyms across Dubai and Sharjah. It supports membership management, subscription billing, authentication, gym visit tracking, location check-ins, and flexible memberships.",
    tech: ["Python", "Django", "Django REST Framework", "Angular", "React", "AWS"],
    highlights: [
      "Connected members to 50+ gyms.",
      "Centralized subscription and membership management.",
      "Streamlined gym access and visit tracking."
    ],
    image: "",
    live: "https://www.mou.fit/"
  },
  {
    title: "PCB Official Merchandise Store",
    category: ["E-commerce"],
    description: "An e-commerce platform for the Pakistan Cricket Board, enabling fans to explore and purchase official merchandise online. It includes a product catalog, customer accounts, carts, secure payments, inventory management, campaigns, and responsive shopping experiences.",
    tech: ["Python", "Django", "React", "Angular", "MySQL", "Payment Gateway Integration"],
    highlights: [
      "Centralized the online merchandise shopping experience.",
      "Enabled secure online purchases and payments.",
      "Streamlined product variants, inventory, and order management."
    ],
    image: "",
    live: "https://shop.pcb.com.pk/"
  },
  {
    title: "Peerlogic",
    category: ["AI", "HealthTech", "SaaS"],
    description: "An AI healthcare communication and call intelligence platform for dental and veterinary practices. It combines conversational AI, voice processing, call analytics, automated patient communication, appointment workflows, and intelligent insights to improve engagement and front-office operations.",
    tech: ["Python", "Django", "Django REST Framework", "PostgreSQL", "LLMs", "LLaMA", "Amazon Bedrock", "RabbitMQ", "Celery", "Redis", "Docker", "Google Cloud Platform"],
    highlights: [
      "Automated healthcare communication and follow-up.",
      "Enabled AI call analysis and conversational intelligence.",
      "Provided actionable call analytics and appointment insights."
    ],
    image: "",
    live: "https://www.peerlogic.com/"
  },
  {
    title: "THREE Insurance",
    category: ["InsurTech", "FinTech", "SaaS"],
    description: "A digital commercial insurance platform backed by Berkshire Hathaway, designed to simplify business insurance for small companies. It combines online quoting, industry-specific coverage, eligibility assessment, policy management, and dedicated agent workflows into a unified digital insurance experience.",
    tech: ["JavaScript", "TypeScript", "React", "Next.js", "Redux", "Material UI", "Python", "Django", "Node.js", "NestJS"],
    highlights: [
      "Simplified online commercial insurance quoting and purchasing workflows.",
      "Enabled industry-specific coverage and automated eligibility assessment.",
      "Unified customer self-service, agent quoting, and policy management."
    ],
    image: "",
    live: "https://threeinsurance.com/"
  },
  {
    title: "U.S. Property Tax Collection System",
    category: ["GovTech", "FinTech"],
    description: "A centralized property tax collection and administration platform designed for U.S. tax offices. It enables staff to manage property tax records, review outstanding balances, process payments, generate receipts, access historical records, and manage taxpayer information through a secure, data-driven system.",
    tech: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Pandas", "NumPy", "AWS"],
    highlights: [
      "Centralized property tax records and collection workflows.",
      "Optimized large-scale tax data processing and reporting queries.",
      "Streamlined digital payments, receipts, notices, and administration."
    ],
    image: "",
    live: "https://securetax.us/"
  },
];

const allCategories = [
  ...new Set(projects.flatMap((project) => project.category))
].sort((a, b) => a.localeCompare(b));

function ProjectImage({ project, className = "" }) {
  return project.image ? (
    <img
      src={project.image}
      alt={`${project.title} project preview`}
      className={`${className} h-full w-full object-contain`}
    />
  ) : (
    <div className={`${className} flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#0a1432] via-[#142b55] to-[#1a5cff] p-6 text-center`}>
      <span className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#9fc2ff]">Project preview</span>
      <span className="max-w-md text-xl font-bold text-white sm:text-2xl">{project.title}</span>
      <span className="mt-3 text-xs text-blue-100/80">Image coming soon</span>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [openProject, setOpenProject] = useState(null);
  const categoryRailRef = useRef(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category.includes(activeFilter));
  }, [activeFilter]);

  useEffect(() => {
    if (!openProject) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpenProject(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openProject]);

  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
      <Heading tag="Projects">
        Selected <span className="text-[#1a5cff]">work</span>
      </Heading>

      <p className="mb-7 max-w-2xl text-sm leading-relaxed text-[#64748b] sm:text-base">
        A selection of digital products, platforms, and software systems across multiple industries.
      </p>

      <div className="mb-9 flex items-center gap-2">
        <button
          type="button"
          onClick={() => categoryRailRef.current?.scrollBy({ left: -260, behavior: "smooth" })}
          aria-label="Scroll categories left"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#d6deeb] bg-white text-lg font-bold text-[#1a5cff] shadow-sm transition hover:border-[#1a5cff] hover:bg-[#eaf0ff] focus:outline-none focus:ring-2 focus:ring-[#1a5cff]"
        >
          ‹
        </button>

        <div
          ref={categoryRailRef}
          className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto scroll-smooth py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {["All", ...allCategories].map((category) => {
            const isActive = activeFilter === category;
            const count = category === "All"
              ? projects.length
              : projects.filter((project) => project.category.includes(category)).length;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                aria-pressed={isActive}
                className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#1a5cff] focus:ring-offset-2 ${
                  isActive
                    ? "border-[#1a5cff] bg-[#1a5cff] text-white shadow-sm"
                    : "border-[#d6deeb] bg-white text-[#526078] hover:border-[#1a5cff] hover:text-[#1a5cff]"
                }`}
              >
                {category} <span className={isActive ? "text-blue-100" : "text-[#94a3b8]"}>({count})</span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => categoryRailRef.current?.scrollBy({ left: 260, behavior: "smooth" })}
          aria-label="Scroll categories right"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#d6deeb] bg-white text-lg font-bold text-[#1a5cff] shadow-sm transition hover:border-[#1a5cff] hover:bg-[#eaf0ff] focus:outline-none focus:ring-2 focus:ring-[#1a5cff]"
        >
          ›
        </button>
      </div>

      <div className="mb-5 flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-[#64748b]">
          Showing <span className="font-bold text-[#101827]">{filteredProjects.length}</span> {filteredProjects.length === 1 ? "project" : "projects"}
        </p>
        {activeFilter !== "All" && (
          <button type="button" onClick={() => setActiveFilter("All")} className="text-sm font-semibold text-[#1a5cff] hover:underline">
            Clear filter
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProjects.map((project) => (
          <article
            key={project.title}
            className="group flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-[#e8edf5] bg-white shadow-[0_6px_24px_rgba(20,30,80,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(20,30,80,0.12)]"
          >
            <button
              type="button"
              onClick={() => setOpenProject(project)}
              aria-label={`View ${project.title} project details`}
              className="block w-full text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1a5cff]"
            >
              <div className="aspect-video w-full overflow-hidden bg-[#0a1432]">
                <ProjectImage project={project} className="transition duration-500 group-hover:scale-[1.02]" />
              </div>
            </button>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="flex flex-wrap gap-1.5">
                {project.category.slice(0, 2).map((category) => (
                  <span key={category} className="rounded-full bg-[#eaf0ff] px-2.5 py-1 text-[10px] font-bold text-[#214b9b]">
                    {category}
                  </span>
                ))}
                {project.category.length > 2 && (
                  <span className="rounded-full bg-[#f1f5f9] px-2.5 py-1 text-[10px] font-semibold text-[#64748b]">
                    +{project.category.length - 2}
                  </span>
                )}
              </div>

              <h3 className="mt-3 min-h-[3.5rem] text-lg font-bold leading-snug text-[#101827] sm:text-xl">
                {project.title}
              </h3>

              <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[#526078]">
                {project.description}
              </p>

              <div className="mt-5 flex h-10 w-full items-center justify-between gap-2">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className="inline-flex h-9 min-w-0 flex-1 items-center justify-center gap-1 whitespace-nowrap leading-none rounded-lg bg-gradient-to-br from-[#0a1432] via-[#142b55] to-[#1a5cff] px-2 text-[11px] font-semibold text-white transition duration-200 hover:-translate-y-0.5 sm:px-2.5 sm:text-xs"
                  >
                    Visit
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setOpenProject(project)}
                    className="inline-flex h-9 min-w-0 flex-1 items-center justify-center gap-1 whitespace-nowrap leading-none rounded-lg bg-gradient-to-br from-[#0a1432] via-[#142b55] to-[#1a5cff] px-2 text-[11px] font-semibold text-white transition duration-200 hover:-translate-y-0.5 sm:px-2.5 sm:text-xs"
                  >
                    Visit
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setOpenProject(project)}
                  className="inline-flex h-10 shrink-0 items-center rounded-lg px-2 text-sm font-semibold text-[#0f5cff] transition hover:bg-[#eef4ff] hover:underline sm:px-3"
                >
                  See more
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {openProject && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-[#071126]/85 p-3 backdrop-blur-sm sm:p-5"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpenProject(null);
          }}
          role="presentation"
        >
          <div
            className="relative flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label={`${openProject.title} project details`}
          >
            <button
              type="button"
              aria-label="Close project details"
              onClick={() => setOpenProject(null)}
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/95 text-[#101827] shadow-lg transition hover:bg-[#eaf0ff]"
            >
              <FaTimes />
            </button>

            <div className="overflow-y-auto p-5 sm:p-6 lg:p-7">
              <div className="flex flex-wrap gap-2">
                {openProject.category.map((category) => (
                  <span key={category} className="rounded-full bg-[#eaf0ff] px-3 py-1 text-xs font-semibold text-[#214b9b]">
                    {category}
                  </span>
                ))}
              </div>

              <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-[#101827] sm:text-3xl">
                {openProject.title}
              </h3>

              <h4 className="mt-6 font-bold text-[#101827]">Project overview</h4>
              <p className="mt-2 whitespace-pre-line text-sm leading-7 text-[#526078] sm:text-base">
                {openProject.description}
              </p>

              <h4 className="mt-7 font-bold text-[#101827]">Key results</h4>
              <ul className="mt-3 space-y-3">
                {openProject.highlights.map((highlight, index) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-[#526078] sm:text-base">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#eaf0ff] text-xs font-bold text-[#1a5cff]">
                      {index + 1}
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {openProject.tech.length > 0 ? (
                <>
                  <h4 className="mt-7 font-bold text-[#101827]">Technologies used</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {openProject.tech.map((technology) => (
                      <span key={technology} className="rounded-lg border border-[#dce5f4] bg-[#f7f9fc] px-3 py-2 text-xs font-medium text-[#334155] sm:text-sm">
                        {technology}
                      </span>
                    ))}
                  </div>
                </>
              ) : (
                <p className="mt-7 text-sm italic text-[#94a3b8]">Technology details were not provided.</p>
              )}


            </div>
          </div>
        </div>
      )}
    </section>
  );
}
