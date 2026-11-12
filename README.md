# Portfolio (Next.js + Tailwind v4)

    npm install
    npm run dev      # http://localhost:3000

## Where to put your data
- `data/portfolio.js`  : about text and stats, industries, skills, projects (detail window), experience, certifications, contact info.
- `components/Hero.jsx`: name, badge, intro text, social links (SOCIALS array), CV path.
- `public/sameed.png`  : your photo (transparent PNG). `public/Sameed-Awais-CV.pdf`: your CV.
- Project images: put files in `public/projects/` and set `image: "/projects/one.png"` in the data file.
- `app/api/contact/route.js`: connect your email service so the form sends mail.
