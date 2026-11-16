"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import Navbar from "../../../components/Navbar";
import { projects, slugifyProject } from "../../../components/Projects";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  const project = projects.find((item) => slugifyProject(item.title) === slug);

  if (!project) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#f1f3fb] px-6 text-center text-[#0b1230]">
        <div>
          <h1 className="text-3xl font-bold">Project not found</h1>
          <a href="/projects" className="mt-5 inline-flex font-semibold text-[#1a5cff] hover:underline">Back to all projects</a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-[#0b1230]">
      <section className="relative isolate overflow-hidden bg-[#0a1432] text-white">
        <Navbar />
        <div className="relative z-10 mx-auto flex min-h-[460px] max-w-6xl flex-col justify-center px-6 pb-16 pt-28 sm:px-10 lg:min-h-[454px] lg:pt-24">
          <a href="/projects" className="mb-7 w-fit text-xs font-medium text-blue-200 transition hover:text-white">
            All projects <span className="px-1 text-blue-400">›</span> {project.title}
          </a>
          <div className="mb-5 flex flex-wrap gap-2">
            {project.category.map((category) => (
              <span key={category} className="inline-flex items-center gap-2 rounded-full border border-[#1a5cff]/40 bg-[#1a5cff]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8eb3ff]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1a5cff]" />{category}
              </span>
            ))}
          </div>
          <h1 className="max-w-5xl text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            {project.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-16 sm:px-8 lg:pb-24">
        <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-[#e5eaf2] bg-[#0a1432] shadow-[0_16px_48px_rgba(10,20,50,0.16)]">
          {project.image ? (
            <div className="relative aspect-[1.9] w-full">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                priority
                sizes="(min-width: 1400px) 1400px, 100vw"
                className="object-cover object-top"
              />
            </div>
          ) : (
            <div className="relative flex aspect-[1.9] w-full items-end overflow-hidden bg-[linear-gradient(125deg,#dfe7fd_0%,#8eaeff_38%,#1a5cff_70%,#0a1432_100%)] p-6 sm:p-10">
              <div className="absolute inset-0 bg-gradient-to-t from-[#06172b]/90 via-transparent to-transparent" />
              <div className="relative z-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a9c4ff]">Project preview</p>
                <h2 className="mt-2 text-2xl font-bold text-white sm:text-4xl">{project.title}</h2>
              </div>
            </div>
          )}
        </div>

        <div className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-20">
          <aside>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1a5cff]/20 bg-[#eaf0ff] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1a5cff]">
              Project details
            </span>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8190a8]">Project</dt>
                <dd className="mt-1 text-sm font-semibold">{project.title}</dd>
              </div>
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8190a8]">Industry</dt>
                <dd className="mt-1 text-sm font-semibold">{project.category.join(", ")}</dd>
              </div>
              {project.live && (
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8190a8]">Website</dt>
                  <dd className="mt-1 break-all text-sm font-semibold text-[#1a5cff]">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover:underline">Visit live project</a>
                  </dd>
                </div>
              )}
            </dl>
            <h3 className="mt-8 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8190a8]">Tech stack</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((technology) => (
                <span key={technology} className="rounded-full border border-[#dce3ed] bg-white px-2.5 py-1 text-[10px] font-medium text-[#334155]">{technology}</span>
              ))}
            </div>
          </aside>

          <div>
            <h2 className="text-2xl font-bold">Project overview</h2>
            <p className="mt-3 text-sm leading-7 text-[#526078] sm:text-base">{project.description}</p>
            <h2 className="mt-9 text-2xl font-bold">Key contributions</h2>
            <ul className="mt-4 space-y-4">
              {project.highlights.map((highlight, index) => (
                <li key={highlight} className="flex gap-3 text-sm leading-7 text-[#526078] sm:text-base">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#eaf0ff] text-xs font-bold text-[#1a5cff]">{index + 1}</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-[#e5eaf2] py-6">
          <a href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-[#0b1230] transition hover:text-[#1a5cff]">
            <FiArrowLeft /> All projects
          </a>
        </div>
      </section>
    </main>
  );
}
