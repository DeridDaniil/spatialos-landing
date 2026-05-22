import type { LucideIcon } from "lucide-react";
import {
  Eye,
  Hand,
  Sparkles,
  Infinity as InfinityIcon,
  LayoutGrid,
  Pointer,
  Compass,
  Film,
  Users,
  AudioLines,
  Focus,
  Palette,
  BrainCircuit,
  MessageSquare,
  Tv,
  ShieldCheck,
  Map,
  Lock,
  KeyRound,
} from "lucide-react";

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Vision", href: "/#vision" },
  { label: "Interface", href: "/#interface" },
  { label: "Experience", href: "/#experience" },
  { label: "Privacy", href: "/#privacy" },
  { label: "Get Started", href: "/#start" },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export const visionCards: Feature[] = [
  {
    icon: Eye,
    title: "Look",
    body: "Navigate naturally with your eyes and focus.",
  },
  {
    icon: Hand,
    title: "Move",
    body: "Control interfaces through gestures and spatial awareness.",
  },
  {
    icon: Sparkles,
    title: "Create",
    body: "Build workflows that exist around you, not inside a single display.",
  },
];

export const interfaceFeatures: Feature[] = [
  {
    icon: InfinityIcon,
    title: "Infinite canvas",
    body: "Lay out apps, documents, and ideas across a boundless workspace.",
  },
  {
    icon: LayoutGrid,
    title: "Adaptive windows",
    body: "Panels reshape to your posture, distance, and context in real time.",
  },
  {
    icon: Pointer,
    title: "Gesture-first navigation",
    body: "Pinch, glance, and flick — interactions designed for hands and eyes.",
  },
  {
    icon: Compass,
    title: "Context-aware layouts",
    body: "Your environment intelligently surfaces what matters, when it matters.",
  },
];

export const experienceFeatures: Feature[] = [
  {
    icon: Film,
    title: "Cinematic content",
    body: "Films, shows and live moments expand into vivid, room-scale theatres.",
  },
  {
    icon: Users,
    title: "Virtual collaboration rooms",
    body: "Gather with people and ideas in shared, presence-rich spaces.",
  },
  {
    icon: AudioLines,
    title: "Spatial audio",
    body: "Sound travels through your room with depth, direction, and intent.",
  },
  {
    icon: Focus,
    title: "Focus environments",
    body: "Tune your surroundings to match your mood — calm, deep, or alive.",
  },
];

export const useCases: Feature[] = [
  {
    icon: Palette,
    title: "Design & Prototyping",
    body: "Review interfaces, moodboards, and 3D concepts in a shared spatial canvas.",
  },
  {
    icon: BrainCircuit,
    title: "Deep Work",
    body: "Build distraction-free environments for writing, planning, coding, and research.",
  },
  {
    icon: MessageSquare,
    title: "Collaboration",
    body: "Meet with people and content in the same virtual space.",
  },
  {
    icon: Tv,
    title: "Entertainment",
    body: "Turn movies, games, and media into cinematic spatial experiences.",
  },
];

export const privacyCards: Feature[] = [
  {
    icon: ShieldCheck,
    title: "On-device awareness",
    body: "Sensing happens locally. Your context never leaves your device.",
  },
  {
    icon: Map,
    title: "Private spatial mapping",
    body: "Room maps are encrypted, personal, and never used to identify you.",
  },
  {
    icon: Lock,
    title: "Secure personal data",
    body: "Sensitive signals are isolated and protected by hardware-level keys.",
  },
  {
    icon: KeyRound,
    title: "Transparent permissions",
    body: "Every app shows exactly what it can see — and when it can see it.",
  },
];
