import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionHeading, PlaceholderNotice } from "@/components/section";
import { CalendarDays, FileText, Mail, Users } from "lucide-react";

export const Route = createFileRoute("/registration")({
  head: () => ({
    meta: [
      { title: "Registration — Yankee Swim League" },
      {
        name: "description",
        content:
          "Register to swim with a Yankee Swim League member club — season timeline, requirements, and where to find registration forms.",
      },
      { property: "og:title", content: "YSL Registration" },
      { property: "og:url", content: "/registration" },
    ],
    links: [{ rel: "canonical", href: "/registration" }],
  }),
  component: RegistrationPage,
});

function RegistrationPage() {
  const steps = [
    {
      icon: Users,
      title: "Find your club",
      body: "Swimmers register through the YSL member club nearest to home. See the Teams page for the full list of clubs and towns served.",
    },
    {
      icon: FileText,
      title: "Complete the forms",
      body: "Each swimmer needs a registration form and a signed parent/guardian waiver. Forms are available from your club and on the Documents page.",
    },
    {
      icon: CalendarDays,
      title: "Attend the season",
      body: "Dual meets run November through February, followed by three weeks of postseason: Trials, Finals, and All Stars.",
    },
    {
      icon: Mail,
      title: "Questions?",
      body: "Reach out to the league office or a club coach directly through the Contact page.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Register to swim"
        description="Yankee Swim League registration runs each fall through member clubs. Here is how to get on the blocks."
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Four Steps"
            title="How to register"
          />
          <ol className="mt-10 grid gap-5 md:grid-cols-2">
            {steps.map(({ icon: Icon, title, body }, idx) => (
              <li
                key={title}
                className="relative rounded-md border border-border bg-card p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="eyebrow text-accent">Step {idx + 1}</p>
                    <h3 className="mt-1 font-display text-xl font-bold uppercase text-foreground">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/teams"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground hover:bg-secondary"
            >
              See member clubs
            </Link>
            <Link
              to="/documents"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold uppercase tracking-wide text-foreground hover:bg-muted"
            >
              Registration forms
            </Link>
          </div>

          <div className="mt-10 max-w-3xl">
            <PlaceholderNotice>
              Fees, exact registration dates, and try-out requirements vary by
              member club and were not preserved in the archived site. Contact
              your local club directly for current details.
            </PlaceholderNotice>
          </div>
        </div>
      </section>
    </>
  );
}
