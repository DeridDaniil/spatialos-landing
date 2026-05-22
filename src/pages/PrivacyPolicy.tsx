import LegalLayout, { type LegalSection } from "../components/LegalLayout";

const sections: LegalSection[] = [
  {
    heading: "Overview",
    paragraphs: [
      "SpatialOS is a fictional concept landing page created for portfolio purposes. It exists to demonstrate frontend design and engineering craft — not to provide a real spatial computing service.",
      "This Privacy Policy explains, plainly, what this website does and does not do with information. Because the site is a static concept piece, the short version is simple: it collects nothing about you.",
    ],
  },
  {
    heading: "Information We Collect",
    paragraphs: [
      "This website does not require user accounts and does not ask you to sign up, log in, or create a profile.",
      "It does not collect personal information through forms. There are no contact forms, newsletter fields, or input fields that transmit data anywhere.",
      "It does not process payments and does not handle any billing, card, or financial information.",
    ],
  },
  {
    heading: "Analytics and Tracking",
    paragraphs: [
      "No analytics or tracking tools are currently used on this website. There is no Google Analytics, no advertising pixels, no behavioral tracking, and no third-party tracking scripts.",
      "If analytics are ever added in the future, this policy will be updated to clearly describe what is measured and why.",
    ],
  },
  {
    heading: "Spatial Data",
    paragraphs: [
      "SpatialOS presents concepts such as spatial mapping, gaze navigation, and gesture control. These are illustrative product ideas only.",
      "The website does not perform any real spatial mapping and does not build a model of your room or surroundings.",
      "It does not access your camera, microphone, location, biometric data, or any device sensors. Any product features shown are conceptual and for demonstration only.",
    ],
  },
  {
    heading: "Third-Party Services",
    paragraphs: [
      "The site is built as a static frontend and is intended to be hosted on a standard static hosting provider. A hosting provider may keep basic, aggregated server logs as part of its normal operation; this is outside the control of this concept project.",
      "No third-party service is used on this site to identify, profile, or track individual visitors.",
    ],
  },
  {
    heading: "Data Security",
    paragraphs: [
      "Because the website does not collect, store, or transmit personal information, there is no personal data at rest to be exposed.",
      "The project is served over standard secure web hosting and contains only static, public content.",
    ],
  },
  {
    heading: "Changes to This Policy",
    paragraphs: [
      "If the nature of this project changes — for example, if analytics or interactive features are added — this Privacy Policy will be updated to reflect that, along with a new \"last updated\" date.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      "SpatialOS is a portfolio concept and does not operate a support team. Any contact or external links shown on the site may be placeholders until a real launch.",
      "For questions about the project itself, please reach out through the portfolio channel associated with this work.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      eyebrow="Legal · Privacy"
      title="Privacy Policy"
      updated="May 2026"
      intro="SpatialOS is a concept landing page built for a portfolio. This policy describes — honestly and briefly — how the site handles information. In short: it does not collect any."
      sections={sections}
      related={{ label: "Read the Terms of Use", to: "/terms" }}
    />
  );
}
