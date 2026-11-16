import { FaExternalLinkAlt } from "react-icons/fa";
import Heading from "./Heading";

/*
 * Self-contained Projects section.
 * Images are intentionally left empty until the matching project screenshots are supplied.
 * Add an image later by setting image: "/projects/your-image.png".
 */

export const projects = [
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

export const slugifyProject = (title) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function ProjectImage({ project, className = "" }) {
  return project.image ? (
    <img
      src={project.image}
      alt={`${project.title} project preview`}
      className={`${className} h-full w-full object-cover`}
    />
  ) : (
    <div aria-hidden="true" className={`${className} h-full w-full bg-[linear-gradient(125deg,#dfe7fd_0%,#8eaeff_38%,#1a5cff_70%,#0a1432_100%)]`} />
  );
}

export default function Projects({ showAll = false }) {
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className={`mx-auto ${showAll ? "max-w-7xl" : "max-w-5xl"} px-5 py-20 lg:py-28`}>
      <Heading tag="Projects">
        {showAll ? <>All <span className="text-[#1a5cff]">projects</span></> : <>Selected <span className="text-[#1a5cff]">work</span></>}
      </Heading>

      <p className="mb-9 max-w-2xl text-sm leading-relaxed text-[#64748b] sm:text-base">
        A selection of digital products, platforms, and software systems across multiple industries.
      </p>

      <div className={`grid grid-cols-1 items-stretch gap-7 sm:grid-cols-2 ${showAll ? "xl:grid-cols-3" : "xl:grid-cols-2"}`}>
        {displayedProjects.map((project) => (
          <article
            key={project.title}
            className="group flex h-full min-w-0 flex-col bg-transparent"
          >
            <div className="relative aspect-[1.62] w-full overflow-hidden rounded-[1.35rem] bg-[#0a1432] shadow-[0_8px_24px_rgba(10,20,50,0.12)]">
              <a
                href={`/projects/${slugifyProject(project.title)}`}
                aria-label={`View ${project.title} project details`}
                className="absolute inset-0 z-0 block w-full text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1a5cff]"
              >
                <ProjectImage project={project} className="transition duration-500 group-hover:scale-[1.035]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06172b]/95 via-[#06172b]/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8eb3ff] sm:text-xs">
                    {project.category.join(" / ")}
                  </p>
                  <h3 className="max-w-[88%] text-lg font-bold leading-snug sm:text-xl lg:text-2xl">
                    {project.title}
                  </h3>
                </div>
              </a>
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title}`}
                  className="absolute bottom-5 right-5 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/35 sm:bottom-6 sm:right-6"
                >
                    <FaExternalLinkAlt className="text-sm" />
                </a>
              ) : (
                <a
                  href={`/projects/${slugifyProject(project.title)}`}
                  aria-label={`View ${project.title} project details`}
                  className="absolute bottom-5 right-5 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/35 sm:bottom-6 sm:right-6"
                >
                  <FaExternalLinkAlt className="text-sm" />
                </a>
              )}
            </div>

            <div className="flex flex-1 flex-col pt-3 sm:pt-4">
              <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-[#526078] sm:text-[15px]">
                {project.description}
              </p>

              <p className="mt-3 text-[11px] font-medium leading-relaxed text-[#64748b] sm:text-xs">
                {project.tech.slice(0, 5).join(" · ")}
              </p>
            </div>
          </article>
        ))}
      </div>

      {!showAll && projects.length > 4 && (
        <div className="mt-10 flex justify-center">
          <a href="/projects" className="inline-flex items-center rounded-xl bg-[#0a1432] px-7 py-3.5 text-base font-semibold text-white shadow-[0_8px_24px_rgba(10,20,50,0.2)] transition hover:-translate-y-0.5 hover:bg-[#142b55]">
            See more projects
          </a>
        </div>
      )}

    </section>
  );
}
