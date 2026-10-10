"use client";

import { useEffect } from "react";

/** Adds motion after hydration; the server-rendered page always remains readable. */
export function LandingMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".v3-home");
    if (!root) return;

    let disposed = false;
    let cleanup = () => {};

    void import("@/lib/v3-motion")
      .then(({ enhanceLandingMotion }) => {
        if (!disposed) cleanup = enhanceLandingMotion(root);
      })
      .catch(() => {
        // Progressive enhancement: a failed chunk must not hide the landing.
        if (!disposed) root.dataset.v3Motion = "unavailable";
      });

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return null;
}
