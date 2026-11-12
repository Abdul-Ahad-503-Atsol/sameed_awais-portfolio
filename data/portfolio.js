// ============ EDIT YOUR CONTENT HERE ============
import {
  FaUniversity, FaHeartbeat, FaShoppingCart, FaGraduationCap, FaTruck, FaCloud,
} from "react-icons/fa";

export const about = {
  paragraphs: [
    "Write 2-3 sentences about who you are, what you build and what drives you.",
    "Add a second paragraph about your approach to engineering, teams and delivery.",
  ],
  stats: [
    { value: "5+", label: "Years of experience" },
    { value: "40+", label: "Projects delivered" },
    { value: "20+", label: "Happy clients" },
    { value: "10+", label: "Teams led" },
  ],
};

// Industries you have worked in (Expertise section)
export const industries = [
  { name: "FinTech", Icon: FaUniversity, desc: "Short line about what you built or solved in this industry." },
  { name: "Healthcare", Icon: FaHeartbeat, desc: "Short line about what you built or solved in this industry." },
  { name: "E-commerce", Icon: FaShoppingCart, desc: "Short line about what you built or solved in this industry." },
  { name: "EdTech", Icon: FaGraduationCap, desc: "Short line about what you built or solved in this industry." },
  { name: "Logistics", Icon: FaTruck, desc: "Short line about what you built or solved in this industry." },
  { name: "SaaS", Icon: FaCloud, desc: "Short line about what you built or solved in this industry." },
];

// level = 0-100
export const skills = [
  { title: "Frontend", items: [{ name: "React / Next.js", level: 90 }, { name: "TypeScript", level: 85 }, { name: "Tailwind CSS", level: 90 }, { name: "HTML / CSS", level: 95 }] },
  { title: "Backend", items: [{ name: "Node.js", level: 90 }, { name: "Python", level: 85 }, { name: "REST / GraphQL", level: 88 }, { name: "PostgreSQL / MongoDB", level: 85 }] },
  { title: "AI / ML", items: [{ name: "LLM Apps", level: 85 }, { name: "PyTorch / TensorFlow", level: 75 }, { name: "RAG Pipelines", level: 80 }, { name: "Data Analysis", level: 80 }] },
  { title: "DevOps & Leadership", items: [{ name: "Docker / CI-CD", level: 80 }, { name: "AWS / GCP", level: 78 }, { name: "System Architecture", level: 88 }, { name: "Team Leadership", level: 90 }] },
];

// Click a project card -> detailed modal. "image" is optional (e.g. "/projects/one.png").
export const projects = [
  {
    title: "Project One", category: "Web Platform", image: "",
    summary: "One-line summary shown on the card.",
    description: "Full description shown in the detail window. Explain the problem, your role and the result.",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    highlights: ["Key result or feature one", "Key result or feature two", "Key result or feature three"],
    live: "#", repo: "#",
  },
  {
    title: "Project Two", category: "AI / ML", image: "",
    summary: "One-line summary shown on the card.",
    description: "Full description shown in the detail window. Explain the problem, your role and the result.",
    tech: ["Python", "FastAPI", "PyTorch"],
    highlights: ["Key result or feature one", "Key result or feature two", "Key result or feature three"],
    live: "#", repo: "#",
  },
  {
    title: "Project Three", category: "Mobile / SaaS", image: "",
    summary: "One-line summary shown on the card.",
    description: "Full description shown in the detail window. Explain the problem, your role and the result.",
    tech: ["React", "TypeScript", "AWS"],
    highlights: ["Key result or feature one", "Key result or feature two", "Key result or feature three"],
    live: "#", repo: "#",
  },
  {
    title: "Project Four", category: "Backend System", image: "",
    summary: "One-line summary shown on the card.",
    description: "Full description shown in the detail window. Explain the problem, your role and the result.",
    tech: ["Node.js", "Docker", "Redis"],
    highlights: ["Key result or feature one", "Key result or feature two", "Key result or feature three"],
    live: "#", repo: "#",
  },
];

export const experience = [
  { role: "Senior Software Engineer", company: "Company Name", period: "2023 - Present", points: ["What you owned or led", "Impact in numbers if possible", "Technologies used"] },
  { role: "Software Engineer", company: "Company Name", period: "2021 - 2023", points: ["What you owned or led", "Impact in numbers if possible", "Technologies used"] },
  { role: "Junior Developer", company: "Company Name", period: "2019 - 2021", points: ["What you owned or led", "Impact in numbers if possible", "Technologies used"] },
];

export const certifications = [
  { name: "Certification Name", issuer: "Issuer", year: "2024", link: "#" },
  { name: "Certification Name", issuer: "Issuer", year: "2023", link: "#" },
  { name: "Certification Name", issuer: "Issuer", year: "2023", link: "#" },
  { name: "Certification Name", issuer: "Issuer", year: "2022", link: "#" },
];

export const contact = {
  email: "you@example.com",
  phone: "+00 000 0000000",
  location: "Your City, Country",
};
