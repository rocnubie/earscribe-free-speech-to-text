import { SUPPORT_EMAIL, type InfoPageCopy } from "@/lib/info-page-content";
import { GITHUB_URL } from "@/lib/site";

const emailLink = { label: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}` };
const privacyLink = { label: "Privacy policy", href: "/privacy" };

/** English-only for now; the footer links every locale here with hreflang="en". */
export const CONTACT_COPY: InfoPageCopy = {
  title: "Contact EarScribe",
  description:
    "How to reach EarScribe about bugs, feedback, privacy questions, advertising or legal notices.",
  updated: "Updated September 11, 2026",
  intro:
    "EarScribe is a small independent project. Email is the best way to reach the people who build it, whether you found a bug, have an idea, or have a question about privacy or advertising on this site.",
  sections: [
    {
      title: "Email",
      paragraphs: [
        `Write to ${SUPPORT_EMAIL}. A clear subject line such as "Bug: model download stops at 40%" helps your message reach the right place.`,
      ],
      links: [emailLink],
    },
    {
      title: "Reporting a transcription problem",
      paragraphs: [
        "Most problems depend on the browser and device, so a few details let us reproduce them on similar hardware.",
        "Please do not attach recordings that contain personal or confidential information. EarScribe transcribes audio on your device, so we never receive your files unless you choose to send them.",
      ],
      bullets: [
        "Your browser and its version, plus the device or operating system.",
        "The model you selected, and whether it failed on the first run (while downloading the model) or later.",
        "The audio format and the approximate length of the recording.",
        "What you expected to happen and what you saw, including any error message.",
      ],
    },
    {
      title: "What you can contact us about",
      paragraphs: ["We read every message about:"],
      bullets: [
        "Bugs, browser compatibility and performance problems.",
        "Feedback and feature requests.",
        "Questions about privacy on this site.",
        "Advertising and partnership enquiries.",
        "Copyright or other legal notices.",
      ],
    },
    {
      title: "Privacy and source code",
      paragraphs: [
        "The privacy policy explains what runs on your device, what the browser downloads, and how analytics and advertising cookies are used. The application source code is public on GitHub.",
      ],
      links: [privacyLink, { label: "Source code on GitHub", href: GITHUB_URL }],
    },
  ],
};

export const TERMS_COPY: InfoPageCopy = {
  title: "Terms of Use",
  description:
    "The rules for using EarScribe, the free browser-based audio transcription tool.",
  updated: "Effective September 11, 2026",
  intro:
    "These terms apply when you use earscribe.app. By using the site you agree to them. If you do not agree, please do not use EarScribe.",
  sections: [
    {
      title: "The service",
      paragraphs: [
        "EarScribe is a free web application that turns audio recordings into timestamped text and subtitle files. Transcription runs in your browser with open-source Whisper speech-recognition models, and no account is required.",
        "We may add, change or remove features, or pause the service, at any time. Practical limits such as file length depend on your device and browser.",
      ],
    },
    {
      title: "Your recordings and your responsibility",
      paragraphs: [
        "You are responsible for the recordings you choose to transcribe. Only use audio you have the right to process, and obtain any consent the law requires from the people who were recorded.",
        "Do not use EarScribe to break the law or to infringe other people's rights, including copyright and privacy.",
      ],
    },
    {
      title: "Accuracy of transcripts",
      paragraphs: [
        "Automatic speech recognition makes mistakes, especially with names, numbers, technical terms, strong accents, background noise and overlapping speakers. EarScribe does not guarantee that a transcript or subtitle file is complete or correct.",
        "Check important passages against the original recording before you publish, share or rely on the result, and do not rely on EarScribe alone for legal, medical or other high-stakes decisions.",
      ],
    },
    {
      title: "Your content",
      paragraphs: [
        "Audio you select is processed on your device and is not uploaded to EarScribe's servers. You keep all rights to your recordings, transcripts and exported files.",
      ],
    },
    {
      title: "Open-source software and models",
      paragraphs: [
        "EarScribe runs OpenAI's Whisper models, released under the MIT or Apache 2.0 license depending on the model, in ONNX versions published by the onnx-community organization on Hugging Face. It also uses Transformers.js (Apache 2.0) and ONNX Runtime Web (MIT). Those licenses apply to those components.",
      ],
    },
    {
      title: "Advertising",
      paragraphs: [
        "EarScribe may show advertising served by Google AdSense. Ads come from third parties; we are not responsible for the content of advertisers' websites or for the products and services they offer. The privacy policy explains how advertising cookies are used.",
      ],
      links: [privacyLink],
    },
    {
      title: "No warranty and limitation of liability",
      paragraphs: [
        "EarScribe is provided \"as is\" and \"as available\", without warranties of any kind. To the fullest extent permitted by law, we are not liable for any loss or damage arising from your use of the site, including lost transcripts, lost files or decisions made on the basis of a transcript.",
        "Keep your original recordings and exported files until you no longer need them.",
      ],
    },
    {
      title: "Changes to these terms",
      paragraphs: [
        "We may update these terms. The date at the top of this page shows when they last changed. Continuing to use EarScribe after a change means you accept the updated terms.",
      ],
    },
    {
      title: "Contact",
      paragraphs: [`Questions about these terms can be sent to ${SUPPORT_EMAIL}.`],
      links: [emailLink],
    },
  ],
};
