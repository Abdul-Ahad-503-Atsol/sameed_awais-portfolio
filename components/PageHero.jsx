import Navbar from "./Navbar";

export default function PageHero({ eyebrow, title, intro, actions, meta = [], children }) {
  return (
    <div className="bg-[#f1f3fb] p-2 lg:p-3">
      <section className="relative isolate flex min-h-[calc(100vh-1rem)] flex-col overflow-hidden rounded-[clamp(20px,2.2vw,36px)] bg-white shadow-[0_10px_40px_rgba(20,30,80,0.12)] lg:min-h-[calc(100vh-1.5rem)]">
        <Navbar />

        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
          <div className="absolute inset-0 bg-[#0a1432] [clip-path:polygon(37.4%_0,100%_0,100%_100%,43%_100%,66.5%_54.7%)]" />
          <div className="absolute left-[65.4%] top-[54.4%] aspect-square w-[35.2%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#1a5cff]" />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full bg-[#1a5cff]/15 blur-3xl" />

        <div className="relative mx-auto flex w-full max-w-[1400px] flex-1 items-center px-5 sm:px-8">
          <div className="grid w-full items-center gap-12 py-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 lg:py-24">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#dfe7fd] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0b1230]">
                <span className="h-2 w-2 rounded-full bg-[#1a5cff]" />
                {eyebrow}
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                {title}
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#4b5468] sm:text-lg">
                {intro}
              </p>

              {actions ? <div className="mt-8 flex flex-wrap items-center gap-3">{actions}</div> : null}
            </div>

            {children ? <div className="relative">{children}</div> : null}
          </div>
        </div>

        {meta.length > 0 && (
          <div className="relative border-t border-[#e3eaf5] bg-white">
            <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-x-8 gap-y-3 px-5 py-5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#64748b] sm:px-8 sm:text-[11px]">
              {meta.map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#1a5cff]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
