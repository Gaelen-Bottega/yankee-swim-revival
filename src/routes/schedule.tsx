import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeading, PlaceholderNotice } from "@/components/section";
import { SCHEDULE, POSTSEASON } from "@/data/schedule";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Schedule — Yankee Swim League" },
      {
        name: "description",
        content:
          "Yankee Swim League season schedule — dual meets from November through February, plus the two-week postseason of Finals and All Stars.",
      },
      { property: "og:title", content: "YSL Season Schedule" },
      { property: "og:url", content: "/schedule" },
    ],
    links: [{ rel: "canonical", href: "/schedule" }],
  }),
  component: SchedulePage,
});

function SchedulePage() {
  const weeks = Array.from(new Set(SCHEDULE.map((m) => m.week)));

  return (
    <>
      <PageHero
        eyebrow="Season Schedule"
        title="Dual meets & postseason"
        description="The Yankee Swim League dual meet season runs November through February. Each team swims every other team at least once, producing the meet schedule. The postseason unfolds over two consecutive weeks."
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Dual Meet Season" title="Weekly schedule" />
          <div className="mt-8 space-y-8">
            {weeks.map((week) => (
              <div key={week}>
                <h3 className="font-display text-xl font-bold uppercase text-primary">
                  {week}
                </h3>
                <div className="mt-3 overflow-x-auto rounded-md border border-border">
                  <table className="w-full text-left text-sm sm:table-fixed">
                    <thead className="bg-primary text-primary-foreground">
                      <tr>
                        <th className="w-[18%] px-4 py-3">Date</th>
                        <th className="w-[27%] px-4 py-3">Home</th>
                        <th className="w-[27%] px-4 py-3">Away</th>
                        <th className="hidden w-[28%] px-4 py-3 sm:table-cell">Venue</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-card">
                      {SCHEDULE.filter((m) => m.week === week).map((m, i) => (
                        <tr key={i} className="odd:bg-muted/40">
                          <td className="px-2 py-3 text-xs font-medium text-foreground break-words sm:px-4 sm:text-sm">
                            {m.date}
                          </td>

                          <td className="px-2 py-3 text-xs text-foreground sm:px-4 sm:text-sm">
                            <span className="block leading-tight">{m.home}</span>
                          </td>

                          <td className="px-2 py-3 text-xs text-muted-foreground sm:px-4 sm:text-sm">
                            <span className="block leading-tight">{m.away}</span>
                          </td>

                          <td className="hidden px-4 py-3 text-muted-foreground sm:table-cell">
                            {m.venue}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Postseason"
            title="Two weeks. Seven teams. One champion."
            description="Yankee League Championships and All Stars unfold over two consecutive weeks — the culmination of every swimmer's season."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {POSTSEASON.map((p) => (
              <article
                key={p.name}
                className="rounded-md border border-border bg-card p-6"
              >
                <p className="eyebrow text-accent">{p.date}</p>
                <h3 className="mt-2 font-display text-xl font-bold uppercase text-foreground">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.venue}</p>
                <p className="mt-4 text-sm text-foreground/80">{p.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
