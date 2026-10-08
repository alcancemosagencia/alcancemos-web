import type { ReactNode } from "react";

export function FidelityHeading({ label, children, description }: { label: string; children: ReactNode; description?: ReactNode }) {
  return <div className="v3-heading"><span className="v3-label">{label}</span><h2>{children}</h2>{description ? <p>{description}</p> : null}</div>;
}
