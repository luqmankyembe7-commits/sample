import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/lib/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service" };
  return { title: service.name, description: service.summary };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <section className="relative overflow-hidden text-paper">
        <img src={service.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/75 to-ink/88" />
        <div className="shell relative py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            <Link href="/services" className="hover:text-gold-2">
              Services
            </Link>
            <span aria-hidden> / </span>
            {service.eyebrow}
          </p>
          <h1 className="display mt-4 max-w-3xl text-4xl leading-tight md:text-6xl">{service.name}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-sand">{service.summary}</p>
        </div>
      </section>
      <section className="shell grid gap-10 py-16 lg:grid-cols-[1.4fr_0.8fr]">
        <div>
          <p className="text-lg leading-8">{service.detail}</p>
          <h2 className="display mt-10 text-3xl">What is included</h2>
          <ul className="mt-5 space-y-3">
            {service.points.map((point) => (
              <li key={point} className="flex gap-3 leading-7">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <aside className="h-fit rounded-3xl bg-ink p-6 text-paper">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Usually suited to</p>
          <ul className="mt-4 space-y-2 text-sm">
            {service.suited.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link
            href={`/contact?interest=${encodeURIComponent(service.name)}`}
            className="mt-6 inline-flex rounded-full bg-crimson px-5 py-3 text-sm font-semibold text-white hover:bg-[#a82e25]"
          >
            Ask for this service
          </Link>
        </aside>
      </section>
    </>
  );
}
