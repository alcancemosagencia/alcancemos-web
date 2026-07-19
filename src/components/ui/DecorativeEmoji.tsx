"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

type DecorativeEmojiProps = {
  src: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
  rotate?: number;
  className?: string;
  priority?: boolean;
};

const sizes = {
  sm: "h-10 w-10 sm:h-[42px] sm:w-[42px]",
  md: "h-11 w-11 sm:h-[58px] sm:w-[58px]",
  lg: "h-12 w-12 sm:h-[76px] sm:w-[76px]",
} as const;

export function DecorativeEmoji({ src, alt = "", size = "md", rotate = 0, className, priority = false }: DecorativeEmojiProps) {
  const reduceMotion = useReducedMotion();
  const decorative = alt.length === 0;

  return (
    <motion.span
      aria-hidden={decorative || undefined}
      initial={reduceMotion ? false : { opacity: 0, y: 9, rotate: rotate - 3 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, rotate }}
      whileHover={reduceMotion ? undefined : { y: -3, scale: 1.03 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn("relative inline-flex shrink-0 align-[-0.18em]", sizes[size], className)}
    >
      <Image src={src} alt={alt} fill sizes={size === "lg" ? "76px" : size === "md" ? "58px" : "42px"} className="object-contain" priority={priority} />
    </motion.span>
  );
}
