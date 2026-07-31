import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PlaceholderNotice } from "@/components/section";
import { TEAMS } from "@/data/teams";

export const Route = createFileRoute("/teams")({
  head: () => ({
    meta: [
      { title: "Teams — Yankee Swim League" },
      {
        name: "description",
        content:
          "Member clubs of the Yankee Swim League, competing across Connecticut in the dual meet season and YSL postseason.",
      },
      { property: "og:title", content: "YSL Member Teams" },
      { property: "og:url", content: "/teams" },
    ],
    links: [{ rel: "canonical", href: "/teams" }],
  }),
  component: TeamsPage,
});

function TeamsPage() {
  return (
    <>
      <PageHero
        eyebrow="Member Clubs"
        title="Meet the Yankee League teams"
        description="Seven Connecticut communities compete each season in the Yankee Swim League."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 rounded-md border border-border bg-muted/50 p-4 text-center text-sm text-muted-foreground">
            Click on a team below to visit their website and learn more about their
            program, coaches, facilities, and upcoming events.
          </div>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TEAMS.map((t) => (
            <li key={t.slug}>
              <a
                href={t.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <article className="group relative flex h-full flex-col overflow-hidden rounded-md border border-border bg-card transition-shadow hover:shadow-lg">
                  <div
                    className="h-24 w-full"
                    style={{
                      background: `linear-gradient(120deg, ${t.colors[0]} 0%, ${t.colors[0]} 55%, ${t.colors[1]} 55%, ${t.colors[1]} 100%)`,
                    }}
                    aria-hidden
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <p className="eyebrow text-muted-foreground">{t.town}</p>
                    <h2 className="mt-2 font-display text-2xl font-bold uppercase leading-tight text-foreground group-hover:text-primary">
                      {t.name}
                    </h2>
                  </div>
                </article>
              </a>
            </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
