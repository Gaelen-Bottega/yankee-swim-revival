import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeading} from "@/components/section";
import { OFFICERS } from "@/data/officers";
import { Mail, MapPin, Users } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Yankee Swim League" },
      {
        name: "description",
        content:
          "Contact the Yankee Swim League — reach the board of officers, the league office, or a member club.",
      },
      { property: "og:title", content: "Contact the Yankee Swim League" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const president = OFFICERS.find((o) => o.role === "President");

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact the league"
        description="Questions about registration, meets, records, or joining a club? Reach the board directly."
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Board Contacts"
            title="Yankee League Officers"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {OFFICERS.map((o) => (
              <article
                key={o.role}
                className="flex items-start gap-4 rounded-md border border-border bg-card p-6"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground">
                  <Users className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="eyebrow text-accent">{o.role}</p>
                  <p className="mt-1 font-display text-xl font-bold text-foreground">
                    {o.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{o.team}</p>
                  {o.email ? (
                    <a
                      href={`mailto:${o.email}`}
                      className="mt-2 inline-flex items-center gap-2 break-all text-sm font-medium text-secondary hover:text-primary"
                    >
                      <Mail className="h-4 w-4 shrink-0" /> {o.email}
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="League Office"
                title="Send us a note"
                description="The best way to reach the league is by emailing the current president. For team-specific questions, contact your club directly."
              />
              <div className="mt-6 space-y-4 text-sm">
                {president?.email ? (
                  <a
                    href={`mailto:${president.email}`}
                    className="flex items-center gap-3 rounded-md border border-border bg-card p-4 hover:border-secondary"
                  >
                    <Mail className="h-5 w-5 text-secondary" />
                    <span className="min-w-0 break-all font-medium text-foreground">
                      {president.email}
                    </span>
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
