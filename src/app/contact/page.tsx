import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach Pearlcrest Security in Nakasero, Kampala, for a briefing, an existing contract, or a career enquiry.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string }>;
}) {
  const { interest } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us the site. We will tell you the cover."
        lede="Briefings, existing contracts, and career notes all come through the Kampala office. The operations desk is for deployments already on the clock."
      />
      <section className="shell grid gap-10 py-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-8">
          <div>
            <h2 className="display text-3xl">Kampala office</h2>
            <p className="mt-3 leading-7">
              {company.legalName}
              <br />
              {company.address}
              <br />
              {company.poBox}
            </p>
            <p className="mt-3 text-sm leading-6 text-muted">{company.hours}</p>
          </div>
          <div className="space-y-3 text-sm">
            <p>
              <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted">General</span>
              <a className="font-semibold hover:text-crimson" href={`tel:${company.phoneHref}`}>
                {company.phoneDisplay}
              </a>
              <br />
              <a className="hover:text-crimson" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </p>
            <p>
              <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Sales and briefings
              </span>
              <a className="hover:text-crimson" href={`mailto:${company.salesEmail}`}>
                {company.salesEmail}
              </a>
            </p>
            <p>
              <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                24-hour operations
              </span>
              <a className="font-semibold hover:text-crimson" href={`tel:${company.deskHref}`}>
                {company.deskDisplay}
              </a>
            </p>
          </div>
        </div>
        <ContactForm interest={interest} />
      </section>
    </>
  );
}
