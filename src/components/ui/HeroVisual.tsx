"use client";

import { ArrowUpRight, MousePointer2, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function HeroVisual() {
  const reduceMotion = useReducedMotion();
  const float = (distance: number, duration: number, delay = 0) =>
    reduceMotion
      ? undefined
      : { y: [0, -distance, 0], transition: { duration, delay, repeat: Infinity, ease: "easeInOut" as const } };

  return (
    <div aria-hidden="true" className="relative mx-auto aspect-[0.96] w-full max-w-[540px] sm:aspect-square lg:max-w-none">
      <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(255,7,105,0.13),rgba(255,255,255,0.72)_44%,rgba(248,248,248,0)_72%)] blur-2xl" />
      <div className="absolute inset-[13%] rounded-full border border-heading/[0.06]" />
      <div className="absolute inset-[25%] rounded-full border border-dashed border-accent/20" />

      <motion.div animate={float(10, 6)} className="absolute left-[9%] top-[17%] w-[58%] rounded-[26px] border border-white bg-white/90 p-5 shadow-[0_28px_80px_rgba(4,1,18,0.1)] backdrop-blur sm:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="h-2.5 w-8 rounded-full bg-heading/10" />
          </div>
          <ArrowUpRight className="text-accent" size={20} strokeWidth={1.8} />
        </div>
        <div className="mt-8 space-y-3">
          <div className="h-3 w-[84%] rounded-full bg-heading" />
          <div className="h-3 w-[56%] rounded-full bg-heading/12" />
        </div>
        <div className="relative mt-7 h-20 overflow-hidden rounded-2xl bg-heading/[0.025]">
          <div className="absolute left-[12%] top-1/2 h-px w-[74%] -translate-y-1/2 -rotate-[18deg] bg-gradient-to-r from-heading/5 via-accent/25 to-accent/60" />
          {[0, 1, 2, 3, 4].map((step) => (
            <motion.span key={step} initial={reduceMotion ? false : { opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: step * 0.09 }} style={{ left: `${12 + step * 18}%`, bottom: `${12 + step * 11}%` }} className={step === 4 ? "absolute h-4 w-4 rounded-md bg-accent shadow-[0_0_24px_rgba(255,7,105,0.4)]" : "absolute h-3.5 w-3.5 rounded-md border border-heading/10 bg-white"} />
          ))}
        </div>
      </motion.div>

      <motion.div animate={float(8, 5.2, 0.4)} className="absolute right-[5%] top-[11%] flex h-24 w-24 items-center justify-center rounded-[28px] border border-white/80 bg-heading text-white shadow-[0_24px_64px_rgba(4,1,18,0.16)] sm:h-28 sm:w-28">
        <Sparkles size={32} strokeWidth={1.5} />
        <span className="absolute right-3 top-3 h-3 w-3 rounded-full bg-accent" />
      </motion.div>

      <motion.div animate={float(12, 6.8, 0.8)} className="absolute bottom-[13%] right-[7%] w-[54%] rounded-[26px] border border-border bg-white/95 p-5 shadow-[0_28px_80px_rgba(4,1,18,0.1)] sm:p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent"><MousePointer2 size={21} strokeWidth={1.8} /></div>
          <div className="w-full space-y-2"><div className="h-2.5 w-[78%] rounded-full bg-heading/80" /><div className="h-2.5 w-[52%] rounded-full bg-heading/10" /></div>
        </div>
        <div className="mt-5 flex gap-2"><div className="h-9 flex-1 rounded-xl bg-heading" /><div className="h-9 w-12 rounded-xl bg-accent" /></div>
      </motion.div>

      <motion.div animate={float(6, 4.8, 0.2)} className="absolute bottom-[17%] left-[4%] flex items-center gap-3 rounded-full border border-white bg-white px-4 py-3 shadow-[0_20px_60px_rgba(4,1,18,0.1)]">
        <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-accent/10"><span className="h-3 w-3 rounded-full bg-accent" /></span>
        <span className="h-2.5 w-20 rounded-full bg-heading/15" />
      </motion.div>
    </div>
  );
}
