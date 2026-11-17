import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { company, offices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Locations",
  description: "Pearlcrest offices in Kampala, Entebbe, Jinja, Mbale, Mbarara, and Gulu.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Locations"
        title="Six offices, from the control room outward"
        lede="Headquarters and the night desk are in Nakasero. Regional offices run the posts, the relief, and the local client calls."
      />
      <section className="shell grid gap-4 py-16 md:grid-cols-2">
        {offices.map((office) => (
          <article key={office.city} className="rounded-3xl bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-crimson">{office.role}</p>
            <h2 className="display mt-2 text-3xl">{office.city}</h2>
            <p className="mt-4 text-sm leading-6">{office.address}</p>
            <p className="mt-1 text-sm font-semibold">{office.phone}</p>
            <p className="mt-4 text-sm leading-6 text-muted">{office.focus}</p>
          </article>
        ))}
      </section>
      <section className="bg-ink py-14 text-paper">
        <div className="shell flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="display text-3xl">Visit the front office</h2>
            <p className="mt-3 max-w-xl text-sand">
              {company.address}, {company.city}. {company.hours}
            </p>
          </div>
          <Link href="/contact" className="rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink">
            Book a visit
          </Link>
        </div>
      </section>
    </>
  );
}
