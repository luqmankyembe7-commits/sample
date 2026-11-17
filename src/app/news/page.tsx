import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { stories } from "@/lib/site";

export const metadata: Metadata = {
  title: "News",
  description: "Notes from Pearlcrest Security on the control room, regional deployments, and estate gatehouses.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="Notes from the offices"
        lede="Short updates on how the firm is deployed. No recycled headlines."
      />
      <section className="shell grid gap-4 py-16">
        {stories.map((story) => (
          <Link
            key={story.slug}
            href={`/news/${story.slug}`}
            className="grid gap-3 overflow-hidden rounded-3xl bg-white transition hover:shadow-md md:grid-cols-[16rem_1fr]"
          >
            <img src={story.image} alt={story.imageAlt} className="h-48 w-full object-cover md:h-full" />
            <div className="p-6">
              <p className="text-sm font-semibold text-crimson">{story.date}</p>
              <h2 className="display text-3xl leading-tight">{story.title}</h2>
              <p className="mt-3 max-w-2xl leading-7 text-muted">{story.excerpt}</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
