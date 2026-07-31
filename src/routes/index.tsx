import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Trophy, Users, Waves } from "lucide-react";
import heroImg from "@/assets/hero-pool.jpg";
import { LEAGUE } from "@/data/league";
import { TEAMS } from "@/data/teams";
import { FINALS_HIGH_POINT, DUAL_MEET_CHAMPIONS } from "@/data/champions";
import { SectionHeading } from "@/components/section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yankee Swim League — Connecticut Youth Swimming" },
      {
        name: "description",
        content:
          "The Yankee Swim League brings Connecticut's youth competitive swim clubs together for dual meets, trials, finals, and All Stars each season.",
      },
      { property: "og:title", content: "Yankee Swim League" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const latestChamp = DUAL_MEET_CHAMPIONS[0];
  const latestFinals = FINALS_HIGH_POINT[0];

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <img
          src={heroImg}
          alt="Competitive swimmer racing through a pool lane"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/20"
        />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="max-w-3xl">
            <p className="eyebrow text-accent">Est. Connecticut · {LEAGUE.seasons} seasons</p>
            <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Competition.
              <br />
              Camaraderie.
              <br />
              <span className="text-accent">Excellence.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-primary-foreground/85 sm:text-lg">
              {LEAGUE.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/schedule"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:bg-accent/90"
              >
                <Calendar className="h-4 w-4" /> View schedule
              </Link>
              <Link
                to="/teams"
                className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground backdrop-blur transition-colors hover:bg-white/10"
              >
                Meet the teams <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STAT STRIP */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden bg-border sm:grid-cols-4">
          {[
            { icon: Users, label: "Member Clubs", value: `${LEAGUE.teamsCount}` },
            { icon: Waves, label: "Season", value: "Nov – Feb" },
            { icon: Trophy, label: "History", value: `${LEAGUE.seasons} yrs` },
            { icon: Calendar, label: "Postseason", value: "2 weeks" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-4 bg-background p-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="eyebrow text-muted-foreground">{label}</p>
                <p className="mt-1 font-display text-2xl font-bold text-foreground">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAMS STRIP */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="The League"
              title="Seven clubs. One league."
              description="Teams span the state of Connecticut."
            />
            <Link
              to="/teams"
              className="inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-secondary hover:text-primary"
            >
              All teams <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {TEAMS.map((t) => (
              <li
                key={t.slug}
                className="group relative overflow-hidden rounded-md border border-border bg-card p-4 transition-colors hover:border-secondary"
              >
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-1"
                  style={{ background: t.colors[0] }}
                />
                <p className="eyebrow text-muted-foreground">{t.town}</p>
                <p className="mt-1 font-display text-lg font-bold leading-tight text-foreground group-hover:text-primary">
                  {t.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* RECENT CHAMPIONS */}
      <section className="bg-primary py-16 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="eyebrow text-accent">Recent Champions</p>
              <h2 className="mt-2 font-display text-3xl font-bold uppercase sm:text-4xl">
                Every season ends with a champion.
              </h2>
              <p className="mt-4 max-w-xl text-primary-foreground/80">
                The Yankee League Championship meet in February crowns a champion against the rest.
              </p>
              <Link
                to="/results"
                className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-accent hover:text-primary-foreground"
              >
                Full results history <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4">
              <div className="rounded-md border border-white/15 bg-white/5 p-6 backdrop-blur">
                <p className="eyebrow text-primary-foreground/60">
                  {latestChamp.year} Dual Meet Champion
                </p>
                <p className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                  {Array.isArray(latestChamp.team) ? latestChamp.team.join(" & ") : latestChamp.team}
                </p>
              </div>
              <div className="rounded-md border border-white/15 bg-white/5 p-6 backdrop-blur">
                <p className="eyebrow text-primary-foreground/60">
                  {latestFinals.year} Finals High Point
                </p>
                <ol className="mt-3 space-y-1 text-sm text-primary-foreground/90">
                  <li><span className="font-display font-bold text-accent">1.</span> {latestFinals.first}</li>
                  <li><span className="font-display font-bold">2.</span> {latestFinals.second}</li>
                  <li><span className="font-display font-bold">3.</span> {latestFinals.third}</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-border bg-card p-8 sm:p-12">
            <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
              <div className="min-w-0">
                <p className="eyebrow text-accent">Ready to swim?</p>
                <h2 className="mt-2 font-display text-3xl font-bold uppercase text-foreground">
                  Join a Yankee League club this season.
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Registration runs each fall through member clubs. Contact your
                  local team or the league office to get started.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 sm:shrink-0">
                <Link
                  to="/teams"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground hover:bg-secondary"
                >
                  Teams
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold uppercase tracking-wide text-foreground hover:bg-muted"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
