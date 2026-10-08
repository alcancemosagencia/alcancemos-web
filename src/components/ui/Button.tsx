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
    "group inline-flex items-center justify-center gap-2 font-medium tracking-[-0.01em] transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111] disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
    size === "large"
      ? "min-h-[48px] px-6 py-2.5 text-[15px] rounded-[12px]"
      : "min-h-[44px] px-4 py-2 text-[13.5px] rounded-[12px]",
    variant === "primary"
      ? "bg-[#111111] text-white font-medium hover:bg-[#242427] border border-[#111111]"
      : "border border-black/[0.12] bg-white text-[#111111] hover:bg-[#F8F8F9] hover:border-black/[0.2]",
    className
  );

  const iconElement = icon ? (
    <span>
      {icon}
    </span>
  ) : null;

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
          {iconElement}
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
        {iconElement}
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
      {iconElement}
    </button>
  );
}
