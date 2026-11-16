"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUser,
  FaChevronDown,
  FaRegCommentDots,
  FaPaperPlane,
} from "react-icons/fa";
import Heading from "./Heading";
import { contact } from "../data/portfolio";

const field =
  "w-full rounded-xl border border-white/20 bg-[#1b2c4d]/90 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-[#bdcbe2] focus:border-[#6e91ff] focus:ring-4 focus:ring-[#1a5cff]/20";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [subject, setSubject] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("Message sent. Thank you!");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = await res.json().catch(() => ({}));
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) {
        form.reset();
        setSubject("");
        setErrorMessage("");
        setSuccessMessage(result.message || "Message sent. Thank you!");
      } else {
        setErrorMessage(result.error || "Could not send. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Could not send. Please check your connection and try again.");
    }
  }

  const info = [
    { Icon: FaEnvelope, label: "Email", value: contact.email },
    { Icon: FaPhoneAlt, label: "Phone", value: contact.phone },
    { Icon: FaMapMarkerAlt, label: "Location", value: contact.location },
  ];

  return (
    <section id="contact" className="mx-2 rounded-[clamp(20px,2.2vw,36px)] bg-[#0a1432] lg:mx-4">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <Heading tag="Contact" dark>
            Let&apos;s work <span className="text-[#1a5cff]">together</span>
          </Heading>
          <p className="max-w-md text-lg leading-relaxed text-[#a8b3cf]">
            Have a project, a role or an idea? Send a message and I will reply as soon as I can.
          </p>
          <div className="mt-8 space-y-5">
            {info.map(({ Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[#16244f] text-[#1a5cff]">
                  <Icon />
                </div>
                <div>
                  <div className="text-sm text-[#a8b3cf]">{label}</div>
                  {label === "Email" ? (
                    <a href={`mailto:${value}`} className="font-semibold text-white transition hover:text-[#8eb3ff]">{value}</a>
                  ) : label === "Phone" ? (
                    <a href={`tel:${value}`} className="font-semibold text-white transition hover:text-[#8eb3ff]">{value}</a>
                  ) : (
                    <div className="font-semibold text-white">{value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="relative isolate overflow-hidden rounded-[28px] border border-[#5674b0]/50 bg-gradient-to-br from-[#172b50] via-[#122344] to-[#0d1a37] p-5 shadow-[0_18px_48px_rgba(3,12,32,0.32)] sm:p-7 lg:p-8"
        >
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-28 z-0 h-72 w-72 rounded-full bg-[#1a5cff]/25 blur-3xl" />
          <div className="relative z-10 space-y-5">
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Send me a message</h3>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block space-y-2">
                <span className="block pl-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#dce7f8]">Your name</span>
                <span className="relative block">
                  <FaUser aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#a9c4ff]" />
                  <input name="name" required autoComplete="name" placeholder="John Doe" className={`${field} pl-11`} />
                </span>
              </label>

              <label className="block space-y-2">
                <span className="block pl-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#dce7f8]">Email address</span>
                <span className="relative block">
                  <FaEnvelope aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#a9c4ff]" />
                  <input name="email" type="email" required autoComplete="email" placeholder="john@example.com" className={`${field} pl-11 !text-xs`} />
                </span>
              </label>
            </div>

            <label className="block space-y-2">
              <span className="block pl-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#dce7f8]">Subject</span>
              <span className="relative block">
                <input
                  name="subject"
                  required
                  maxLength={160}
                  placeholder="What would you like to discuss?"
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  className={`${field} pr-14`}
                />
                <select
                  name="topic"
                  defaultValue="Project inquiry"
                  aria-label="Choose a project type to fill the subject"
                  onChange={(event) => setSubject(event.target.value)}
                  className="absolute right-1.5 top-1/2 z-10 h-10 w-10 -translate-y-1/2 cursor-pointer appearance-none rounded-lg bg-transparent text-transparent opacity-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#a9c4ff]"
                >
                  <option className="bg-[#1b2c4d] text-white">Project inquiry</option>
                  <option className="bg-[#1b2c4d] text-white">Job opportunity</option>
                  <option className="bg-[#1b2c4d] text-white">Collaboration</option>
                  <option className="bg-[#1b2c4d] text-white">General question</option>
                  <option className="bg-[#1b2c4d] text-white">Other</option>
                </select>
                <span aria-hidden="true" className="pointer-events-none absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-lg border-l border-white/15 text-[#dce7f8]">
                  <FaChevronDown className="text-[10px]" />
                </span>
              </span>
            </label>

            <label className="block space-y-2">
              <span className="block pl-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#dce7f8]">Your message</span>
              <span className="relative block">
                <FaRegCommentDots aria-hidden="true" className="pointer-events-none absolute left-4 top-4 text-sm text-[#a9c4ff]" />
                <textarea name="message" required rows={5} placeholder="Tell me a little about your project..." className={`${field} min-h-36 resize-y pl-11`} />
              </span>
            </label>

            <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
              <label htmlFor="contact-website">Leave this field empty</label>
              <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-xl border border-white/25 bg-gradient-to-r from-[#1a5cff] to-[#1747c8] px-5 font-bold text-white shadow-[0_10px_28px_rgba(26,92,255,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(26,92,255,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a9c4ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#122344] disabled:cursor-wait disabled:opacity-60"
            >
              <FaPaperPlane aria-hidden="true" />
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
            {status === "sent" && <p role="status" className="text-center font-medium text-[#a9c4ff]">{successMessage}</p>}
            {status === "error" && <p role="alert" className="text-center font-medium text-rose-300">{errorMessage}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
