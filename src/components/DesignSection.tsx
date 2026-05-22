import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function DesignSection() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      {/* background canvas */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#fafbff] to-white" />
        <div className="absolute left-1/2 top-1/2 h-[640px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(94,162,255,0.12),rgba(167,139,250,0.10)_50%,transparent_75%)] blur-2xl" />
        <div
          className="absolute inset-0 opacity-[0.6] mask-fade-edges"
          style={{
            backgroundImage:
              "linear-gradient(rgba(17,17,17,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.04) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="container-page relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow"
          >
            Design
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.05, ease }}
            className="mt-4 font-display text-[44px] font-semibold leading-[1.04] tracking-tight2 text-ink md:text-[88px]"
          >
            Minimal by design.
            <br />
            <span className="bg-gradient-to-r from-ink via-ink-soft to-ink-faint bg-clip-text text-transparent">
              Powerful by nature.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.18, ease }}
            className="mx-auto mt-7 max-w-2xl text-balance text-[17px] leading-relaxed text-ink-mute md:text-[20px]"
          >
            Every surface, motion, and interaction is designed to feel calm, precise,
            and instantly familiar.
          </motion.p>

          {/* stat / principle row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
            className="mt-16 flex flex-col items-stretch justify-center gap-3 md:flex-row md:gap-0"
          >
            {[
              ["120fps", "rendered motion"],
              ["8ms", "input-to-photon"],
              ["∞", "spatial canvas"],
              ["0", "visual noise"],
            ].map(([value, label], i, arr) => (
              <div
                key={label}
                className={[
                  "flex flex-col items-center justify-center px-6 py-5",
                  i !== arr.length - 1 ? "md:border-r md:border-black/[0.08]" : "",
                ].join(" ")}
              >
                <div className="font-display text-3xl font-semibold tracking-tight2 text-ink md:text-4xl">
                  {value}
                </div>
                <div className="mt-1.5 text-[12px] uppercase tracking-[0.2em] text-ink-faint">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* central composition - a refined floating frame */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.35, ease }}
            className="relative mx-auto mt-16 max-w-3xl"
          >
            <div className="glass-panel relative overflow-hidden rounded-[28px] p-8 md:p-12">
              <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl bg-black/[0.06]">
                {[
                  ["Calm", "the default"],
                  ["Precise", "to the pixel"],
                  ["Familiar", "from the first glance"],
                ].map(([title, sub]) => (
                  <div key={title} className="bg-white p-5 md:p-7">
                    <div className="font-display text-lg font-semibold tracking-tight2 text-ink md:text-xl">
                      {title}
                    </div>
                    <div className="mt-1 text-[12.5px] text-ink-mute">{sub}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between text-[12px] text-ink-faint">
                <span>Design system · v1.0</span>
                <span>Last reviewed · today</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
