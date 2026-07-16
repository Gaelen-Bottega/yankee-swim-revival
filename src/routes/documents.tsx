import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeading, PlaceholderNotice } from "@/components/section";
import { DOCUMENTS } from "@/data/documents";
import { FileText, Clock } from "lucide-react";

export const Route = createFileRoute("/documents")({
  head: () => ({
    meta: [
      { title: "Documents — Yankee Swim League" },
      {
        name: "description",
        content:
          "Yankee Swim League documents: constitution, rules of competition, registration forms, meet templates, and records forms.",
      },
      { property: "og:title", content: "YSL Documents & Forms" },
      { property: "og:url", content: "/documents" },
    ],
    links: [{ rel: "canonical", href: "/documents" }],
  }),
  component: DocumentsPage,
});

const CATEGORIES = ["Registration", "Rules", "Meets", "Records"] as const;

function DocumentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Downloads"
        title="Documents & forms"
        description="League governance, rules of competition, and forms for swimmers, coaches, and parents."
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
          {CATEGORIES.map((cat) => {
            const items = DOCUMENTS.filter((d) => d.category === cat);
            if (items.length === 0) return null;
            return (
              <div key={cat}>
                <SectionHeading eyebrow="Category" title={cat} />
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {items.map((d) => (
                    <li key={d.title}>
                      <article className="flex h-full items-start gap-4 rounded-md border border-border bg-card p-5">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground">
                          <FileText className="h-4 w-4" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-display text-base font-bold text-foreground">
                            {d.title}
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {d.description}
                          </p>
                          <p className="mt-3 inline-flex items-center gap-1.5 rounded-sm bg-accent/10 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                            <Clock className="h-3 w-3" /> Coming soon
                          </p>
                        </div>
                      </article>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          <PlaceholderNotice>
            Original PDF forms from the archived site are not available for
            re-hosting. This page lists the documents that historically lived
            on the YSL site so they can be restored as the league provides
            current versions.
          </PlaceholderNotice>
        </div>
      </section>
    </>
  );
}
