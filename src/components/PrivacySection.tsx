import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { privacyCards } from "../data/sections";

const ease = [0.22, 1, 0.36, 1] as const;

export default function PrivacySection() {
  return (
    <section id="privacy" className="relative bg-surface-muted py-28 md:py-40">
      <div className="container-page">
        <SectionHeading
          eyebrow="Privacy"
          title={
            <>
              Your space <br className="hidden md:block" /> stays yours.
            </>
          }
          description="Spatial computing is intimate by nature. SpatialOS treats your room, your gaze, and your data as private by default — never as material to be mined."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 md:mt-20 md:gap-5 lg:grid-cols-4">
          {privacyCards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.06, ease }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-black/[0.06] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-black/[0.06] bg-gradient-to-br from-white to-surface-muted">
                  <Icon size={18} className="text-ink" />
                </div>

                <h3 className="mt-6 font-display text-[18px] font-semibold tracking-tight text-ink">
                  {c.title}
                </h3>
                <p className="mt-2 flex-1 text-[14px] leading-relaxed text-ink-mute">
                  {c.body}
                </p>

                <div className="mt-6 flex items-center justify-between text-[11px] text-ink-faint">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#3a9a52]" />
                    On by default
                  </span>
                  <span>0{i + 1}</span>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mx-auto mt-14 max-w-2xl text-center text-[14px] leading-relaxed text-ink-mute"
        >
          Privacy is not a setting in SpatialOS — it's the substrate. Awareness lives
          on your device, your room map never leaves it, and every permission is yours
          to revoke at any time.
        </motion.div>
      </div>
    </section>
  );
}
