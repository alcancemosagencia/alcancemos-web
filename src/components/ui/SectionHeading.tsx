import { cn } from "@/lib/utils";

type SectionHeadingProps = { eyebrow?: string; title: string; highlight?: string; description?: string; align?: "left" | "center"; };

export function SectionHeading({ eyebrow, title, highlight, description, align = "left" }: SectionHeadingProps) {
  const parts = highlight ? title.split(highlight) : [title];
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-accent">{eyebrow}</p> : null}
      <h2 className="text-balance text-4xl font-semibold tracking-[-0.04em] text-heading sm:text-5xl">
        {highlight && parts.length > 1 ? <>{parts[0]}<em className="font-display font-medium italic">{highlight}</em>{parts.slice(1).join(highlight)}</> : title}
      </h2>
      {description ? <p className="mt-5 text-pretty text-lg leading-8 text-muted">{description}</p> : null}
    </div>
  );
}
