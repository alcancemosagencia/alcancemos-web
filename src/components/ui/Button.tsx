import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: "primary" | "secondary";
  size?: "normal" | "large";
  icon?: ReactNode;
  external?: boolean;
};

export function Button({ href, variant = "primary", size = "normal", icon, external, children, className, ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full border font-medium tracking-[-0.012em] transition duration-300 ease-out active:translate-y-0 active:scale-[0.985] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
    size === "large" ? "px-6 py-3 text-base" : "px-5 py-2.5 text-sm",
    variant === "primary" ? "border-accent bg-accent text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#e8065f]" : "border-border bg-white/70 text-heading hover:-translate-y-0.5 hover:border-heading/20",
    className,
  );
  if (external) return <a href={href} className={classes} target="_blank" rel="noreferrer" {...props}>{children}{icon}</a>;
  return <Link href={href} className={classes} {...props}>{children}{icon}</Link>;
}
