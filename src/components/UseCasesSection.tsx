import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useCases } from "../data/sections";

const ease = [0.22, 1, 0.36, 1] as const;

const gradientFor = (i: number) => {
  const palettes = [
    "from-[#e7eeff] via-white to-[#f3e8ff]",
    "from-[#fdf6e3] via-white to-[#ffe9e0]",
    "from-[#e8fbf1] via-white to-[#e7f0ff]",
    "from-[#f3e8ff] via-white to-[#e7eeff]",
  ];
  return palettes[i % palettes.length];
};

export default function UseCasesSection() {
  return (
    <section id="usecases" className="relative bg-surface-subtle py-28 md:py-40">
      <div className="container-page">
        <SectionHeading
          eyebrow="Use cases"
          title={
            <>
              Designed for work, <br className="hidden md:block" /> creativity, and focus.
            </>
          }
          description="SpatialOS is shaped around real moments — making, thinking, meeting, and unwinding — each with its own ideal canvas."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 md:mt-20 md:gap-6 lg:grid-cols-4">
          {useCases.map((u, i) => {
            const Icon = u.icon;
            return (
              <motion.article
                key={u.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.07, ease }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-black/[0.06] bg-white p-6 shadow-card transition-transform duration-500 hover:-translate-y-1"
              >
                {/* artwork */}
                <div
                  className={`relative mb-6 aspect-[5/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br ${gradientFor(i)}`}
                >
                  <div
                    aria-hidden
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/70 blur-2xl"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-[0.55]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(17,17,17,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.05) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                      maskImage:
                        "radial-gradient(ellipse at center, #000 50%, transparent 80%)",
                      WebkitMaskImage:
                        "radial-gradient(ellipse at center, #000 50%, transparent 80%)",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/80 bg-white/80 shadow-card backdrop-blur">
                      <Icon size={22} className="text-ink" />
                    </div>
                  </div>
                  <span className="absolute left-3 top-3 rounded-full border border-black/10 bg-white/80 px-2 py-0.5 text-[10px] font-medium tracking-tight text-ink-mute backdrop-blur">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="font-display text-[20px] font-semibold tracking-tight text-ink md:text-[22px]">
                  {u.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-mute">
                  {u.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
