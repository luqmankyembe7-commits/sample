import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson">404</p>
      <h1 className="display mt-3 text-5xl">That page is not on the roster.</h1>
      <p className="mt-4 max-w-lg leading-7 text-muted">
        The address does not match a service, a note, or an office page.
      </p>
      <Link href="/" className="mt-8 inline-block rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper">
        Back to the homepage
      </Link>
    </section>
  );
}
