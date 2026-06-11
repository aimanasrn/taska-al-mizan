import { Facebook, Instagram, MessageCircle, Phone, Pin } from 'lucide-react';
import type { LocalizedText, NavItem } from '../lib/types';

export const whatsappHref =
  'https://wa.me/60139491544?text=Hi%20Taska%20Al-Mizan%2C%20saya%20berminat%20untuk%20tahu%20lebih%20lanjut%20tentang%20pendaftaran%20anak%20di%20taska.';

export const navItems: NavItem[] = [
  {
    key: 'home',
    href: '/',
    label: { bm: 'Utama', en: 'Home' },
  },
  {
    key: 'about',
    href: '/about',
    label: { bm: 'Tentang', en: 'About' },
  },
  {
    key: 'programs',
    href: '/programs',
    label: { bm: 'Program', en: 'Programs' },
  },
  {
    key: 'gallery',
    href: '/gallery',
    label: { bm: 'Galeri', en: 'Gallery' },
  },
  {
    key: 'contact',
    href: '/contact',
    label: { bm: 'Hubungi', en: 'Contact' },
  },
];

export const siteContent = {
  brand: {
    name: 'Taska Al-Mizan',
    tagline: {
      bm: 'Taska yang ceria, selamat dan mesra keluarga di Presint 9.',
      en: 'A cheerful, safe, family-friendly childcare centre in Presint 9.',
    },
  },
  topBar: {
    location: {
      bm: 'Presint 9, Putrajaya',
      en: 'Presint 9, Putrajaya',
    },
    locationLong: {
      bm: 'Kuaters Jenis Apartment, Fasa 12, Blok E2, Presint 9',
      en: 'Kuaters Jenis Apartment, Phase 12, Block E2, Presint 9',
    },
    cta: {
      bm: 'WhatsApp Sekarang',
      en: 'WhatsApp Now',
    },
  },
  header: {
    primaryCta: {
      bm: 'WhatsApp Sekarang',
      en: 'WhatsApp Now',
    },
    openMenu: {
      bm: 'Buka menu',
      en: 'Open menu',
    },
    closeMenu: {
      bm: 'Tutup menu',
      en: 'Close menu',
    },
  },
  contact: {
    phone: '0139491544',
    whatsappHref,
    address:
      'Kuaters Jenis Apartment, Fasa 12, Blok E2, Presint 9, Wilayah Persekutuan Kuala Lumpur, 62250 Putrajaya',
    mapEmbed:
      'https://www.google.com/maps?q=Kuaters%20Jenis%20Apartment%2C%20Fasa%2012%2C%20Blok%20E2%2C%20Presint%209%2C%20Wilayah%20Persekutuan%20Kuala%20Lumpur%2C%2062250%20Putrajaya&output=embed',
    hours: {
      bm: 'Waktu operasi akan dikemas kini tidak lama lagi.',
      en: 'Operating hours will be updated soon.',
    },
  },
  footer: {
    description: {
      bm: 'Penjagaan kanak-kanak yang selamat, ceria dan penuh perhatian untuk ibu bapa di Putrajaya.',
      en: 'Safe, cheerful, attentive childcare support for families in Putrajaya.',
    },
    quickLinksTitle: {
      bm: 'Pautan Pantas',
      en: 'Quick Links',
    },
    contactTitle: {
      bm: 'Hubungi',
      en: 'Contact',
    },
    socialTitle: {
      bm: 'Sosial',
      en: 'Social',
    },
    social: [
      {
        name: 'Facebook',
        icon: Facebook,
        href: '#',
      },
      {
        name: 'Instagram',
        icon: Instagram,
        href: '#',
      },
      {
        name: 'WhatsApp',
        icon: MessageCircle,
        href: whatsappHref,
      },
    ],
  },
};

export const contactHighlights: Array<{
  icon: typeof Phone;
  title: LocalizedText;
  body: LocalizedText;
}> = [
  {
    icon: Phone,
    title: { bm: 'Telefon / WhatsApp', en: 'Phone / WhatsApp' },
    body: { bm: '0139491544', en: '0139491544' },
  },
  {
    icon: Pin,
    title: { bm: 'Alamat', en: 'Address' },
    body: {
      bm: 'Kuaters Jenis Apartment, Fasa 12, Blok E2, Presint 9, Putrajaya',
      en: 'Kuaters Jenis Apartment, Phase 12, Block E2, Presint 9, Putrajaya',
    },
  },
];
