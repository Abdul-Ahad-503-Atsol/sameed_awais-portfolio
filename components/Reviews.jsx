import { FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "../data/portfolio";

export default function Reviews() {
  return (
    <section id="reviews" className="w-full bg-white py-10 lg:py-12">
      <div className="mx-auto max-w-[1400px] px-5">
        <div className="grid items-end gap-5 md:grid-cols-[minmax(0,1fr)_auto]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#dfe7fd] bg-[#dfe7fd] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#1a5cff]">
              <i className="h-1.5 w-1.5 rounded-full bg-[#1a5cff]" />
              Client feedback
            </span>
            <h2 className="mt-4 max-w-[550px] text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-[#0b1230] sm:text-5xl">
              Trust, earned through<br className="hidden sm:block" /> the <span className="text-[#1a5cff]">work.</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-[#334155] sm:text-base">
              A selection of client feedback from engagements across web, mobile, and SaaS products.
            </p>
          </div>
          <a href="#projects" className="mb-1 inline-flex w-fit items-center gap-2 text-xs font-semibold text-[#0b1230] transition hover:text-[#1a5cff]">
            See the work <FaArrowRight aria-hidden="true" />
          </a>
        </div>

        {testimonials.length > 0 ? (
          <div className="mt-9 grid items-stretch gap-4 lg:grid-cols-2">
            {testimonials.map((review) => (
              <article key={`${review.name}-${review.project}`} className="grid min-h-[140px] grid-rows-[auto_minmax(0,1fr)_auto] rounded-[20px] border border-[#dfe7fd] bg-[#f1f3fb] p-6 lg:grid-rows-[auto_110px_auto]">
                <FaQuoteLeft aria-hidden="true" className="text-base text-[#1a5cff]" />
                <blockquote className="mt-4 min-h-0 text-[13px] leading-[1.55] text-[#263957] sm:text-sm lg:h-[110px]">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <div className="mt-5 border-t border-[#dfe7fd] pt-4">
                  <p className="text-sm font-bold text-[#0b1230]">{review.name}</p>
                  <p className="mt-1 text-xs text-[#263957]">
                    {review.role}{review.company ? `, ${review.company}` : ""}
                  </p>
                  {review.project && (
                    <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.14em] text-[#1a5cff]">
                      {review.project}
                    </p>
                  )}
                  {review.date && <p className="mt-1 text-[10px] text-[#64748b]">{review.date}</p>}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-9 flex min-h-48 flex-col items-center justify-center rounded-[20px] border border-dashed border-[#cbd8ee] bg-[#f4f6f7] px-6 py-10 text-center">
            <FaQuoteLeft aria-hidden="true" className="text-[#1a5cff]" />
            <h3 className="mt-4 text-lg font-bold text-[#0b1230]">Client feedback coming soon</h3>
          </div>
        )}
      </div>
    </section>
  );
}
