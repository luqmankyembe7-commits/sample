"use client";

import { FormEvent, useState } from "react";
import { services } from "@/lib/site";

const baseInterests = [
  "General enquiry",
  ...services.map((service) => service.name),
  "Careers",
  "Existing client",
];

export function ContactForm({ interest = "General enquiry" }: { interest?: string }) {
  const interests = baseInterests.includes(interest) ? baseInterests : [interest, ...baseInterests];
  const initial = interest;
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const name = String(data.get("name") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Add your name, a valid email, and a short note so we know what to prepare.");
      return;
    }
    if (phone && !/^[0-9+\s()-]{7,}$/.test(phone)) {
      setError("Check the phone number, or leave it blank.");
      return;
    }
    setError("");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-gold/40 bg-ink p-8 text-paper" role="status">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Request received</p>
        <h2 className="display mt-3 text-3xl">We have your note.</h2>
        <p className="mt-4 leading-7 text-sand">
          This demonstration stores the message only on this page. A coordinator at a live firm would reply on
          the next business day. For an urgent deployment, call the operations desk.
        </p>
      </div>
    );
  }

  return (
    <form
      key={initial}
      onSubmit={onSubmit}
      className="rounded-3xl border border-sand bg-white p-6 shadow-sm md:p-8"
      noValidate
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-medium">
          Name
          <input
            name="name"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-xl border border-sand bg-paper px-3 py-3 outline-none"
          />
        </label>
        <label className="block text-sm font-medium">
          Organisation
          <input
            name="organisation"
            autoComplete="organization"
            className="mt-2 w-full rounded-xl border border-sand bg-paper px-3 py-3 outline-none"
          />
        </label>
        <label className="block text-sm font-medium">
          Email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-xl border border-sand bg-paper px-3 py-3 outline-none"
          />
        </label>
        <label className="block text-sm font-medium">
          Phone
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-2 w-full rounded-xl border border-sand bg-paper px-3 py-3 outline-none"
          />
        </label>
        <label className="block text-sm font-medium md:col-span-2">
          What do you need?
          <select
            name="interest"
            defaultValue={initial}
            className="mt-2 w-full rounded-xl border border-sand bg-paper px-3 py-3 outline-none"
          >
            {interests.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium md:col-span-2">
          How can we help?
          <textarea
            name="message"
            required
            rows={5}
            className="mt-2 w-full rounded-xl border border-sand bg-paper px-3 py-3 outline-none"
          />
        </label>
      </div>
      {error ? (
        <p className="mt-4 text-sm text-crimson" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        className="mt-6 rounded-full bg-crimson px-6 py-3 text-sm font-semibold text-white hover:bg-[#a82e25]"
      >
        Request a briefing
      </button>
    </form>
  );
}
