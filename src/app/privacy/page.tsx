import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How this Pearlcrest Security demonstration handles information you type into the contact form.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="What this site does with a message"
        lede="The contact form confirms your note in the browser. It does not send it to a server."
      />
      <section className="shell max-w-3xl space-y-5 py-16 text-lg leading-8">
        <p>
          {company.legalName} on this website is a fictional firm. The pages are a frontend demonstration. Do not
          send real personal information you would not want left on this device.
        </p>
        <p>
          If you submit the form, the details stay in the page long enough to show a confirmation. Refreshing the
          page clears them. There is no account, no tracking cookie, and no mailing list.
        </p>
        <p>
          A live version of a site like this should say who receives the enquiry, how long it is kept, and how to
          ask for it to be deleted. Those lines belong to the real company that operates the form.
        </p>
      </section>
    </>
  );
}
