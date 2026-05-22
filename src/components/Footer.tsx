import { Link } from "react-router-dom";
import { Github, ExternalLink } from "lucide-react";
import { handleAnchorClick, scrollToTop } from "../lib/scroll";

// Replace with live GitHub and portfolio URLs before final public release.
const GITHUB_URL = "https://github.com/DeridDaniil/spatialos-landing";
const PORTFOLIO_URL = "https://github.com/DeridDaniil";

type FooterLink = { label: string; href: string };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "/#top" },
      { label: "Vision", href: "/#vision" },
      { label: "Interface", href: "/#interface" },
      { label: "Use cases", href: "/#usecases" },
    ],
  },
  {
    title: "Experience",
    links: [
      { label: "Immersive", href: "/#experience" },
      { label: "Design", href: "/#vision" },
      { label: "Get started", href: "/#start" },
      { label: "Roadmap", href: "/#start" },
    ],
  },
  {
    title: "Privacy",
    links: [
      { label: "On-device", href: "/#privacy" },
      { label: "Permissions", href: "/#privacy" },
      { label: "Spatial mapping", href: "/#privacy" },
      { label: "Manifesto", href: "/#privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-black/[0.06] bg-white">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="relative inline-flex h-6 w-6 items-center justify-center">
                <span className="absolute inset-0 rounded-[7px] bg-gradient-to-br from-accent-sky/70 via-white to-accent-violet/60 opacity-90 blur-[2px]" />
                <span className="absolute inset-[2px] rounded-[5px] border border-black/10 bg-white/80 backdrop-blur" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-ink" />
              </span>
              <span className="font-display text-[15px] font-semibold tracking-tight text-ink">
                SpatialOS
              </span>
            </div>
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-ink-mute">
              A concept landing exploring a calmer, more spatial way to interact with
              the digital world. Designed as a portfolio piece.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <a
                href={GITHUB_URL}
                onClick={handleAnchorClick}
                aria-label="GitHub (placeholder)"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
              >
                <Github size={15} />
              </a>
              <a
                href={PORTFOLIO_URL}
                onClick={handleAnchorClick}
                aria-label="Portfolio (placeholder)"
                className="inline-flex h-9 items-center gap-1.5 rounded-full border border-black/10 bg-white px-3 text-[13px] font-medium tracking-tight text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
              >
                Portfolio
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* link columns */}
          <div className="grid gap-8 sm:grid-cols-3 md:col-span-8">
            {columns.map((col) => (
              <div key={col.title}>
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
                  {col.title}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        onClick={handleAnchorClick}
                        className="text-[14px] font-medium tracking-tight text-ink-soft/85 transition-colors duration-200 hover:text-ink"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-black/[0.06] pt-6 text-[12.5px] text-ink-faint md:flex-row md:items-center">
          <div>
            © {new Date().getFullYear()} SpatialOS · A portfolio concept exploring spatial computing.
          </div>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="transition-colors hover:text-ink">
              Privacy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-ink">
              Terms
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="transition-colors hover:text-ink"
            >
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
