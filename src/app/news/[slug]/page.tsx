import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStory, stories } from "@/lib/site";

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return { title: "News" };
  return { title: story.title, description: story.excerpt };
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  return (
    <article className="shell max-w-3xl py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-crimson">
        <Link href="/news" className="hover:underline">
          News
        </Link>
      </p>
      <p className="mt-4 text-sm font-semibold">{story.date}</p>
      <h1 className="display mt-3 text-4xl leading-tight md:text-5xl">{story.title}</h1>
      <img
        src={story.image}
        alt={story.imageAlt}
        className="mt-8 aspect-[16/9] w-full rounded-3xl object-cover"
      />
      <div className="mt-8 space-y-5 text-lg leading-8">
        {story.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
