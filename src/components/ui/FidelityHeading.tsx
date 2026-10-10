import type { ReactNode } from "react";
import { WordBlurReveal } from "@/components/ui/WordBlurReveal";

export function FidelityHeading({ label, children, description, wordReveal = false }: { label: string; children: ReactNode; description?: ReactNode; wordReveal?: boolean }) {
  const heading = <h2>{children}</h2>;
  return <div className="v3-heading"><span className="v3-label">{label}</span>{wordReveal ? <WordBlurReveal>{heading}</WordBlurReveal> : heading}{description ? <p>{description}</p> : null}</div>;
}
