import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { roles } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "Security, control room, cash crew, and technician roles at Pearlcrest Security in Uganda.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Work that has a roster, a supervisor, and a proper handover"
        lede="We hire officers, controllers, cash crews, and technicians. Every applicant is screened before a post is offered."
      />
      <section className="shell grid gap-8 py-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="display text-3xl">Before you apply</h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
            <li>You must have the right to work in Uganda and be at least 18.</li>
            <li>Bring a national ID, two referees, and room for a police clearance.</li>
            <li>Tuesday introductions run from 09:00 to 12:00 at Plot 18, Kyadondo Road, Nakasero.</li>
            <li>Shift work includes nights. The roster is published, not improvised.</li>
          </ul>
        </div>
        <div className="space-y-4">
          {roles.map((role) => (
            <article key={role.id} id={role.id} className="rounded-3xl bg-white p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-xl font-semibold">{role.title}</h2>
                <p className="text-sm text-crimson">{role.type}</p>
              </div>
              <p className="mt-1 text-sm font-medium">{role.location}</p>
              <p className="mt-3 text-sm leading-6 text-muted">{role.summary}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {role.requirements.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-gold" aria-hidden>
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={`/contact?interest=${encodeURIComponent(`Careers: ${role.title}`)}`}
                className="mt-5 inline-block text-sm font-semibold text-crimson hover:underline"
              >
                Apply for this role
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
