/** Copy shape shared by the text pages: privacy, contact and terms. */
export interface InfoPageSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  /** `http(s)` links open in a new tab; `/paths` and `mailto:` stay in place. */
  links?: { label: string; href: string }[];
}

export interface InfoPageCopy {
  title: string;
  description: string;
  updated: string;
  intro: string;
  sections: InfoPageSection[];
}

export const SUPPORT_EMAIL = "support@earscribe.app";
