import Link from "next/link";
import { Logo } from "@/components/Logo";
import { company, offices, services } from "@/lib/site";

async function CopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await CopyrightYear();

  return (
    <footer className="bg-deep text-sand">
      <div className="shell grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-6">
            {company.legalName}. An independent security firm planned from Kampala for sites across Uganda.
          </p>
          <p className="mt-4 text-sm leading-6">
            {company.address}
            <br />
            {company.poBox}
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Services</p>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link className="hover:text-gold" href={`/services/${service.slug}`}>
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Company</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link className="hover:text-gold" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-gold" href="/locations">
                Locations
              </Link>
            </li>
            <li>
              <Link className="hover:text-gold" href="/careers">
                Careers
              </Link>
            </li>
            <li>
              <Link className="hover:text-gold" href="/news">
                News
              </Link>
            </li>
            <li>
              <Link className="hover:text-gold" href="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="hover:text-gold" href="/privacy">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Speak to us</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a className="hover:text-gold" href={`tel:${company.phoneHref}`}>
                Front office {company.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="hover:text-gold" href={`tel:${company.deskHref}`}>
                Operations desk {company.deskDisplay}
              </a>
            </li>
            <li>
              <a className="hover:text-gold" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </li>
            <li>
              <a className="hover:text-gold" href={`mailto:${company.salesEmail}`}>
                {company.salesEmail}
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs leading-5 text-sand/70">{offices.length} offices, one control room.</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-2 py-5 text-xs text-sand/70 sm:flex-row sm:justify-between">
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
          <p>Sample website. Pearlcrest Security is a fictional firm. Designed and developed by LUQMANshadow </p>
        </div>
      </div>
    </footer>
  );
}
