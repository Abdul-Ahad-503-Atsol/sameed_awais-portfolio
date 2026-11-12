// Contact form endpoint. Replace the console.log with your email service
// (Resend, Nodemailer, Formspree, etc).
export async function POST(req) {
  const { name, email, subject, message } = await req.json();
  if (!name || !email || !message) {
    return Response.json({ ok: false }, { status: 400 });
  }
  console.log("New contact message:", { name, email, subject, message });
  return Response.json({ ok: true });
}
