import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow text-accent">{eyebrow}</p> : null}
      <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20 [background:linear-gradient(115deg,transparent_45%,var(--color-accent)_45%_46%,transparent_46%_60%,var(--color-royal)_60%_61%,transparent_61%)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <p className="eyebrow text-accent">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base text-primary-foreground/80 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}

export function PlaceholderNotice({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md border border-dashed border-accent/60 bg-accent/5 p-4 text-sm text-foreground">
      <p className="eyebrow mb-1 text-accent">Placeholder content</p>
      <div className="text-muted-foreground">{children}</div>
    </div>
  );
}
