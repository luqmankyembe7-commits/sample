import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About",
  description: "Pearlcrest Security is an independent Kampala firm covering guarding, cash, and electronic security across Uganda.",
};

const milestones = [
  ["2008", "The firm opens a small gatehouse desk in Nakasero."],
  ["2012", "A cash yard is added for scheduled Kampala collections."],
  ["2016", "Entebbe and Jinja offices take regional posts off the Kampala roster."],
  ["2019", "The systems workshop starts installing cameras and alarms we can also maintain."],
  ["2023", "Gulu becomes the northern reporting office."],
  ["2026", "The control room moves to a full night watch, and Mbale opens."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the firm"
        title="Local orders, a national night desk"
        lede="Pearlcrest is an independent Ugandan security firm. Leadership sits in Kampala. Officers report to the office nearest the post."
      />
      <section className="shell grid gap-10 py-16 md:grid-cols-2">
        <div className="space-y-4 text-lg leading-8">
          <p>
            The firm was started to give compounds and counters a security team that already knew the street. That
            is still the work: screen the officer, write the site order, and answer the phone when the shift needs
            a supervisor.
          </p>
          <p>
            We do not pretend to be a global brand. Clients who want a Kampala signature on the contract, and cover
            that reaches the regions, are the ones we are built for.
          </p>
        </div>
        <div className="rounded-3xl bg-white p-6">
          <h2 className="display text-2xl">How the firm is run</h2>
          <ul className="mt-4 space-y-4 text-sm leading-6 text-muted">
            <li>A managing office in Nakasero is accountable for deployments nationwide.</li>
            <li>Each regional office has a supervisor who visits posts and owns the local roster.</li>
            <li>Cash, systems, and guarding share one escalation path so a night incident is not bounced between desks.</li>
            <li>Training covers the post: access routine, incident notes, customer care, and the site’s own orders.</li>
          </ul>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="shell">
          <h2 className="display text-4xl">A short history</h2>
          <ol className="mt-8 space-y-5">
            {milestones.map(([year, text]) => (
              <li key={year} className="grid gap-2 border-l-2 border-gold pl-5 md:grid-cols-[6rem_1fr] md:gap-6">
                <p className="font-semibold text-crimson">{year}</p>
                <p className="leading-7">{text}</p>
              </li>
            ))}
          </ol>
          <Link href="/contact" className="mt-10 inline-block text-sm font-semibold text-crimson hover:underline">
            Speak to the Kampala office
          </Link>
        </div>
      </section>
    </>
  );
}
