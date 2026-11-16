"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { FiMoon, FiSun } from "react-icons/fi";

const NAV = ["Home", "About", "Skills", "Projects", "Experience", "Contact", "Blogs"];

export default function Navbar() {
  const pathname = usePathname();
  const [active, setActive] = useState("Home");
  const [theme, setTheme] = useState("light");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const savedTheme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";

    setTheme(savedTheme);

    const handleScroll = () => {
      setIsScrolled(pathname === "/" && window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";

    document.documentElement.classList.toggle(
      "dark",
      nextTheme === "dark"
    );

    localStorage.setItem("portfolio-theme", nextTheme);
    setTheme(nextTheme);
  }

  const shouldFloat = pathname === "/" && isScrolled;
  const isSecondaryPage = pathname !== "/";

  const headerPosition = shouldFloat
    ? "fixed left-1/2 top-3 w-[calc(100%-1.5rem)] max-w-[1400px] -translate-x-1/2 rounded-full"
    : isSecondaryPage
      ? "fixed inset-x-0 top-0 w-full"
      : "relative lg:absolute lg:inset-x-0 lg:top-0";

  const headerAppearance = shouldFloat
    ? "border border-white/10 bg-[#0a1432]/95 shadow-[0_12px_40px_rgba(10,20,50,0.24)] backdrop-blur-xl"
    : pathname !== "/"
      ? "border-b border-white/10 bg-[#0a1432]"
      : "bg-transparent";

  const header = (
    <header
      className={`${headerPosition} ${headerAppearance} z-[9999] flex items-center justify-start px-5 py-4 transition-[top,width,border-radius,background-color,backdrop-filter,box-shadow] duration-300 lg:min-h-[72px] lg:py-0 lg:pl-[6.3%] lg:pr-[3.8%] ${shouldFloat ? "lg:h-[72px] lg:px-[clamp(1.5rem,3vw,2.5rem)]" : isSecondaryPage ? "lg:h-[72px]" : "w-full lg:h-[9%]"}`}
    >
      {/* Logo */}
      <a
        href={pathname === "/" ? "#home" : "/#home"}
        onClick={() => setActive("Home")}
        className={`text-[clamp(1.5rem,2.1vw,2.15rem)] font-bold tracking-[-0.02em] ${
          shouldFloat || pathname === "/blogs" || pathname.startsWith("/projects") || pathname.startsWith("/about") ? "text-white" : "text-[#0b1230]"
        }`}
      >
        Sameed<span className="text-[#1a5cff]">.</span>
      </a>

      {/* Navigation Links */}
      <nav
        aria-label="Main"
        className="ml-auto mr-3 hidden items-center gap-3 xl:gap-4 lg:flex"
      >
        {NAV.map((item) => {
          const isActive = pathname === "/blogs"
            ? item === "Blogs"
            : pathname.startsWith("/about")
              ? item === "About"
            : pathname.startsWith("/projects")
              ? item === "Projects"
              : active === item;

          return (
            <a
              key={item}
              href={item === "Blogs" ? "/blogs" : item === "About" ? "/about" : `${pathname === "/" ? "" : "/"}#${item.toLowerCase()}`}
              // target={item === "Blogs" ? "_blank" : undefined}
              // rel={item === "Blogs" ? "noopener noreferrer" : undefined}
              onClick={() => setActive(item)}
              className={`group relative isolate inline-flex items-center rounded-full px-2 py-2 text-[clamp(.8rem,1.065vw,1.1rem)] font-medium transition-all duration-300 hover:-translate-y-0.5 hover:text-[#8eb3ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60A5FA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1432] ${
                isActive
                  ? "text-[#1a5cff]"
                  : "text-white"
              }`}
            >
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute inset-x-1 inset-y-1 -z-10 rounded-full bg-[#1a5cff]/20 opacity-0 blur-xl transition-opacity duration-300 ${
                  isActive
                    ? "opacity-60"
                    : "group-hover:opacity-100"
                }`}
              />
              {item}

              <span
                aria-hidden="true"
                className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-center rounded-full bg-[#1a5cff] transition-transform duration-300 ${
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </a>
          );
        })}
      </nav>

      {/* Theme Toggle */}
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        aria-pressed={theme === "dark"}
        className="relative flex h-12 w-24 shrink-0 items-center justify-between rounded-full bg-[#20222e] p-1 transition hover:scale-[1.03]"
      >
        <span
          aria-hidden="true"
          className={`absolute left-1 top-1 h-10 w-10 rounded-full bg-[#f8f9fc] shadow-sm transition-transform duration-300 ${theme === "light" ? "translate-x-0" : "translate-x-12"}`}
        />
        <span className={`relative z-10 grid h-10 w-10 place-items-center text-base ${theme === "light" ? "text-[#20222e]" : "text-white/75"}`}>
          <FiSun />
        </span>
        <span className={`relative z-10 grid h-10 w-10 place-items-center text-base ${theme === "dark" ? "text-[#20222e]" : "text-white/75"}`}>
          <FiMoon />
        </span>
      </button>

    </header>
  );

  return mounted && (shouldFloat || isSecondaryPage) ? createPortal(header, document.body) : header;
}
