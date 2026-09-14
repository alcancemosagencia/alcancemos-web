"use client";

import { useEffect, ReactNode } from "react";
import { LeadModalProvider } from "@/context/LeadModalContext";
import { LeadCaptureModal } from "@/components/ui/LeadCaptureModal";
import { captureAttribution } from "@/lib/attribution";

export function ClientProviders({ children }: { children: ReactNode }) {
  useEffect(() => {
    captureAttribution();
  }, []);

  return (
    <LeadModalProvider>
      {children}
      <LeadCaptureModal />
    </LeadModalProvider>
  );
}
