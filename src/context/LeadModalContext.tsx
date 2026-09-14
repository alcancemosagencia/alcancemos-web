"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { trackLeadEvent } from "@/lib/analytics";

interface LeadModalContextType {
  isOpen: boolean;
  openLeadModal: (source?: string) => void;
  closeLeadModal: () => void;
  source: string;
}

const LeadModalContext = createContext<LeadModalContextType | undefined>(undefined);

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("direct");

  const openLeadModal = (triggerSource = "header_cta") => {
    setSource(triggerSource);
    setIsOpen(true);
    trackLeadEvent("lead_modal_open", { source: triggerSource });
  };

  const closeLeadModal = () => {
    setIsOpen(false);
  };

  return (
    <LeadModalContext.Provider
      value={{
        isOpen,
        openLeadModal,
        closeLeadModal,
        source,
      }}
    >
      {children}
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  const context = useContext(LeadModalContext);
  if (!context) {
    throw new Error("useLeadModal must be used within a LeadModalProvider");
  }
  return context;
}
