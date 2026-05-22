import { motion } from "framer-motion";
import { Play, Mountain, Headphones, Sun } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experienceFeatures } from "../data/sections";

const ease = [0.22, 1, 0.36, 1] as const;

function ImmersiveVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease }}
      className="relative aspect-[5/6] w-full overflow-hidden rounded-[32px] border border-black/[0.06] bg-gradient-to-br from-white via-[#f5f5f7] to-[#eef1f7] shadow-soft"
    >
      {/* layered horizons */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-3/5 bg-gradient-to-b from-[#e7eeff] via-[#f6f1ff] to-transparent"
      />
      <div
        aria-hidden
        className="absolute -left-12 top-[18%] h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(94,162,255,0.45),transparent_70%)] blur-2xl"
      />
      <div
        aria-hidden
        className="absolute -right-16 top-[10%] h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.45),transparent_70%)] blur-2xl"
      />

      {/* sun */}
      <div
        aria-hidden
        className="absolute left-1/2 top-[24%] h-32 w-32 -translate-x-1/2 rounded-full bg-gradient-to-b from-white to-[#fff4d6]"
        style={{ boxShadow: "0 0 80px 30px rgba(255, 230, 170, 0.45)" }}
      />

      {/* horizon mountains - layered SVG silhouettes for that calm environment feel */}
      <svg
        viewBox="0 0 400 220"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-[34%] h-[26%] w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="mt1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#cdd6e8" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#cdd6e8" stopOpacity="0.45" />
          </linearGradient>
        </defs>
        <path
          d="M0 180 L 0 120 L 40 90 L 90 130 L 140 70 L 200 110 L 250 80 L 310 120 L 360 90 L 400 110 L 400 180 Z"
          fill="url(#mt1)"
        />
      </svg>
      <svg
        viewBox="0 0 400 220"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-[26%] h-[26%] w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="mt2" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#b9c1d4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#b9c1d4" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <path
          d="M0 180 L 0 150 L 60 120 L 120 150 L 180 110 L 240 140 L 300 105 L 360 135 L 400 120 L 400 180 Z"
          fill="url(#mt2)"
        />
      </svg>

      {/* ground reflection */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-b from-transparent via-white/40 to-white"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[34%]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(17,17,17,0.04) 1px, transparent 1px)",
          backgroundSize: "100% 22px",
          maskImage:
            "linear-gradient(180deg, transparent, #000 30%, #000 70%, transparent)",
          WebkitMaskImage:
            "linear-gradient(180deg, transparent, #000 30%, #000 70%, transparent)",
        }}
      />

      {/* central floating screen */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.2, ease }}
        className="glass-panel anim-float absolute left-1/2 top-[44%] flex aspect-video w-[78%] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl"
      >
        <div className="relative h-full w-full bg-gradient-to-br from-[#1a1f2e] via-[#26314a] to-[#3d2f5a]">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(94,162,255,0.4),transparent_60%)]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(255,200,150,0.3),transparent_60%)]"
          />
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white/90">
            <div>
              <div className="font-display text-[13px] font-semibold tracking-tight">
                Cinematic mode
              </div>
              <div className="text-[10px] text-white/70">Now playing · spatial</div>
            </div>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-ink">
              <Play size={11} className="fill-ink" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* small floating audio chip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, delay: 0.4, ease }}
        className="glass-panel anim-float-slower absolute bottom-[12%] left-[6%] flex items-center gap-2.5 rounded-full px-3.5 py-2"
      >
        <Headphones size={12} className="text-ink" />
        <span className="text-[11.5px] font-medium tracking-tight text-ink">
          Spatial audio
        </span>
        <span className="ml-1 h-1.5 w-1.5 rounded-full bg-[#3a9a52]" />
      </motion.div>

      {/* small floating environment chip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, delay: 0.5, ease }}
        className="glass-panel anim-float absolute bottom-[10%] right-[6%] flex items-center gap-2.5 rounded-full px-3.5 py-2"
      >
        <Sun size={12} className="text-ink" />
        <span className="text-[11.5px] font-medium tracking-tight text-ink">
          Coastal · dawn
        </span>
      </motion.div>

      {/* corner label */}
      <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-2.5 py-1 text-[10.5px] font-medium tracking-tight text-ink-mute backdrop-blur">
        <Mountain size={11} className="text-ink" />
        Environment · Horizon
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-28 md:py-40">
      <div className="container-page">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left: copy */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Experience"
              title={
                <>
                  Feel present,
                  <br className="hidden sm:block" /> wherever you are.
                </>
              }
              description="SpatialOS reshapes how you work, gather, and unwind — so digital moments feel as natural as the room you're already in."
            />

            <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {experienceFeatures.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, delay: i * 0.06, ease }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.06] bg-gradient-to-br from-white to-surface-muted">
                      <Icon size={18} className="text-ink" />
                    </div>
                    <h4 className="mt-4 font-display text-[18px] font-semibold tracking-tight text-ink">
                      {f.title}
                    </h4>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-mute">
                      {f.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: visual */}
          <div className="relative">
            <ImmersiveVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
