import LegalLayout, { type LegalSection } from "../components/LegalLayout";

const sections: LegalSection[] = [
  {
    heading: "Acceptance of Terms",
    paragraphs: [
      "By viewing this website, you acknowledge that you have read and understood these Terms of Use. If you do not agree with them, please do not use the site.",
      "These terms are intentionally short and plain, because SpatialOS is a concept project rather than a commercial service.",
    ],
  },
  {
    heading: "Portfolio and Concept Purpose",
    paragraphs: [
      "This website is provided for portfolio and demonstration purposes. It exists to showcase frontend design, layout, motion, and engineering craft.",
      "Everything on the site should be understood in that context — as a design exercise, not as a product you can buy or subscribe to.",
    ],
  },
  {
    heading: "No Real Service",
    paragraphs: [
      "SpatialOS is a fictional concept product. The content does not represent a real commercial product or service, and no spatial computing platform is actually being offered or operated.",
      "Users should not treat the website as an actual product offering. There is nothing to purchase, install, or sign up for.",
    ],
  },
  {
    heading: "Intellectual Property",
    paragraphs: [
      "The design, layout, copy, and code of this project are the work of its author and are presented as a portfolio piece.",
      "Please do not copy, misuse, or redistribute the project content without permission. You are welcome to view it and reference it as an example of design and engineering work.",
    ],
  },
  {
    heading: "External Links",
    paragraphs: [
      "The site may include links such as GitHub or Portfolio references. Until a real launch, some of these external links may be placeholders and may not lead to live destinations.",
      "Any external site you reach from here is governed by its own terms and policies, not these.",
    ],
  },
  {
    heading: "Disclaimer",
    paragraphs: [
      "The website is provided \"as is\", without warranties of any kind, either express or implied. No warranties are provided regarding accuracy, availability, or fitness for any particular purpose.",
      "Visuals, interface concepts, and product descriptions are illustrative and should not be relied upon as statements of fact about any real technology.",
    ],
  },
  {
    heading: "Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by law, the author of this concept project is not liable for any damages arising from the use of, or inability to use, this website.",
      "As a static concept page, the site is informational and demonstrative only.",
    ],
  },
  {
    heading: "Changes to These Terms",
    paragraphs: [
      "These Terms of Use may be updated if the project changes. Any update will be reflected here, along with a new \"last updated\" date.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      "SpatialOS is a portfolio concept and does not operate a support team. For questions about the project, please reach out through the portfolio channel associated with this work.",
    ],
  },
];

export default function TermsOfUse() {
  return (
    <LegalLayout
      eyebrow="Legal · Terms"
      title="Terms of Use"
      updated="May 2026"
      intro="SpatialOS is a fictional concept product presented for portfolio and demonstration purposes. These terms explain how to understand and use this website."
      sections={sections}
      related={{ label: "Read the Privacy Policy", to: "/privacy" }}
    />
  );
}
