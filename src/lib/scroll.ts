import type { MouseEvent } from "react";

/**
 * Smoothly scrolls a section into view by element id.
 * Used by the landing page (and by anchor links pointing at it).
 */
export function smoothScrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}

/**
 * Smoothly scrolls the current page back to the very top.
 * Route-independent — works the same on the landing page and legal pages.
 */
export function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

/**
 * Click handler for in-page anchor links such as `/#vision`.
 *
 * If the link targets the page the user is already on, the default jump is
 * replaced with a smooth scroll. If it targets a different route, the click
 * is left alone so the router/browser can navigate there normally — the
 * destination page handles its own hash on arrival.
 */
export function handleAnchorClick(e: MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute("href") ?? "";
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return;

  const targetPath = href.slice(0, hashIndex) || "/";
  if (window.location.pathname !== targetPath) return;

  const id = href.slice(hashIndex + 1);
  if (!id) return;

  if (smoothScrollToId(id)) {
    e.preventDefault();
    window.history.replaceState(null, "", href);
  }
}
