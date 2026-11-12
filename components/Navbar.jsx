"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const NAV = ["Home", "About", "Expertise", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [theme, setTheme] = useState("light");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";

    setTheme(savedTheme);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";

    document.documentElement.classList.toggle(
      "dark",
      nextTheme === "dark"
    );

    localStorage.setItem("portfolio-theme", nextTheme);
    setTheme(nextTheme);
  }

  const headerPosition = isScrolled
    ? "fixed inset-x-0 top-0"
    : "relative lg:absolute lg:inset-x-0 lg:top-0";

  const headerAppearance = isScrolled
    ? "border-b border-white/10 bg-[#0a1432]/95 shadow-sm shadow-black/10 backdrop-blur-xl"
    : "bg-transparent";

  return (
    <header
      className={`${headerPosition} ${headerAppearance} z-[50] flex w-full items-center justify-between px-5 py-5 transition-[background-color,backdrop-filter,box-shadow] duration-300 lg:h-[9%] lg:min-h-[72px] lg:py-0 lg:pl-[6.3%] lg:pr-[3.8%]`}
    >
      {/* Logo */}
      <a
        href="#home"
        onClick={() => setActive("Home")}
        className={`text-[clamp(1.5rem,2.1vw,2.15rem)] font-bold tracking-[-0.02em] ${
          isScrolled ? "text-white" : "text-[#0b1230]"
        }`}
      >
        Portfolio<span className="text-[#1a5cff]">.</span>
      </a>

      {/* Navigation Links */}
      <nav
        aria-label="Main"
        className="ml-auto mr-[clamp(1rem,3.4vw,3.6rem)] hidden items-center gap-[clamp(1rem,2.45vw,2.6rem)] lg:flex"
      >
        {NAV.map((item) => {
          const isActive = active === item;

          return (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setActive(item)}
              className={`relative py-2 text-[clamp(.8rem,1.065vw,1.1rem)] font-medium transition-colors ${
                isActive
                  ? "text-[#2f6bff]"
                  : "text-white"
              }`}
            >
              {item}

              {isActive && (
                <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded bg-[#2f6bff]" />
              )}
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
        className="grid aspect-square w-[clamp(40px,2.9vw,48px)] place-items-center rounded-full bg-[#16224a] text-lg text-white transition hover:scale-105"
      >
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
    </header>
  );
}
