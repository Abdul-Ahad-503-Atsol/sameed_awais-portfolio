export default function Heading({ tag, children, dark = false }) {
  return (
    <div className="mb-12">
      <span
        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
          dark ? "bg-[#16244f] text-white" : "bg-[#dfe7fd] text-[#0b1230]"
        }`}
      >
        <i className="h-2 w-2 rounded-full bg-[#1a5cff]" />
        {tag}
      </span>
      <h2
        className={`mt-5 text-4xl font-extrabold tracking-[-0.03em] lg:text-5xl ${
          dark ? "text-white" : "text-[#0b1230]"
        }`}
      >
        {children}
      </h2>
    </div>
  );
}
