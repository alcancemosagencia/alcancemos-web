import Link from "next/link";
import type { ReactNode, MouseEventHandler } from "react";
import { cn } from "@/lib/utils";

interface BaseButtonProps {
  variant?: "primary" | "secondary";
  size?: "normal" | "large";
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

type ButtonAsLink = BaseButtonProps & {
  href: string;
  external?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  type?: never;
  disabled?: never;
};

type ButtonAsButton = BaseButtonProps & {
  href?: never;
  external?: never;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({
  href,
  variant = "primary",
  size = "normal",
  icon,
  external,
  children,
  className,
  onClick,
  disabled,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-medium tracking-[-0.01em] transition-all duration-200 ease-out active:translate-y-0 active:scale-[0.985] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
    size === "large"
      ? "min-h-[48px] px-6 py-2.5 text-[15px] rounded-[14px]"
      : "min-h-[40px] px-4 py-2 text-[13.5px] rounded-[12px]",
    variant === "primary"
      ? "bg-white text-[#0F0F10] font-semibold shadow-[0_1px_2px_rgba(0,0,0,0.3),0_6px_20px_rgba(255,255,255,0.06)] hover:-translate-y-0.5 hover:bg-neutral-100 hover:shadow-[0_8px_24px_rgba(255,255,255,0.1)] border border-white"
      : "border border-white/[0.08] bg-[#161618] text-[#F4F4F6] shadow-[0_1px_2px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 hover:bg-[#1E1E22] hover:border-white/[0.18]",
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noreferrer"
          onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
          {...props}
        >
          {children}
          {icon}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
        {...props}
      >
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
      className={classes}
      {...props}
    >
      {children}
      {icon}
    </button>
  );
}
