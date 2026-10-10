import { animate } from "framer-motion/dom/mini";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface HeadingState {
  words: HTMLElement[];
  controls: ReturnType<typeof animate>[];
  replacements: { original: Text; nodes: Node[] }[];
  label: string | null;
  entered: boolean;
}

/** Enhances actual text nodes after hydration; never rebuilds rich text from HTML. */
export function enhanceWordBlurReveals(root: HTMLElement): () => void {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const headings = new Map<HTMLElement, HeadingState>();
  let disposed = false;

  for (const heading of root.querySelectorAll<HTMLElement>("[data-word-blur]")) {
    headings.set(heading, { words: [], replacements: [], label: heading.getAttribute("aria-label"), controls: [], entered: false });
  }

  const prepare = (heading: HTMLElement, state: HeadingState) => {
    const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
    const texts: Text[] = [];
    while (walker.nextNode()) texts.push(walker.currentNode as Text);
    const accessibleText = (node: Node): string => node.nodeType === Node.TEXT_NODE
      ? node.textContent ?? "" : node.nodeName === "BR" ? " " : Array.from(node.childNodes, accessibleText).join("");
    heading.setAttribute("aria-label", state.label ?? accessibleText(heading).replace(/\s+/g, " ").trim());
    const words: HTMLElement[] = [];
    const replacements: { original: Text; nodes: Node[] }[] = [];
    for (const original of texts) {
      const nodes = (original.data.match(/\s+|\S+/g) ?? []).map(part => {
        if (/^\s+$/.test(part)) return document.createTextNode(part);
        const word = document.createElement("span");
        word.dataset.blurWord = "true";
        word.setAttribute("aria-hidden", "true");
        word.style.display = "inline-block";
        // Overrides the existing gray-span selector only by inheriting its parent.
        word.style.color = "inherit";
        word.textContent = part;
        words.push(word);
        return word;
      });
      original.replaceWith(...nodes);
      replacements.push({ original, nodes });
    }
    state.words = words;
    state.replacements = replacements;
  };

  const finish = (heading: HTMLElement) => {
    const state = headings.get(heading);
    if (!state) return;
    for (const control of state.controls) control.cancel();
    state.controls = [];
    // Restore the exact text nodes, including cross-word shaping and kerning.
    for (const { original, nodes } of state.replacements) {
      nodes[0]?.parentNode?.insertBefore(original, nodes[0]);
      for (const node of nodes) node.parentNode?.removeChild(node);
    }
    state.words = [];
    state.replacements = [];
    if (state.label === null) heading.removeAttribute("aria-label");
    else heading.setAttribute("aria-label", state.label);
    state.entered = true;
  };
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      const heading = entry.target as HTMLElement;
      const state = headings.get(heading);
      if (!state) continue;
      // A fast scroll that leaves the heading settles all pending words at once.
      if (!entry.isIntersecting) {
        if (state.entered && state.controls.length) finish(heading);
        continue;
      }
      if (state.entered) continue;
      state.entered = true;
      if (reduced.matches || heading.getBoundingClientRect().bottom <= 0) {
        finish(heading);
        continue;
      }
      const mobile = innerWidth <= 900;
      prepare(heading, state);
      state.controls = state.words.map((word, index) => animate(word, {
        opacity: [0, 1], filter: ["blur(8px)", "blur(0px)"],
        transform: ["translateY(12px)", "none"],
      }, { duration: mobile ? 0.85 : 0.95, delay: index * (mobile ? 0.10 : 0.12), ease }));
      const controls = state.controls;
      void Promise.all(controls).then(() => {
        if (!disposed && state.controls === controls) finish(heading);
      });
    }
  }, { rootMargin: "0px 0px -48px 0px", threshold: 0 });
  for (const heading of headings.keys()) observer.observe(heading);
  const finishAll = () => { for (const heading of headings.keys()) finish(heading); };
  const finishRunning = () => {
    for (const [heading, state] of headings) if (state.controls.length) finish(heading);
  };
  const preferenceChanged = () => { if (reduced.matches) finishAll(); };
  const interaction = (event: Event) => {
    if (!(event.target instanceof Node)) return;
    for (const heading of headings.keys()) if (heading.contains(event.target)) finish(heading);
  };
  reduced.addEventListener("change", preferenceChanged);
  window.addEventListener("resize", finishRunning);
  root.addEventListener("focusin", interaction);
  root.addEventListener("pointerdown", interaction);

  return () => {
    disposed = true;
    observer.disconnect();
    reduced.removeEventListener("change", preferenceChanged);
    window.removeEventListener("resize", finishRunning);
    root.removeEventListener("focusin", interaction);
    root.removeEventListener("pointerdown", interaction);
    finishAll();
  };
}
