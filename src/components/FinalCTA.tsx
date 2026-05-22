import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function FinalCTA() {
  return (
    <section id="start" className="relative overflow-hidden py-28 md:py-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f7f8fc] to-white" />
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(94,162,255,0.20),rgba(167,139,250,0.14)_50%,transparent_75%)] blur-2xl" />
      </div>

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[36px] border border-black/[0.06] bg-white/80 px-6 py-16 text-center shadow-soft backdrop-blur md:px-16 md:py-24"
        >
          {/* decorative inner glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(167,139,250,0.3),transparent_70%)] blur-2xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 left-1/2 h-72 w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(94,162,255,0.28),transparent_70%)] blur-2xl"
          />

          <div className="flex justify-center">
            <span className="pill">
              <Sparkles size={12} className="text-ink" />
              The next era of computing
            </span>
          </div>

          <h2 className="heading-xl mt-6 text-balance">
            Step into the next era <br className="hidden md:block" /> of computing.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-[17px] leading-relaxed text-ink-mute md:text-[19px]">
            Experience a calmer, deeper, and more natural way to work with your
            digital world.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#vision" className="btn-primary group">
              Explore the concept
              <ArrowRight
                size={16}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>
            <a href="#experience" className="btn-ghost">
              Start the experience
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
