import { animate } from "framer-motion/dom/mini";
import { enhanceWordBlurReveals } from "@/lib/word-blur-reveal";

export const v3MotionTokens = {
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  entrance: 0.85,
  hero: 1,
  heroVisual: 1.2,
  visual: 1.1,
  card: 0.9,
  mobile: 0.65,
  mobileVisual: 0.75,
  distance: 28,
  mobileDistance: 12,
  stagger: 0.14,
  scale: 0.97,
  hover: 0.22,
  lift: 3,
} as const;

interface RevealPlan {
  selector: string;
  delay?: number;
  scale?: boolean;
  action?: boolean;
  stagger?: "capabilities" | "results" | "process";
  distance?: number;
  timing?: "hero" | "heroVisual" | "visual" | "card";
  trigger?: string;
}

const reveals: readonly RevealPlan[] = [
  { selector: ".v3-hero-copy > p", delay: 0.1 },
  { selector: ".v3-hero-actions", action: true },
  { selector: ".v3-crm", delay: 0.18, scale: true, distance: 0, timing: "heroVisual" },
  { selector: ".v3-system .v3-label", trigger: ".v3-heading" },
  { selector: ".v3-system .v3-heading > p", trigger: ".v3-heading" },
  { selector: ".v3-system-render", delay: 0.14, scale: true, timing: "visual" },
  { selector: ".v3-problem .v3-label" },
  { selector: ".v3-problem .v3-heading > p", delay: 0.16 },
  { selector: ".v3-problem-render", delay: 0.14, timing: "visual" },
  { selector: ".v3-capabilities .v3-heading" },
  { selector: ".v3-capability", stagger: "capabilities", timing: "card" },
  { selector: ".v3-results .v3-heading" },
  { selector: ".v3-result-list li", stagger: "results", timing: "card" },
  { selector: ".v3-process .v3-heading" },
  { selector: ".v3-stage", stagger: "process", timing: "card" },
  { selector: ".v3-faq .v3-heading" },
  { selector: ".v3-final-cta > h2" },
  { selector: ".v3-final-cta > p", delay: 0.08 },
  { selector: ".v3-final-cta > .lead-cta", action: true },
];

interface RevealState {
  element: HTMLElement;
  trigger: HTMLElement;
  plan: RevealPlan;
  entered: boolean;
  settled: boolean;
  opacity: string;
  transform: string;
  controls?: ReturnType<typeof animate>;
}

/** No wrapper, layout animation, permanent hidden state, or scroll loop. */
export function enhanceLandingMotion(root: HTMLElement): () => void {
  const disposeWords = enhanceWordBlurReveals(root);
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const states = new Map<HTMLElement, RevealState>();
  const hovers = new Map<HTMLElement, { transform: string; controls?: ReturnType<typeof animate> }>();
  const removers: (() => void)[] = [];
  let disposed = false;

  for (const plan of reveals) {
    for (const [index, element] of root.querySelectorAll<HTMLElement>(plan.selector).entries()) {
      // Stagger each visual row, never accumulating desktop delays on mobile.
      const rowIndex = plan.stagger === "capabilities" ? index < 3 ? index : index - 3
        : plan.stagger === "process" ? index < 2 ? index : index - 2 : index;
      states.set(element, {
        element,
        trigger: plan.trigger ? element.closest<HTMLElement>(plan.trigger) ?? element : element,
        plan: plan.stagger ? { ...plan, delay: rowIndex * v3MotionTokens.stagger } : plan,
        entered: false,
        settled: false,
        opacity: element.style.opacity,
        transform: element.style.transform,
      });
    }
  }

  const restore = (state: RevealState) => {
    state.controls?.cancel();
    state.controls = undefined;
    state.element.style.opacity = state.opacity;
    state.element.style.transform = state.transform;
    state.settled = true;
  };

  const enter = (state: RevealState) => {
    if (state.entered || state.settled || disposed) return;
    state.entered = true;
    if (reduced.matches || state.element.getBoundingClientRect().bottom < 0) {
      restore(state);
      return;
    }

    const mobile = window.innerWidth <= 900;
    const distance = state.plan.distance ?? (state.plan.action ? 12 : mobile ? v3MotionTokens.mobileDistance : v3MotionTokens.distance);
    const scale = state.plan.scale && !mobile ? v3MotionTokens.scale : 1;
    const controls = animate(state.element, {
      opacity: [state.plan.action ? 0.8 : 0, 1],
      transform: [`translateY(${distance}px) scale(${scale})`, "none"],
    }, {
      duration: state.plan.action ? 0.4 : mobile
        ? state.plan.timing === "visual" || state.plan.timing === "heroVisual" ? v3MotionTokens.mobileVisual : v3MotionTokens.mobile
        : state.plan.timing ? v3MotionTokens[state.plan.timing] : v3MotionTokens.entrance,
      delay: mobile || state.plan.action ? 0 : state.plan.delay ?? 0,
      ease: v3MotionTokens.ease,
    });
    state.controls = controls;
    void controls.then(() => {
      if (!disposed && state.controls === controls) restore(state);
    });
  };

  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const state of states.values()) if (state.trigger === entry.target) enter(state);
      observer.unobserve(entry.target);
    }
  // Start just inside the viewport, rather than spending the reveal below it.
  }, { rootMargin: "0px 0px -48px 0px", threshold: 0 });

  for (const state of states.values()) observer.observe(state.trigger);

  const finishForNode = (target: Node) => {
    for (const state of states.values()) {
      if (state.element.contains(target)) {
        observer.unobserve(state.trigger);
        restore(state);
      }
    }
  };
  const restoreHover = (element: HTMLElement) => {
    const hover = hovers.get(element);
    if (!hover) return;
    hover.controls?.cancel();
    hover.controls = undefined;
    element.style.transform = hover.transform;
  };
  const finishForInteraction = (event: Event) => {
    if (!(event.target instanceof Node)) return;
    finishForNode(event.target);
    for (const element of hovers.keys()) if (element.contains(event.target)) restoreHover(element);
  };
  // Small cards keep scroll entrances, but have no pointer-driven transforms.
  for (const element of root.querySelectorAll<HTMLElement>(".v3-hero .lead-cta, .v3-secondary, .v3-final-cta > .lead-cta")) {
    hovers.set(element, { transform: element.style.transform });
    const lift = element.matches(".v3-capability, .v3-stage") ? v3MotionTokens.lift : 2;
    const onEnter = (event: PointerEvent) => {
      if (!finePointer.matches || reduced.matches || event.pointerType === "touch") return;
      finishForNode(element);
      restoreHover(element);
      const hover = hovers.get(element);
      if (hover) hover.controls = animate(element, { transform: ["none", `translateY(-${lift}px)`] }, {
        duration: v3MotionTokens.hover,
        ease: v3MotionTokens.ease,
      });
    };
    const onLeave = () => {
      const hover = hovers.get(element);
      if (!hover?.controls) return;
      const current = getComputedStyle(element).transform;
      hover.controls.cancel();
      const controls = animate(element, { transform: [current, "none"] }, {
        duration: v3MotionTokens.hover,
        ease: v3MotionTokens.ease,
      });
      hover.controls = controls;
      void controls.then(() => {
        if (!disposed && hover.controls === controls) restoreHover(element);
      });
    };
    element.addEventListener("pointerenter", onEnter);
    element.addEventListener("pointerleave", onLeave);
    removers.push(() => {
      element.removeEventListener("pointerenter", onEnter);
      element.removeEventListener("pointerleave", onLeave);
      restoreHover(element);
    });
  }
  root.addEventListener("focusin", finishForInteraction);
  root.addEventListener("pointerdown", finishForInteraction);
  const finishRunning = () => {
    for (const state of states.values()) if (state.controls) restore(state);
    for (const element of hovers.keys()) restoreHover(element);
  };
  const updatePreference = () => {
    if (!reduced.matches) return;
    observer.disconnect();
    for (const state of states.values()) restore(state);
    for (const element of hovers.keys()) restoreHover(element);
  };
  reduced.addEventListener("change", updatePreference);
  window.addEventListener("resize", finishRunning);
  root.dataset.v3Motion = "active";

  return () => {
    disposeWords();
    disposed = true;
    observer.disconnect();
    reduced.removeEventListener("change", updatePreference);
    window.removeEventListener("resize", finishRunning);
    root.removeEventListener("focusin", finishForInteraction);
    root.removeEventListener("pointerdown", finishForInteraction);
    for (const remove of removers) remove();
    for (const state of states.values()) restore(state);
    delete root.dataset.v3Motion;
  };
}
