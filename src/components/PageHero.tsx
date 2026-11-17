export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="hero-mesh text-paper">
      <div className="shell py-16 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{eyebrow}</p>
        <h1 className="display mt-4 max-w-3xl text-4xl leading-[1.05] text-balance md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-sand">{lede}</p>
      </div>
    </section>
  );
}
