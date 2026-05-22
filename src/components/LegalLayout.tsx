import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const ease = [0.22, 1, 0.36, 1] as const;

export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

type Props = {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  /** label + path of the sibling legal page, shown as a footer cross-link */
  related: { label: string; to: string };
};

export default function LegalLayout({
  eyebrow,
  title,
  updated,
  intro,
  sections,
  related,
}: Props) {
  return (
    <div className="relative min-h-screen bg-white text-ink">
      <Header />

      {/* ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#f5f5f7]" />
        <div className="absolute -left-40 -top-40 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.20),transparent_65%)] blur-2xl" />
        <div className="absolute -right-40 -top-24 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(94,162,255,0.20),transparent_65%)] blur-2xl" />
      </div>

      <main className="pt-32 pb-24 md:pt-40 md:pb-32">
        <article className="mx-auto w-full max-w-[860px] px-6 md:px-8">
          {/* breadcrumb / back */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-[13.5px] font-medium tracking-tight text-ink-mute transition-colors hover:text-ink"
            >
              <ArrowLeft size={14} />
              Back to home
            </Link>
          </motion.div>

          {/* header block */}
          <motion.header
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="mt-8"
          >
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="heading-lg mt-3 text-balance">{title}</h1>
            <p className="mt-5 max-w-2xl text-balance text-[17px] leading-relaxed text-ink-mute md:text-[18px]">
              {intro}
            </p>
            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-black/[0.07] bg-white/70 px-3.5 py-1.5 text-[12.5px] font-medium tracking-tight text-ink-faint backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-sky" />
              Last updated · {updated}
            </div>
          </motion.header>

          <div className="hairline my-12" />

          {/* sections */}
          <div className="space-y-12">
            {sections.map((section, i) => (
              <motion.section
                key={section.heading}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: Math.min(i, 4) * 0.04, ease }}
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-[13px] font-semibold tabular-nums text-ink-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-[22px] font-semibold tracking-tight2 text-ink md:text-[26px]">
                    {section.heading}
                  </h2>
                </div>
                <div className="mt-3 space-y-3.5 pl-0 md:pl-[2.1rem]">
                  {section.paragraphs.map((p, j) => (
                    <p
                      key={j}
                      className="text-[15.5px] leading-[1.75] text-ink-mute"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>

          {/* footer cross-links */}
          <div className="hairline my-12" />
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-[14px] font-medium tracking-tight text-ink transition-colors hover:text-ink-mute"
            >
              <ArrowLeft size={15} />
              Return to SpatialOS
            </Link>
            <Link
              to={related.to}
              className="inline-flex items-center gap-1 text-[14px] font-medium tracking-tight text-ink-mute transition-colors hover:text-ink"
            >
              {related.label}
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
