const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_TOPICS = new Set([
  "Project inquiry",
  "Job opportunity",
  "Collaboration",
  "General question",
  "Other",
]);

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Silently discard bot submissions caught by the honeypot field.
  if (body.website) return Response.json({ ok: true });

  const name = typeof body.name === "string" ? body.name.trim().slice(0, 120) : "";
  const email = typeof body.email === "string" ? body.email.trim().slice(0, 254) : "";
  const submittedTopic = typeof body.topic === "string" ? body.topic.trim() : "";
  const topic = ALLOWED_TOPICS.has(submittedTopic) ? submittedTopic : "General question";
  const subject = typeof body.subject === "string" ? body.subject.trim().replace(/[\r\n]+/g, " ").slice(0, 160) : "";
  const message = typeof body.message === "string" ? body.message.trim().slice(0, 10000) : "";

  if (!name || !EMAIL_PATTERN.test(email) || !subject || !message) {
    return Response.json({ ok: false, error: "Please check the form fields and try again." }, { status: 400 });
  }

  try {
    const response = await fetch("https://formsubmit.co/ajax/sameedawais@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        topic,
        subject,
        message,
        _replyto: email,
        _subject: `[${topic}] ${subject}`,
        _honey: body.website || "",
      }),
    });

    const result = await response.json().catch(() => ({}));
    if (!response.ok || result.success === false || result.success === "false") {
      console.error("Contact email delivery failed:", response.status, result.message || "FormSubmit rejected the request.");
      return Response.json({ ok: false, error: "Your message could not be sent. Please try again." }, { status: 502 });
    }

    return Response.json({ ok: true, message: result.message || "Message sent. Thank you!" });
  } catch (error) {
    console.error("Contact email request failed:", error);
    return Response.json({ ok: false, error: "Your message could not be sent. Please try again." }, { status: 502 });
  }
}
