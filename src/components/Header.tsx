import { useEffect, useState, type MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "../data/sections";
import { handleAnchorClick, smoothScrollToId } from "../lib/scroll";

function Logo() {
  return (
    <a
      href="/#top"
      onClick={handleAnchorClick}
      className="group flex items-center gap-2.5"
    >
      <span className="relative inline-flex h-6 w-6 items-center justify-center">
        <span className="absolute inset-0 rounded-[7px] bg-gradient-to-br from-accent-sky/70 via-white to-accent-violet/60 opacity-90 blur-[2px]" />
        <span className="absolute inset-[2px] rounded-[5px] border border-black/10 bg-white/80 backdrop-blur" />
        <span className="relative h-1.5 w-1.5 rounded-full bg-ink" />
      </span>
      <span className="font-display text-[15px] font-semibold tracking-tight text-ink">
        SpatialOS
      </span>
    </a>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Mobile menu links: close the menu first, then smooth-scroll once the
  // body scroll-lock has been released (deferred via double rAF).
  const handleMobileNavClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href") ?? "";
    setOpen(false);

    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return;

    const targetPath = href.slice(0, hashIndex) || "/";
    if (window.location.pathname !== targetPath) return; // let it navigate

    const id = href.slice(hashIndex + 1);
    if (!id) return;

    e.preventDefault();
    window.history.replaceState(null, "", href);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => smoothScrollToId(id)),
    );
  };

  return (
    <header
      id="top"
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-3",
      ].join(" ")}
    >
      <div className="container-page">
        <div
          className={[
            "flex items-center justify-between rounded-full border border-black/[0.06] px-4 transition-all duration-500",
            scrolled
              ? "bg-white/75 shadow-[0_10px_40px_-20px_rgba(17,17,17,0.18)] backdrop-blur-xl"
              : "bg-white/55 backdrop-blur-md",
            "py-2.5",
          ].join(" ")}
        >
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleAnchorClick}
                className="rounded-full px-3.5 py-1.5 text-[13.5px] font-medium tracking-tight text-ink-soft/85 transition-colors duration-200 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <a
              href="/#start"
              onClick={handleAnchorClick}
              className="inline-flex h-9 items-center justify-center rounded-full bg-ink px-4 text-[13.5px] font-medium tracking-tight text-white transition-all duration-300 hover:translate-y-[-1px] hover:shadow-[0_12px_28px_-12px_rgba(17,17,17,0.5)]"
            >
              Try the concept
            </a>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/80 text-ink lg:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="container-page lg:hidden"
          >
            <div className="mt-2 overflow-hidden rounded-3xl border border-black/[0.06] bg-white/90 p-2 shadow-[0_24px_60px_-30px_rgba(17,17,17,0.25)] backdrop-blur-xl">
              <nav className="flex flex-col">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={handleMobileNavClick}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.25 }}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-medium tracking-tight text-ink hover:bg-surface-muted"
                  >
                    <span>{item.label}</span>
                    <span className="text-ink-faint">→</span>
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
