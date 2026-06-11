import type { LucideIcon } from 'lucide-react';

export type Language = 'bm' | 'en';

export type LocalizedText = Record<Language, string>;

export type NavKey = 'home' | 'about' | 'programs' | 'gallery' | 'contact';

export type NavItem = {
  key: NavKey;
  href: string;
  label: LocalizedText;
};

export type FeatureItem = {
  title: LocalizedText;
  description: LocalizedText;
  icon: LucideIcon;
  tone?: 'teal' | 'yellow' | 'pink' | 'mint';
};

export type GalleryItem = {
  title: LocalizedText;
  category: LocalizedText;
  description: LocalizedText;
  tone: 'teal' | 'yellow' | 'pink' | 'mint';
  imageSrc?: string;
  imageAlt?: LocalizedText;
  objectPosition?: string;
};

export type Testimonial = {
  name: string;
  role: LocalizedText;
  quote: LocalizedText;
};

export type ActivityItem = {
  time: string;
  title: LocalizedText;
  description: LocalizedText;
};
