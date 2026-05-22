import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets scroll to the top on route (pathname) changes — synchronously,
 * before paint, so the new page never visibly scrolls up.
 *
 * scrollBehavior is forced to "auto" for the duration of the jump as a
 * safeguard, in case any smooth-scroll style is active on the document.
 *
 * Hash navigation (e.g. /#vision) is intentionally left untouched here so
 * anchor scrolling on the landing page keeps working as before.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) return;

    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    root.style.scrollBehavior = previous;
  }, [pathname, hash]);

  return null;
}
