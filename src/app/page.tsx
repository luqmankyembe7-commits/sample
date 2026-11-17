import Link from "next/link";
import { industries, offices, services, steps, stories } from "@/lib/site";

const servicePhotoOrder = [
  "manned-guarding",
  "estates-and-concierge",
  "security-systems",
  "risk-consulting",
  "cash-solutions",
  "events-and-executive",
];

export default function HomePage() {
  const lead = stories[0];
  const photoServices = servicePhotoOrder.map((slug) => services.find((service) => service.slug === slug)!);

  return (
    <>
      <section className="relative overflow-hidden text-paper">
        <img
          src="/home/city.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/72 to-ink/88" />
        <div className="shell relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Kampala · six offices · one control room
            </p>
            <h1 className="display mt-5 max-w-xl text-5xl leading-[1.02] text-balance md:text-7xl">
              Security for the places Uganda depends on
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-sand">
              Pearlcrest guards compounds, moves cash, and watches alarms for banks, plants, missions, and homes.
              The brief starts in Nakasero. The posts stand from Entebbe to Gulu.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-crimson px-6 py-3 text-sm font-semibold text-white hover:bg-[#a82e25]"
              >
                Request a briefing
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold hover:border-gold hover:text-gold"
              >
                View services
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-navy/80 p-6 shadow-2xl backdrop-blur">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.16em] text-gold">
                <span>Control room</span>
                <span>Nakasero</span>
              </div>
              <p className="display mt-4 text-3xl leading-tight">All six regions on the night log.</p>
              <ul className="mt-6 space-y-3 text-sm">
                {["Kampala posts checked", "Jinja night shift on time", "Gulu supervisor on radio", "Cash yard sealed"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-3 rounded-2xl bg-deep/70 px-4 py-3">
                      <span className="h-2 w-2 rounded-full bg-gold" aria-hidden />
                      {item}
                    </li>
                  ),
                )}
              </ul>
              <p className="mt-5 text-xs leading-5 text-sand/70">
                A picture of the desk, not a live feed. Real alarms are answered by the operations line.
              </p>
            </div>
            <svg viewBox="0 0 640 120" className="mt-6 w-full text-gold/70" aria-hidden>
              <path
                fill="currentColor"
                d="M0 92 40 78 70 88 110 46 140 70 180 34 210 62 250 22 280 58 320 40 360 74 400 28 440 66 480 48 520 80 560 54 600 76 640 60 640 120 0 120Z"
                opacity="0.35"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="M0 92 40 78 70 88 110 46 140 70 180 34 210 62 250 22 280 58 320 40 360 74 400 28 440 66 480 48 520 80 560 54 600 76 640 60"
              />
            </svg>
          </div>
        </div>
      </section>

      <div className="shell relative z-10 -mt-8">
        <Link
          href={`/news/${lead.slug}`}
          className="flex flex-col gap-4 rounded-3xl border border-line bg-navy px-5 py-5 text-paper shadow-xl transition hover:border-gold md:flex-row md:items-center md:justify-between md:px-7"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Latest note</p>
            <p className="mt-1 text-lg font-semibold leading-snug">{lead.title}</p>
          </div>
          <span className="text-sm font-semibold text-gold">Read the note</span>
        </Link>
      </div>

      <section className="shell grid items-start gap-10 py-20 md:grid-cols-2">
        <h2 className="display text-4xl leading-tight md:text-5xl">
          Flexible cover for the security problems of a working city
        </h2>
        <div className="text-lg leading-8 text-muted">
          <p>
            Kampala does not keep one kind of risk. A bank branch, a tea warehouse, a Kololo gate, and a festival
            gate all fail in different ways. Pearlcrest writes the programme around the site, then staffs it with
            people who have been screened and briefed here.
          </p>
          <p className="mt-4">
            Guarding, cash, and systems sit in one firm so a client is not passed between three contractors when
            the night goes wrong.
          </p>
        </div>
      </section>

      <section className="bg-ink py-20 text-paper">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">What we do</p>
              <h2 className="display mt-3 text-4xl">Six services, one duty manager</h2>
            </div>
            <Link href="/services" className="text-sm font-semibold text-gold hover:text-gold-2">
              Explore the services
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {photoServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative flex min-h-56 items-end overflow-hidden rounded-3xl sm:min-h-64"
              >
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/15" />
                <h3 className="display relative px-6 py-6 text-3xl text-white">{service.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson">How a programme is built</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="border-t-2 border-ink pt-5">
              <p className="display text-3xl text-gold">{step.number}</p>
              <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 leading-7 text-muted">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson">Sectors</p>
            <h2 className="display mt-3 text-4xl leading-tight">Who asks us to stand the gate</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {industries.map((industry) => (
              <article key={industry.name} className="rounded-3xl bg-paper p-5">
                <h3 className="text-lg font-semibold">{industry.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{industry.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell grid gap-12 py-20 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson">Where we stand</p>
          <h2 className="display mt-3 text-4xl">A desk in each region, not a phone number on a map</h2>
          <p className="mt-4 leading-7 text-muted">
            Officers report to a local office. The night escalation still comes back to Nakasero, so a supervisor
            in Gulu is never left without a second voice.
          </p>
          <Link href="/locations" className="mt-6 inline-block text-sm font-semibold text-crimson hover:underline">
            See the offices
          </Link>
        </div>
        <ol className="space-y-4">
          {offices.map((office) => (
            <li key={office.city} className="grid grid-cols-[7rem_1fr] gap-4 border-b border-sand pb-4">
              <p className="font-semibold">{office.city}</p>
              <p className="text-sm leading-6 text-muted">{office.focus}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-deep py-16 text-paper">
        <div className="shell grid gap-8 md:grid-cols-4">
          {[
            ["2008", "Founded in Kampala"],
            ["6", "Offices across Uganda"],
            ["24/7", "Control room in Nakasero"],
            ["1", "Written programme per site"],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="display text-4xl text-gold">{value}</p>
              <p className="mt-2 text-sm text-sand">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="overflow-hidden bg-navy text-paper">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center px-6 py-16 md:px-12 lg:justify-end lg:px-16 lg:py-24">
            <div className="w-full max-w-lg">
              <h2 className="display text-4xl leading-tight">Electronic security, kept in service</h2>
              <p className="mt-5 leading-7 text-sand">
                Cameras, alarms, and access control are designed around the building, installed by the Kampala
                workshop, and maintained after the handover. Monitoring can sit with your team or with the Nakasero
                desk.
              </p>
              <Link
                href="/services/security-systems"
                className="mt-8 inline-flex rounded-full bg-crimson px-6 py-3 text-sm font-semibold text-white hover:bg-[#a82e25]"
              >
                Read more
              </Link>
            </div>
          </div>
          <div className="relative min-h-80 bg-paper lg:min-h-full">
            <img
              src="/services/cam.jpg"
              alt="A phone used to lock a door"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ clipPath: "polygon(0 0, 68% 0, 42% 100%, 0 100%)" }}
            />
            <img
              src="/home/turnstile.jpg"
              alt="Stainless access gates"
              className="absolute inset-0 h-full w-full object-cover object-[center_70%]"
              style={{ clipPath: "polygon(76% 0, 100% 0, 100% 100%, 50% 100%)" }}
            />
            <img
              src="/home/dome.jpg"
              alt=""
              className="absolute top-0 right-0 h-36 w-44 object-cover sm:h-44 sm:w-56"
              style={{ clipPath: "polygon(28% 0, 100% 0, 100% 100%, 0 62%)" }}
            />
          </div>
        </div>
      </section>

      <section className="shell py-20">
        <div className="flex items-end justify-between gap-4">
          <h2 className="display text-4xl">From the desk</h2>
          <Link href="/news" className="text-sm font-semibold text-crimson hover:underline">
            All notes
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {stories.map((story) => (
            <Link
              key={story.slug}
              href={`/news/${story.slug}`}
              className="overflow-hidden rounded-3xl bg-white hover:shadow-md"
            >
              <img src={story.image} alt={story.imageAlt} className="aspect-[16/10] w-full object-cover" />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{story.date}</p>
                <h3 className="display mt-3 text-2xl leading-snug">{story.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{story.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="shell pb-20">
        <div className="grid items-center gap-8 rounded-[2rem] bg-ink px-6 py-10 text-paper md:grid-cols-[1.4fr_auto] md:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Careers</p>
            <h2 className="display mt-3 text-4xl">Officers, controllers, and technicians</h2>
            <p className="mt-4 max-w-xl leading-7 text-sand">
              Posts are published with the location and the shift. Walk-in introductions are held on Tuesday mornings
              at the Nakasero office.
            </p>
          </div>
          <Link
            href="/careers"
            className="rounded-full bg-gold px-6 py-3 text-center text-sm font-semibold text-ink hover:bg-gold-2"
          >
            View open roles
          </Link>
        </div>
      </section>
    </>
  );
}
