import { Link } from "@tanstack/react-router";
import { Waves } from "lucide-react";
import { NAV, LEAGUE } from "@/data/league";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-accent text-accent-foreground">
              <Waves className="h-4 w-4" aria-hidden />
            </span>
            <span className="font-display text-lg font-bold">{LEAGUE.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-primary-foreground/70">
            {LEAGUE.description}
          </p>
        </div>

        <div>
          <h3 className="eyebrow text-primary-foreground/60">Explore</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-primary-foreground/60">The League</h3>
          <dl className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <div>
              <dt className="inline text-primary-foreground/60">Region: </dt>
              <dd className="inline">Connecticut</dd>
            </div>
            <div>
              <dt className="inline text-primary-foreground/60">Teams: </dt>
              <dd className="inline">{LEAGUE.teamsCount} member clubs</dd>
            </div>
            <div>
              <dt className="inline text-primary-foreground/60">Season: </dt>
              <dd className="inline">November – February</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {LEAGUE.name}. All rights reserved.</p>
          <p className="italic">{LEAGUE.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
