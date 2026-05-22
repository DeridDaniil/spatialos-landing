import type { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Layers, Sparkles, Activity } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* base wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#f5f5f7]" />
      {/* soft mesh gradients */}
      <div className="absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.35),transparent_60%)] blur-2xl" />
      <div className="absolute -right-40 top-10 h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle_at_center,rgba(94,162,255,0.32),transparent_60%)] blur-2xl" />
      <div className="absolute left-1/3 top-1/2 h-[400px] w-[700px] -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(199,201,207,0.55),transparent_70%)] blur-3xl" />
      {/* faint grid */}
      <div
        className="absolute inset-0 opacity-[0.5] mask-fade-edges"
        style={{
          backgroundImage:
            "linear-gradient(rgba(17,17,17,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.045) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
    </div>
  );
}

/**
 * A floating glass card.
 *
 * The outer element owns absolute *positioning* (left/right/top/width) so it
 * never relies on a `transform` for centering — important because the inner
 * element's float animation fully controls `transform`. Rotation + idle
 * float live on the inner element via the `--r` custom property.
 */
function FloatingPanel({
  wrapperClassName,
  className,
  children,
  delay = 0,
  rotate = 0,
  floatClass = "anim-float-tilt",
}: {
  wrapperClassName: string;
  className?: string;
  children: ReactNode;
  delay?: number;
  rotate?: number;
  floatClass?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay, ease }}
      className={`absolute ${wrapperClassName}`}
    >
      <div
        className={`glass-card w-full ${floatClass} ${className ?? ""}`}
        style={{ "--r": `${rotate}deg` } as CSSProperties}
      >
        {children}
      </div>
    </motion.div>
  );
}

function MiniBars() {
  const bars = [42, 64, 38, 78, 56, 88, 70, 52];
  return (
    <div className="flex h-12 items-end gap-1.5 sm:h-14">
      {bars.map((h, i) => (
        <div
          key={i}
          className="w-2 rounded-full bg-gradient-to-t from-accent-sky/70 to-accent-violet/70"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

function MiniWave() {
  return (
    <svg viewBox="0 0 200 60" className="h-14 w-full">
      <defs>
        <linearGradient id="grad" x1="0" x2="1">
          <stop offset="0%" stopColor="#5ea2ff" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      <path
        d="M0 40 C 30 10, 60 60, 90 30 S 150 0, 200 28"
        fill="none"
        stroke="url(#grad)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M0 50 C 40 30, 70 60, 100 42 S 160 18, 200 38"
        fill="none"
        stroke="rgba(17,17,17,0.18)"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-36">
      <Aurora />

      <div className="container-page relative">
        {/* eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex justify-center"
        >
          <span className="pill">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-accent-sky/60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-sky" />
            </span>
            Introducing spatial computing, reimagined
          </span>
        </motion.div>

        {/* headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05, ease }}
          className="heading-xl mt-6 text-balance text-center"
        >
          Computing,
          <br className="hidden md:block" />{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-ink via-ink-soft to-ink-mute bg-clip-text text-transparent">
              beyond the screen.
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease }}
          className="mx-auto mt-6 max-w-2xl text-balance text-center text-[17px] leading-relaxed text-ink-mute md:text-[19px]"
        >
          SpatialOS transforms apps, content, and workflows into an immersive spatial
          environment designed around the way you move, think, and create.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a href="#vision" className="btn-primary group">
            Explore SpatialOS
            <ArrowRight
              size={16}
              className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </a>
          <a href="#experience" className="btn-ghost group">
            <Play size={14} className="mr-2 fill-ink text-ink" />
            Watch the concept
          </a>
        </motion.div>

        {/* spatial stage */}
        <div className="relative mx-auto mt-14 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease }}
            className="relative mx-auto h-[404px] w-full max-w-[1080px] sm:h-[472px] lg:h-[560px]"
          >
            {/* horizon ellipse */}
            <div
              aria-hidden
              className="absolute left-1/2 top-[58%] h-[300px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(94,162,255,0.18),rgba(167,139,250,0.10)_45%,transparent_70%)] blur-2xl sm:h-[360px] sm:w-[1100px]"
            />
            {/* base plate */}
            <div
              aria-hidden
              className="absolute left-1/2 top-[80%] h-2 w-[300px] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-black/15 to-transparent blur-md sm:w-[560px]"
            />

            {/* central main card */}
            <FloatingPanel
              delay={0.4}
              rotate={-1.2}
              wrapperClassName="left-0 right-0 mx-auto top-[14%] w-[92%] max-w-[620px] sm:top-[16%] sm:w-[80%]"
              className="rounded-[24px] p-4 sm:p-5 md:p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f5b8b8]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f5e3a8]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#b8e6c5]" />
                </div>
                <div className="text-[11px] font-medium tracking-tight text-ink-faint">
                  Spatial Workspace · Today
                </div>
              </div>

              <div className="mt-5 flex items-end justify-between">
                <div>
                  <div className="eyebrow">Focus</div>
                  <div className="mt-1 font-display text-[26px] font-semibold tracking-tight2 sm:text-3xl md:text-4xl">
                    Deep work
                  </div>
                  <div className="mt-1 text-[12px] text-ink-mute sm:text-[13px]">
                    3 panels · ambient mode · spatial audio on
                  </div>
                </div>
                <div className="hidden h-12 w-px bg-black/10 sm:block" />
                <div className="hidden flex-1 pl-6 sm:block">
                  <MiniWave />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  ["Attention", "94", "%"],
                  ["Latency", "11ms", ""],
                  ["Depth", "2.4m", ""],
                ].map(([label, value, unit]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-black/[0.06] bg-white/70 p-2.5 backdrop-blur sm:rounded-2xl sm:p-3"
                  >
                    <div className="text-[9.5px] uppercase tracking-[0.16em] text-ink-faint sm:text-[10px] sm:tracking-[0.18em]">
                      {label}
                    </div>
                    <div className="mt-1 font-display text-lg font-semibold tracking-tight sm:text-xl">
                      {value}
                      {unit && <span className="text-ink-faint">{unit}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </FloatingPanel>

            {/* left floating card — desktop only, anchored just outside the
                central panel so it only grazes its edge */}
            <FloatingPanel
              delay={0.55}
              rotate={-5}
              wrapperClassName="hidden lg:block top-[11%] w-[190px] left-[calc(50%-476px)]"
              className="rounded-[22px] p-4"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-accent-sky/30 to-accent-violet/30">
                  <Layers size={14} className="text-ink" />
                </div>
                <div className="text-[12px] font-semibold tracking-tight text-ink">
                  Layers
                </div>
              </div>
              <div className="mt-3 text-[11px] text-ink-mute">
                Canvas · Notes · Inspect
              </div>
              <div className="mt-3 space-y-1.5">
                {[78, 52, 36].map((w, i) => (
                  <div key={i} className="h-1.5 rounded-full bg-black/[0.06]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-accent-sky to-accent-violet"
                      style={{ width: `${w}%` }}
                    />
                  </div>
                ))}
              </div>
            </FloatingPanel>

            {/* right floating card — Pulse (compact on mobile, in-bounds everywhere) */}
            <FloatingPanel
              delay={0.65}
              rotate={4}
              floatClass="anim-float-slower"
              wrapperClassName="right-[3%] top-[1%] w-[148px] sm:right-[3%] sm:top-[4%] sm:w-[200px] lg:right-auto lg:left-[calc(50%+286px)] lg:top-[6%] lg:w-[190px]"
              className="rounded-[18px] p-3 sm:rounded-[22px] sm:p-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-accent-violet/30 to-accent-sky/30">
                    <Activity size={14} className="text-ink" />
                  </div>
                  <div className="text-[12px] font-semibold tracking-tight text-ink">
                    Pulse
                  </div>
                </div>
                <div className="text-[10px] text-ink-faint">live</div>
              </div>
              <div className="mt-3">
                <MiniBars />
              </div>
              <div className="mt-2 flex items-center justify-between text-[10px] text-ink-mute sm:text-[11px]">
                <span>90fps</span>
                <span>Stable</span>
              </div>
            </FloatingPanel>

            {/* bottom-left small card — desktop only, stacked under the
                left card on the same vertical line */}
            <FloatingPanel
              delay={0.75}
              rotate={-3}
              wrapperClassName="hidden lg:block bottom-[7%] w-[190px] left-[calc(50%-476px)]"
              className="rounded-[20px] p-4"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-white to-surface-muted ring-1 ring-black/5">
                  <Sparkles size={14} className="text-ink" />
                </div>
                <div className="text-[12px] font-semibold tracking-tight text-ink">
                  Ambient
                </div>
              </div>
              <div className="mt-2 text-[11px] text-ink-mute">
                Soft daylight · 4500K
              </div>
              <div className="mt-3 flex items-center gap-1.5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-1 flex-1 rounded-full"
                    style={{
                      background:
                        i < 4
                          ? "linear-gradient(90deg,#5ea2ff,#a78bfa)"
                          : "rgba(17,17,17,0.08)",
                    }}
                  />
                ))}
              </div>
            </FloatingPanel>

            {/* notification chip — centered on mobile, right-aligned from sm up */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85, ease }}
              className="glass-panel anim-float absolute bottom-[5%] left-0 right-0 mx-auto flex w-fit items-center gap-2.5 rounded-full px-3.5 py-2 sm:bottom-[8%] sm:left-auto sm:right-[6%] sm:mx-0 sm:gap-3 sm:px-4 sm:py-2.5"
            >
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-accent-sky/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-sky" />
              </span>
              <span className="text-[12px] font-medium tracking-tight text-ink sm:text-[12.5px]">
                Maya joined your space
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* trust row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease }}
          className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12.5px] text-ink-faint"
        >
          <span>Built for calm focus</span>
          <span className="hidden h-1 w-1 rounded-full bg-ink-faint/60 sm:inline-block" />
          <span>Privacy on-device</span>
          <span className="hidden h-1 w-1 rounded-full bg-ink-faint/60 sm:inline-block" />
          <span>Designed for hands and eyes</span>
          <span className="hidden h-1 w-1 rounded-full bg-ink-faint/60 sm:inline-block" />
          <span>Concept · Portfolio piece</span>
        </motion.div>
      </div>

      <div className="mx-auto mt-20 max-w-[1240px] px-6 md:px-8">
        <div className="hairline" />
      </div>
    </section>
  );
}
