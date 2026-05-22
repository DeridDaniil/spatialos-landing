import { motion } from "framer-motion";
import {
  Video,
  StickyNote,
  BarChart3,
  Play,
  LayoutDashboard,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { interfaceFeatures } from "../data/sections";

const ease = [0.22, 1, 0.36, 1] as const;

function DashboardPanel() {
  return (
    <div className="glass-card flex h-full flex-col rounded-[22px] p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-sky/30 to-accent-violet/30">
            <LayoutDashboard size={14} className="text-ink" />
          </div>
          <div>
            <div className="text-[12.5px] font-semibold tracking-tight text-ink">
              Workspace
            </div>
            <div className="text-[10.5px] text-ink-faint">Spatial overview</div>
          </div>
        </div>
        <div className="text-[10.5px] text-ink-faint">Today</div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          ["Sessions", "12"],
          ["Focus", "94%"],
          ["Apps", "27"],
        ].map(([k, v]) => (
          <div
            key={k}
            className="rounded-xl border border-black/[0.05] bg-white/70 p-2.5"
          >
            <div className="text-[9.5px] uppercase tracking-[0.16em] text-ink-faint">
              {k}
            </div>
            <div className="mt-0.5 font-display text-base font-semibold tracking-tight">
              {v}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex-1 rounded-xl border border-black/[0.05] bg-white/60 p-3">
        <div className="flex h-full items-end gap-1.5">
          {[30, 50, 38, 64, 48, 72, 58, 80, 62, 88, 70, 90].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-md bg-gradient-to-t from-accent-sky/70 to-accent-violet/70"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function VideoCallPanel() {
  const avatars = [
    { bg: "from-[#ffd1c4] to-[#fbb6a3]", initials: "MA" },
    { bg: "from-[#cfe1ff] to-[#a8c4f0]", initials: "JS" },
    { bg: "from-[#e9d5ff] to-[#c4a8f0]", initials: "EL" },
    { bg: "from-[#d2f1d8] to-[#a8e0b6]", initials: "RK" },
  ];
  return (
    <div className="glass-card flex h-full flex-col rounded-[22px] p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#ffd1dc]/60 to-[#cfe1ff]/60">
            <Video size={14} className="text-ink" />
          </div>
          <div>
            <div className="text-[12.5px] font-semibold tracking-tight text-ink">
              Design sync
            </div>
            <div className="text-[10.5px] text-ink-faint">4 in the room</div>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d2f1d8]/50 px-2 py-0.5 text-[10px] font-medium text-[#2c7a3e]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#3a9a52]" />
          Live
        </span>
      </div>

      <div className="mt-4 grid flex-1 grid-cols-2 gap-2">
        {avatars.map((a, i) => (
          <div
            key={i}
            className={`relative flex items-center justify-center overflow-hidden rounded-xl border border-black/[0.05] bg-gradient-to-br ${a.bg}`}
          >
            <span className="font-display text-base font-semibold tracking-tight text-white/95 drop-shadow-sm">
              {a.initials}
            </span>
            <span className="absolute bottom-1.5 left-1.5 text-[10px] font-medium text-white/95 drop-shadow-sm">
              {a.initials}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function NotesPanel() {
  return (
    <div className="glass-card flex h-full flex-col rounded-[22px] p-5">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#fff3c4]/70 to-[#fce8a8]/70">
          <StickyNote size={14} className="text-ink" />
        </div>
        <div>
          <div className="text-[12.5px] font-semibold tracking-tight text-ink">
            Field notes
          </div>
          <div className="text-[10.5px] text-ink-faint">Draft · auto-saved</div>
        </div>
      </div>

      <div className="mt-4 space-y-2.5 text-[12.5px] leading-relaxed text-ink-soft">
        <p>Spatial interfaces feel quietest when they hold still.</p>
        <p className="text-ink-mute">
          Motion should reveal depth, not demand attention. Ask: would this move
          anyway if no one was watching?
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {["motion", "calm", "depth"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-black/[0.06] bg-white/70 px-2 py-0.5 text-[10px] text-ink-mute"
            >
              #{t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-3 text-[10.5px] text-ink-faint">
        Updated · 2 min ago
      </div>
    </div>
  );
}

function AnalyticsPanel() {
  return (
    <div className="glass-card flex h-full flex-col rounded-[22px] p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-violet/30 to-accent-sky/30">
            <BarChart3 size={14} className="text-ink" />
          </div>
          <div>
            <div className="text-[12.5px] font-semibold tracking-tight text-ink">
              Attention
            </div>
            <div className="text-[10.5px] text-ink-faint">Last 6 hours</div>
          </div>
        </div>
        <div className="text-right">
          <div className="font-display text-lg font-semibold tracking-tight">
            72%
          </div>
          <div className="text-[10px] text-[#3a9a52]">+8.2%</div>
        </div>
      </div>

      {/* chart area — a self-contained inner panel; the SVG fills it exactly
          (preserveAspectRatio="none") so the line and fill never letterbox
          or spill past the card's bottom edge. */}
      <div className="relative mt-4 min-h-0 flex-1 overflow-hidden rounded-xl border border-black/[0.05] bg-white/55">
        <svg
          viewBox="0 0 300 120"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          <defs>
            <linearGradient id="lineGrad" x1="0" x2="1">
              <stop offset="0%" stopColor="#5ea2ff" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
            <linearGradient id="fillGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 80 C 34 66, 60 96, 92 74 C 122 54, 152 32, 186 50 C 222 68, 252 30, 300 44 L 300 120 L 0 120 Z"
            fill="url(#fillGrad)"
          />
          <path
            d="M0 80 C 34 66, 60 96, 92 74 C 122 54, 152 32, 186 50 C 222 68, 252 30, 300 44"
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </div>
  );
}

function MediaPanel() {
  return (
    <div className="glass-card relative flex h-full flex-col overflow-hidden rounded-[22px] p-5">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#dfe8ff] via-white to-[#f3e8ff]" />
      <div
        aria-hidden
        className="absolute -bottom-16 -right-12 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(94,162,255,0.4),transparent_70%)] blur-xl"
      />
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-white to-surface-muted ring-1 ring-black/5">
          <Play size={14} className="text-ink" />
        </div>
        <div>
          <div className="text-[12.5px] font-semibold tracking-tight text-ink">
            Cinema
          </div>
          <div className="text-[10.5px] text-ink-faint">Spatial · 4K</div>
        </div>
      </div>

      <div className="mt-auto">
        <div className="font-display text-lg font-semibold tracking-tight2 text-ink">
          Quiet Frequencies
        </div>
        <div className="text-[11.5px] text-ink-mute">A documentary in three acts</div>
        <div className="mt-3 flex items-center gap-2">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white"
            aria-label="Play"
          >
            <Play size={13} className="fill-white" />
          </button>
          <div className="flex-1">
            <div className="h-1 rounded-full bg-black/10">
              <div className="h-full w-2/3 rounded-full bg-ink" />
            </div>
            <div className="mt-1 flex justify-between text-[10px] text-ink-faint">
              <span>24:18</span>
              <span>38:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SpatialInterfaceSection() {
  return (
    <section id="interface" className="relative bg-surface-muted py-28 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"
      />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Interface"
          title={
            <>
              Interfaces that live <br className="hidden md:block" /> in your space.
            </>
          }
          description="Windows, apps, and workflows can finally exist around you — arranged like objects in a room, not stacked on a single rectangle."
        />

        {/* Floating composition */}
        <div className="relative mt-16 md:mt-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[420px] -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(94,162,255,0.18),transparent_60%)] blur-2xl"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="h-[260px] lg:col-span-5 lg:h-[300px]"
            >
              <DashboardPanel />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 1.5 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.18, ease }}
              className="h-[260px] lg:col-span-4 lg:h-[300px]"
            >
              <VideoCallPanel />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: -1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.24, ease }}
              className="h-[260px] lg:col-span-3 lg:h-[300px]"
            >
              <NotesPanel />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 1.2 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.3, ease }}
              className="h-[240px] lg:col-span-7 lg:h-[280px]"
            >
              <AnalyticsPanel />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: -0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.36, ease }}
              className="h-[240px] lg:col-span-5 lg:h-[280px]"
            >
              <MediaPanel />
            </motion.div>
          </motion.div>
        </div>

        {/* Feature list */}
        <div className="mt-20 grid gap-x-10 gap-y-10 sm:grid-cols-2 md:mt-24 md:grid-cols-4">
          {interfaceFeatures.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.06, ease }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.06] bg-white">
                  <Icon size={18} className="text-ink" />
                </div>
                <h4 className="mt-5 font-display text-[19px] font-semibold tracking-tight text-ink">
                  {f.title}
                </h4>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-mute">
                  {f.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
