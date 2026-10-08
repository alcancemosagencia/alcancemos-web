"use client";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useLeadModal } from "@/context/LeadModalContext";
export function LeadCta({ source, inverse = false, label = "Evaluar mi empresa", textOnly = false, direction = "diagonal" }: { source: string; inverse?: boolean; label?: string; textOnly?: boolean; direction?: "right" | "diagonal" }) {
  const { openLeadModal } = useLeadModal();
  if (textOnly) return <button type="button" onClick={() => openLeadModal(source)} className="editorial-link">{label}<ArrowUpRight size={17} aria-hidden="true" /></button>;
  return <Button onClick={() => openLeadModal(source)} size="large" className={inverse ? "lead-cta lead-cta-inverse" : "lead-cta"} icon={direction === "right" ? <ArrowRight size={22} aria-hidden="true" /> : <ArrowUpRight size={17} aria-hidden="true" />}>{label}</Button>;
}
