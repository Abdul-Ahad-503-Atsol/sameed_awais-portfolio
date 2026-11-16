
import "@fontsource/manrope/latin-400.css";
import "@fontsource/manrope/latin-500.css";
import "@fontsource/manrope/latin-600.css";
import "@fontsource/manrope/latin-700.css";
import "@fontsource/manrope/latin-800.css";
import "@fontsource/space-grotesk/latin-400.css";
import "@fontsource/space-grotesk/latin-500.css";
import "@fontsource/space-grotesk/latin-600.css";
import "@fontsource/space-grotesk/latin-700.css";
import "./globals.css";

export const metadata = {
  title: "Sameed Awais | Software Engineer",
  description: "Software Engineer, AI/ML and Technical Leader.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem("portfolio-theme");
                if (theme === "dark") {
                  document.documentElement.classList.add("dark");
                }
              } catch (error) {}
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
