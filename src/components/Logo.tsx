export function Mark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M20 1.5 35.5 8.2v12.4c0 9.6-6.6 16.2-15.5 18.9C11.1 36.8 4.5 30.2 4.5 20.6V8.2L20 1.5Z"
      />
      <circle cx="20" cy="18.5" r="5.2" fill="#07111f" />
      <circle cx="20" cy="18.5" r="2.1" fill="#d7a441" />
    </svg>
  );
}

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const word = tone === "light" ? "text-paper" : "text-ink";
  const mark = tone === "light" ? "text-gold" : "text-ink";
  return (
    <span className={`inline-flex items-center gap-2.5 ${word}`}>
      <Mark className={`h-9 w-9 ${mark}`} />
      <span className="leading-none">
        <span className="block font-display text-[1.35rem] tracking-tight">Pearlcrest</span>
        <span className="mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-gold">
          Security
        </span>
      </span>
    </span>
  );
}
