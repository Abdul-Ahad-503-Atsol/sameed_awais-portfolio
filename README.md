# Portfolio (Next.js + Tailwind v4)

    npm install
    npm run dev      # http://localhost:3000

## Where to put your data
- `data/portfolio.js`  : about text and stats, industries, skills, projects, experience, certifications, contact info.
- `components/Hero.jsx`: name, badge, intro text, social links (SOCIALS array), CV path.
- `public/sameed.png`  : your photo (transparent PNG). `public/Sameed-Awais-CV.pdf`: your CV.
- Project images: put files in `public/projects/` and set `image: "/projects/one.png"` in the data file.
- `app/api/contact/route.js`: sends contact form submissions through FormSubmit.

## Contact form email setup
The contact form forwards messages to `sameedawais@gmail.com` through FormSubmit. Submit the form once and confirm the activation email sent by FormSubmit to that inbox. After confirmation, submissions are forwarded by email without adding API credentials.
