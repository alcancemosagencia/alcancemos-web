import { cloneElement, type ReactElement } from "react";

/** Marks the real heading; its original semantic markup stays server-rendered. */
export function WordBlurReveal({ children }: {
  children: ReactElement<{ "data-word-blur"?: string }>;
}) {
  return cloneElement(children, { "data-word-blur": "true" });
}
