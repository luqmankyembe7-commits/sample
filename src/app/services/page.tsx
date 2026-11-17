import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { industries, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Manned guarding, cash solutions, security systems, consulting, events, and estate security across Uganda.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="People, cash, and systems under one programme"
        lede="Choose a single service or ask for a combined brief. Every engagement starts with the site, not a catalogue price."
      />
      <section className="shell grid gap-5 py-16">
        {services.map((service) => (
          <article key={service.slug} className="grid gap-6 rounded-3xl bg-white p-6 md:grid-cols-[1fr_1.4fr] md:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-crimson">{service.eyebrow}</p>
              <h2 className="display mt-3 text-3xl">{service.name}</h2>
            </div>
            <div>
              <p className="leading-7 text-muted">{service.detail}</p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-5 inline-block text-sm font-semibold text-crimson hover:underline"
              >
                Service details
              </Link>
            </div>
          </article>
        ))}
      </section>
      <section className="bg-ink py-16 text-paper">
        <div className="shell">
          <h2 className="display text-3xl">Sectors we already know how to brief</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <article key={industry.name} className="rounded-3xl border border-white/10 p-5">
                <h3 className="text-lg font-semibold">{industry.name}</h3>
                <p className="mt-2 text-sm leading-6 text-sand">{industry.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
