import { cn } from "@/lib/utils";

type SectionHeadingProps = { eyebrow?: string; title: string; highlight?: string; description?: string; align?: "left" | "center"; };

export function SectionHeading({ eyebrow, title, highlight, description, align = "left" }: SectionHeadingProps) {
  const parts = highlight ? title.split(highlight) : [title];
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-accent">{eyebrow}</p> : null}
      <h2 className="text-balance text-[clamp(2.65rem,5.7vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-heading">
        {highlight && parts.length > 1 ? <>{parts[0]}<em className="font-display font-medium italic">{highlight}</em>{parts.slice(1).join(highlight)}</> : title}
      </h2>
      {description ? <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted">{description}</p> : null}
    </div>
  );
}
