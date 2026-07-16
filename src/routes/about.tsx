import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeading, PlaceholderNotice } from "@/components/section";
import { OFFICERS, OFFICERS_NOTE } from "@/data/officers";
import { LEAGUE } from "@/data/league";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Yankee Swim League" },
      {
        name: "description",
        content:
          "About the Yankee Swim League — Connecticut's youth competitive swim league of member clubs, its purpose, governance, and current officers.",
      },
      { property: "og:title", content: "About the Yankee Swim League" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the League"
        title="A tradition of youth swimming in Connecticut"
        description={LEAGUE.description}
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Mission"
            title="Training, competition, and character."
          />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              The Yankee Swim League is comprised of teams located throughout the
              state of Connecticut and has a long, proud history spanning more
              than three decades. The purpose of the league is to provide
              extensive swim training and competition to the youth across the
              state while emphasizing self-improvement, good sportsmanship, and
              fun.
            </p>
            <p>
              The coaches of the Yankee League are drawn together by a mutual
              dedication to the sport of swimming, the youth of Connecticut, and
              a respect for one another. Together, we have worked hard to become
              a thriving, ever-improving sports league that strives to give back
              to the sport that has given us so much.
            </p>
            <p>
              The purpose of this website is to serve as a resource for coaches,
              parents, and swimmers alike, and to preserve the history of this
              great state institution. We hope you enjoy what we have to offer
              and invite you to contact us with any questions or suggestions.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/40 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Governance"
            title="YSL Council & Officers"
            description={OFFICERS_NOTE}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {OFFICERS.map((o) => (
              <article
                key={o.role}
                className="rounded-md border border-border bg-card p-6"
              >
                <p className="eyebrow text-accent">{o.role}</p>
                <p className="mt-2 font-display text-xl font-bold text-foreground">
                  {o.name}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{o.team}</p>
                {o.email ? (
                  <a
                    href={`mailto:${o.email}`}
                    className="mt-3 inline-block break-all text-sm font-medium text-secondary hover:text-primary"
                  >
                    {o.email}
                  </a>
                ) : null}
              </article>
            ))}
          </div>
          <div className="mt-8">
            <PlaceholderNotice>
              Officer roster shown reflects the most recent board captured in
              the historical archive (2012–2013 season). Present-day officers
              may differ — contact the league to confirm.
            </PlaceholderNotice>
          </div>
        </div>
      </section>
    </>
  );
}
