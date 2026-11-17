"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { company, services } from "@/lib/site";

const links = [
  { href: "/about", label: "About" },
  { href: "/locations", label: "Locations" },
  { href: "/news", label: "News" },
  { href: "/careers", label: "Careers" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const onServices = pathname.startsWith("/services");

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-deep text-sand">
        <div className="shell flex items-center justify-between gap-4 py-2 text-xs">
          <p>
            24-hour desk{" "}
            <a className="font-semibold text-gold-2 hover:text-gold" href={`tel:${company.deskHref}`}>
              {company.deskDisplay}
            </a>
          </p>
          <div className="flex items-center gap-4">
            <Link className="hover:text-gold" href="/contact?interest=Existing%20client">
              Client desk
            </Link>
            <Link className="hidden hover:text-gold sm:inline" href="/careers">
              Join the team
            </Link>
          </div>
        </div>
      </div>
      <div className="border-b border-white/10 bg-ink/95 text-paper backdrop-blur">
        <div className="shell flex items-center justify-between gap-6 py-3">
          <Link href="/" aria-label="Pearlcrest Security home">
            <Logo />
          </Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            <Link
              href="/about"
              className={`rounded-full px-3 py-2 text-sm ${pathname === "/about" ? "text-gold" : "hover:text-gold"}`}
            >
              About
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className={`rounded-full px-3 py-2 text-sm ${onServices ? "text-gold" : "hover:text-gold"}`}
                aria-expanded={servicesOpen}
                aria-controls="services-menu"
                onClick={() => setServicesOpen((value) => !value)}
              >
                Services
              </button>
              {servicesOpen ? (
                <div
                  id="services-menu"
                  className="absolute left-0 top-full w-80 rounded-2xl border border-line bg-navy p-3 shadow-2xl"
                >
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block rounded-xl px-3 py-2.5 hover:bg-panel"
                    >
                      <span className="block text-sm font-semibold">{service.name}</span>
                      <span className="mt-0.5 block text-xs leading-5 text-sand/80">{service.summary}</span>
                    </Link>
                  ))}
                  <Link href="/services" className="mt-1 block px-3 py-2 text-sm font-semibold text-gold">
                    All services
                  </Link>
                </div>
              ) : null}
            </div>
            {links.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-2 text-sm ${pathname === link.href ? "text-gold" : "hover:text-gold"}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 rounded-full bg-crimson px-4 py-2 text-sm font-semibold text-white hover:bg-[#a82e25]"
            >
              Contact us
            </Link>
          </nav>
          <button
            type="button"
            className="rounded-full border border-white/20 px-3 py-2 text-sm lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
        {open ? (
          <nav id="mobile-nav" className="shell space-y-1 pb-5 lg:hidden" aria-label="Mobile">
            <Link className="block rounded-xl px-3 py-3 hover:bg-navy" href="/about">
              About
            </Link>
            <p className="px-3 pt-2 text-xs uppercase tracking-[0.18em] text-gold">Services</p>
            {services.map((service) => (
              <Link
                key={service.slug}
                className="block rounded-xl px-3 py-2 text-sm text-sand hover:bg-navy hover:text-paper"
                href={`/services/${service.slug}`}
              >
                {service.name}
              </Link>
            ))}
            {links.slice(1).map((link) => (
              <Link key={link.href} className="block rounded-xl px-3 py-3 hover:bg-navy" href={link.href}>
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 block rounded-full bg-crimson px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Contact us
            </Link>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
