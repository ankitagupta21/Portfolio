import React from "react";

const prefersReducedMotion = () =>
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Returns [ref, revealed]: revealed flips to true once the element scrolls into view.
export default function useReveal() {
  const ref = React.useRef();
  const [revealed, setRevealed] = React.useState(
    () => !("IntersectionObserver" in window) || prefersReducedMotion()
  );

  React.useEffect(() => {
    if (revealed || !ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [revealed]);

  return [ref, revealed];
}
