
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { FaRegCommentDots } from "react-icons/fa";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <main className="min-h-screen bg-[#f1f3fb] p-2 lg:p-3">
      <section className="relative isolate flex min-h-[calc(100vh-1rem)] flex-col overflow-hidden rounded-[clamp(20px,2.2vw,36px)] bg-white text-[#0b1230] shadow-[0_10px_40px_rgba(20,30,80,0.12)] lg:block lg:h-[calc(100vh-1.5rem)] lg:min-h-[640px]">
        {/* Circle outline (sits under the navy panel, only the left arc shows) */}
        <div className="absolute left-[65.4%] top-[54.4%] z-0 hidden aspect-square w-[35.2%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#1a5cff] lg:block" />

        {/* Navy diagonal panel */}
        <div className="absolute inset-0 z-[1] hidden bg-[#0a1432] [clip-path:polygon(37.4%_0,100%_0,100%_100%,43%_100%,66.5%_54.7%)] lg:block" />

        <Navbar />

        {/* Left content */}
        <div
          id="home"
          className="relative z-[4] flex flex-col items-start px-5 pb-8 pt-4 lg:absolute lg:inset-y-0 lg:left-[6.3%] lg:w-[48%] lg:justify-center lg:p-0 lg:pt-[4.3%]"
        >
          <span className="inline-flex items-center gap-[.55em] rounded-full bg-[#dfe7fd] px-[1.1em] py-[.6em] text-[clamp(.78rem,1.04vw,1.15rem)] font-semibold leading-[1.4] lg:h-[2.63vw] lg:whitespace-nowrap lg:py-0">
            <i className="h-[.72em] w-[.72em] rounded-full bg-[#1a5cff]" />
            Software Engineer <b className="mx-[.35em] font-medium">|</b> AI/ML{" "}
            <b className="mx-[.35em] font-medium">|</b> Technical Leader
          </span>

          <h1 className="mt-[clamp(1.2rem,4.6vh,3rem)] leading-[1.08]">
            <span className="block w-fit text-[clamp(1.8rem,2.75vw,2.9rem)] font-semibold tracking-[-0.02em]">
              Hello, I&rsquo;m
            </span>
            <span className="block w-fit text-[clamp(2.8rem,4.75vw,5rem)] font-extrabold tracking-[-0.035em] lg:whitespace-nowrap">
              Sameed <span className="text-[#1a5cff]">Awais</span>
            </span>
          </h1>

          <p className="mt-[clamp(1rem,2.4vh,1.6rem)] text-[clamp(.95rem,1.22vw,1.3rem)] leading-[1.55] lg:max-w-[34.4vw] text-[#4b5468]">
            I turn complex ideas into scalable technology, build robust digital
            products, and lead engineering from concept to execution. My work
            bridges software engineering, AI/ML, system architecture, and
            technical leadership.
          </p>

          <div className="mt-[clamp(1.4rem,5.3vh,3.4rem)] flex w-full flex-col gap-[clamp(.8rem,2.03vw,2.1rem)] sm:w-auto sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex h-[58px] min-w-[214px] items-center justify-center gap-3 rounded-xl bg-[#1a5cff] px-7 text-base font-semibold text-white shadow-[0_8px_20px_rgba(26,92,255,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#174fe0] hover:shadow-[0_14px_28px_rgba(26,92,255,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a5cff] focus-visible:ring-offset-4 sm:h-[62px] sm:min-w-[226px] sm:text-lg"
            >
              View My Work <FiArrowRight className="text-[1.2em] transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-[58px] min-w-[238px] items-center justify-center gap-3 rounded-xl border border-[#0b1230]/15 bg-white px-6 text-base font-semibold text-[#0b1230] shadow-[0_4px_14px_rgba(10,20,50,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1a5cff]/35 hover:bg-[#f7f9ff] hover:shadow-[0_12px_24px_rgba(10,20,50,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a5cff] focus-visible:ring-offset-4 dark:border-white/20 dark:bg-[#111c30] dark:text-white dark:hover:bg-[#17243a] sm:h-[62px] sm:min-w-[253px] sm:text-lg"
            >
              <FaRegCommentDots className="text-[1.25em]" /> Let&apos;s Talk
            </a>
          </div>
        </div>

        {/* Center "Web Developer" label */}
        <div className="absolute left-[51.8%] top-[52.6%] z-[3] hidden -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[.45rem] rounded-2xl bg-white px-[1.7rem] pb-4 pt-[.9rem] shadow-[0_4px_18px_rgba(20,30,80,0.04)] lg:flex">
          <svg viewBox="0 0 48 32" className="h-auto w-[clamp(34px,2.9vw,48px)]" aria-hidden="true">
            <g fill="none" stroke="#1a5cff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="12,6 3,16 12,26" />
              <polyline points="36,6 45,16 36,26" />
              <line x1="28" y1="3" x2="20" y2="29" />
            </g>
          </svg>
          <strong className="whitespace-nowrap text-[clamp(1.05rem,1.75vw,1.8rem)] font-bold tracking-[-0.02em]">
            Web Developer
          </strong>
        </div>

        {/* Portrait */}
        <div className="pointer-events-none relative z-[2] mx-auto mt-6 w-[min(78%,420px)] rounded-t-3xl bg-[#0a1432] lg:absolute lg:bottom-0 lg:right-[6%] lg:mx-0 lg:mt-0 lg:h-[90.5%] lg:w-auto lg:rounded-none lg:bg-transparent">
          <Image
            src="/sameed.png"
            alt="Sameed Awais"
            width={1086}
            height={1448}
            priority
            className="block h-auto w-full lg:h-full lg:w-auto lg:max-w-none"
          />
        </div>
      </section>
    </main>
  );
}
