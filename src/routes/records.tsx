import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeading } from "@/components/section";
import { DUAL_MEET_RECORDS } from "@/data/records";

export const Route = createFileRoute("/records")({
  head: () => ({
    meta: [
      { title: "Records — Yankee Swim League" },
      {
        name: "description",
        content:
          "Yankee Swim League dual meet records by age group and event, spanning decades of Connecticut youth swimming.",
      },
      { property: "og:title", content: "YSL Dual Meet Records" },
      { property: "og:url", content: "/records" },
    ],
    links: [{ rel: "canonical", href: "/records" }],
  }),
  component: RecordsPage,
});

function RecordsPage() {
  return (
    <>
      <PageHero
        eyebrow="League Records"
        title="Dual meet records"
        description="Dual meet records can be broken at any official Yankee Swim League meet or postseason event. Criteria for records is addressed in Article VI of the Constitution."
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
          {DUAL_MEET_RECORDS.map((group) => (
            <div key={group.group}>
              <SectionHeading eyebrow="Age Group" title={group.group} />
              <div className="mt-6 overflow-hidden rounded-md border border-border">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[560px] text-left text-sm">
                    <thead className="bg-primary text-primary-foreground">
                      <tr>
                        <th className="px-4 py-3 font-display font-semibold uppercase">Event</th>
                        <th className="px-4 py-3 font-display font-semibold uppercase">Time</th>
                        <th className="px-4 py-3 font-display font-semibold uppercase">Swimmer</th>
                        <th className="px-4 py-3 font-display font-semibold uppercase">Team</th>
                        <th className="px-4 py-3 font-display font-semibold uppercase">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-card">
                      {group.rows.map((r, i) => (
                        <tr key={i} className="odd:bg-muted/40">
                          <td className="px-4 py-3 font-medium text-foreground">{r.event}</td>
                          <td className="px-4 py-3 font-display font-bold text-accent">{r.time}</td>
                          <td className="px-4 py-3 text-foreground">{r.swimmer}</td>
                          <td className="px-4 py-3 text-muted-foreground">{r.team}</td>
                          <td className="px-4 py-3 text-muted-foreground">{r.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
