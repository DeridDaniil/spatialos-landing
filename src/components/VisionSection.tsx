import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { visionCards } from "../data/sections";

const ease = [0.22, 1, 0.36, 1] as const;

export default function VisionSection() {
  return (
    <section id="vision" className="relative py-28 md:py-40">
      <div className="container-page">
        <SectionHeading
          eyebrow="Vision"
          title={
            <>
              A new way to interact <br className="hidden md:block" />
              with information.
            </>
          }
          description="Spatial computing isn't another screen in front of your eyes. It's a new way to organize digital space — open, layered, and shaped to the way you think."
        />

        <div className="mt-16 grid gap-5 md:mt-20 md:grid-cols-3 md:gap-6">
          {visionCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease }}
                className="group relative overflow-hidden rounded-3xl border border-black/[0.06] bg-white p-7 shadow-card transition-transform duration-500 hover:-translate-y-1 md:p-8"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[radial-gradient(circle_at_center,rgba(94,162,255,0.25),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.22),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-black/[0.06] bg-gradient-to-br from-white to-surface-muted">
                  <Icon size={20} className="text-ink" />
                </div>

                <h3 className="mt-7 font-display text-2xl font-semibold tracking-tight2 text-ink md:text-[28px]">
                  {card.title}
                </h3>
                <p className="mt-2.5 max-w-sm text-[15px] leading-relaxed text-ink-mute">
                  {card.body}
                </p>

                <div className="mt-8 flex items-center justify-between text-[12px] text-ink-faint">
                  <span>0{i + 1}</span>
                  <span className="font-medium uppercase tracking-[0.18em]">
                    Principle
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
