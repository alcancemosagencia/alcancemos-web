import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
}: SectionHeadingProps) {
  const parts = highlight ? title.split(highlight) : [title];
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <span className="text-[12px] font-medium tracking-tight text-accent">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-3 text-[clamp(2.2rem,4.5vw,3.8rem)] font-medium leading-[1.06] tracking-[-0.035em] text-heading">
        {highlight && parts.length > 1 ? (
          <>
            {parts[0]}
            <span className="text-accent">{highlight}</span>
            {parts.slice(1).join(highlight)}
          </>
        ) : (
          title
        )}
      </h2>
      {description ? (
        <p className="mt-5 text-[16px] leading-[1.7] text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
