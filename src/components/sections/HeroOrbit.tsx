"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const platforms = [
  { name: "Meta", position: "left-[2%] top-[42%] sm:left-[8%] sm:top-[36%]", depth: "scale-[0.9] opacity-65", distance: -5, duration: 10.8, delay: 0 },
  { name: "Google Ads", position: "left-[18%] top-[4%] sm:left-[23%]", depth: "scale-105 opacity-90", distance: 8, duration: 13.2, delay: 0.8 },
  { name: "Analytics", position: "right-[15%] top-[10%] sm:right-[20%]", depth: "scale-[0.84] opacity-55 blur-[0.2px]", distance: -7, duration: 11.7, delay: 1.4 },
  { name: "Shopify", position: "right-[1%] top-[43%] sm:right-[7%]", depth: "scale-110 opacity-95", distance: 6, duration: 14.6, delay: 0.4 },
  { name: "WordPress", position: "bottom-[2%] right-[16%] sm:right-[24%]", depth: "scale-[0.82] opacity-60 blur-[0.15px]", distance: -6, duration: 12.5, delay: 1.8 },
  { name: "WhatsApp", position: "bottom-[8%] left-[13%] sm:left-[19%]", depth: "scale-95 opacity-80", distance: 7, duration: 13.8, delay: 1.1 },
] as const;

export function HeroOrbit() {
  const reduceMotion = useReducedMotion();

  return (
    <div role="img" aria-label="Ecosistema de plataformas de marketing digital alrededor de Alcancemos" className="relative mx-auto mt-16 aspect-[1.45] w-full max-w-4xl sm:mt-24">
      <div aria-hidden className="absolute inset-x-[11%] inset-y-[15%] -rotate-[3deg] rounded-[48%] border border-heading/[0.085] sm:inset-x-[9%] sm:inset-y-[13%]" />
      <div aria-hidden className="absolute inset-x-[25%] inset-y-[22%] rotate-[5deg] rounded-[46%] border border-dashed border-accent/15" />
      <div aria-hidden className="absolute left-1/2 top-1/2 h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-3xl" />
      <motion.div animate={reduceMotion ? undefined : { y: [0, -4, 1, 0], rotate: [0, 0.8, -0.4, 0] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[49%] top-[51%] flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-white shadow-[0_26px_72px_rgba(4,1,18,0.115)] sm:h-32 sm:w-32">
        <Image src="/brand/alcancemos-favicon.png" alt="Alcancemos" width={128} height={128} className="h-[58%] w-[58%] object-contain" priority />
      </motion.div>
      {platforms.map((platform, index) => (
        <motion.span key={platform.name} animate={reduceMotion ? undefined : { y: [0, platform.distance, 0], x: [0, index % 2 ? 2 : -2, 0] }} transition={{ duration: platform.duration, delay: platform.delay, repeat: Infinity, ease: "easeInOut" }} className={`absolute ${platform.position} ${platform.depth} inline-flex min-h-10 items-center rounded-full border border-heading/[0.09] bg-white/90 px-3.5 py-2 text-[0.65rem] font-semibold text-heading shadow-[0_16px_44px_rgba(4,1,18,0.065)] backdrop-blur-md sm:min-h-12 sm:px-5 sm:text-sm`}>
          <span aria-hidden className="mr-2 h-1.5 w-1.5 rounded-full bg-accent" />{platform.name}
        </motion.span>
      ))}
    </div>
  );
}
