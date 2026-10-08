import type { ReactNode } from "react";

export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  /** Compatibility only: entrance staggering is intentionally disabled. */
  delay?: number;
}) {
  return <div className={className}>{children}</div>;
}
