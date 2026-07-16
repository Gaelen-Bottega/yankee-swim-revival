import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeading, PlaceholderNotice } from "@/components/section";
import { DUAL_MEET_CHAMPIONS, FINALS_HIGH_POINT } from "@/data/champions";
import { Trophy, Medal, Award } from "lucide-react";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results — Yankee Swim League" },
      {
        name: "description",
        content:
          "Season results and champions of the Yankee Swim League — dual meet champions and Finals High Point Award winners across the years.",
      },
      { property: "og:title", content: "YSL Season Results" },
      { property: "og:url", content: "/results" },
    ],
    links: [{ rel: "canonical", href: "/results" }],
  }),
  component: ResultsPage,
});

function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Results & Champions"
        title="Season results archive"
        description="Every season ends with a scoreboard. Below are the dual meet champions and Finals High Point Award winners preserved from the league's history."
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Dual Meet Champions"
            title="Best regular-season record"
            description="Each year, the team with the best record during the dual meet season is awarded the Dual Meet Championship Trophy at Yankee League Championships. In the event of a tie, both teams are awarded the championship."
          />
          <div className="mt-8 overflow-hidden rounded-md border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-4 py-3 font-display font-semibold uppercase">Year</th>
                  <th className="px-4 py-3 font-display font-semibold uppercase">Dual Meet Champion</th>
                  <th className="hidden px-4 py-3 font-display font-semibold uppercase sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                {DUAL_MEET_CHAMPIONS.map((c) => (
                  <tr key={c.year} className="odd:bg-muted/40">
                    <td className="px-4 py-3 font-display font-bold text-primary">{c.year}</td>
                    <td className="px-4 py-3 text-foreground">
                      {Array.isArray(c.team) ? c.team.join(" & ") : c.team}
                    </td>
                    <td className="hidden px-4 py-3 text-muted-foreground sm:table-cell">
                      {c.note ?? "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Finals High Point Award"
            title="Top three teams at Championships"
            description="Awards are presented to the three highest overall scoring teams at Yankee League Finals."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FINALS_HIGH_POINT.map((r) => (
              <article
                key={r.year}
                className="rounded-md border border-border bg-card p-6"
              >
                <p className="eyebrow text-accent">Season {r.year}</p>
                <ol className="mt-4 space-y-3">
                  <li className="flex items-start gap-3">
                    <Trophy className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>
                      <span className="eyebrow block text-muted-foreground">1st</span>
                      <span className="font-display text-base font-bold text-foreground">{r.first}</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Medal className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <span>
                      <span className="eyebrow block text-muted-foreground">2nd</span>
                      <span className="font-display text-base font-bold text-foreground">{r.second}</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>
                      <span className="eyebrow block text-muted-foreground">3rd</span>
                      <span className="font-display text-base font-bold text-foreground">{r.third}</span>
                    </span>
                  </li>
                </ol>
              </article>
            ))}
          </div>

          <div className="mt-10 max-w-3xl">
            <PlaceholderNotice>
              Season-by-season individual event results and dual meet scores
              beyond those shown are not preserved in the historical archive.
              If your club has additional records to contribute, please contact
              the league.
            </PlaceholderNotice>
          </div>
        </div>
      </section>
    </>
  );
}
