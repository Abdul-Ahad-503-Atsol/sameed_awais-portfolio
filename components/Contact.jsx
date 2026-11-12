"use client";

import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Heading from "./Heading";
import { contact } from "../data/portfolio";

const field =
  "w-full rounded-lg border-[1.5px] border-[#dfe7fd] bg-white px-4 py-3 text-[#0b1230] outline-none transition focus:border-[#1a5cff]";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

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
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) form.reset();
    } catch {
      setStatus("error");
    }
  }

  const info = [
    { Icon: FaEnvelope, label: "Email", value: contact.email },
    { Icon: FaPhoneAlt, label: "Phone", value: contact.phone },
    { Icon: FaMapMarkerAlt, label: "Location", value: contact.location },
  ];

  return (
    <section id="contact" className="mx-2 rounded-[clamp(20px,2.2vw,36px)] bg-[#0a1432] lg:mx-4">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28">
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
                  <div className="font-semibold text-white">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 rounded-3xl bg-white p-7 lg:p-9">
          <div className="grid gap-4 sm:grid-cols-2">
            <input name="name" required placeholder="Your name" className={field} />
            <input name="email" type="email" required placeholder="Your email" className={field} />
          </div>
          <input name="subject" placeholder="Subject" className={field} />
          <textarea name="message" required rows={5} placeholder="Your message" className={field} />
          <button
            type="submit"
            disabled={status === "sending"}
            className="h-14 w-full rounded-lg bg-[#0f5cff] font-semibold text-white shadow-[0_8px_20px_rgba(15,92,255,0.28)] transition hover:-translate-y-0.5 disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
          {status === "sent" && <p className="text-center font-medium text-green-600">Message sent. Thank you!</p>}
          {status === "error" && <p className="text-center font-medium text-red-600">Could not send. Please try again.</p>}
        </form>
      </div>
    </section>
  );
}
