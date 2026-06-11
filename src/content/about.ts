import { HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import type { FeatureItem } from '../lib/types';

export const aboutPageContent = {
  bannerTitle: {
    bm: 'Tentang Taska Al-Mizan',
    en: 'About Taska Al-Mizan',
  },
  bannerDescription: {
    bm: 'Persekitaran penjagaan yang selamat, penyayang dan ceria untuk membantu anak membesar dengan yakin.',
    en: 'A safe, caring, and cheerful childcare environment that helps children grow with confidence.',
  },
  introTitle: {
    bm: 'Pusat Jagaan yang Mengutamakan Anak dan Keluarga',
    en: 'A Childcare Centre That Puts Children and Families First',
  },
  introBody: {
    bm: 'Taska Al-Mizan menyediakan ruang yang selesa untuk penjagaan harian, perkembangan awal, dan rutin positif yang menenangkan ibu bapa serta menggembirakan anak-anak.',
    en: 'Taska Al-Mizan offers a comfortable setting for daily care, early development, and positive routines that reassure parents and delight children.',
  },
  values: [
    {
      icon: HeartHandshake,
      tone: 'pink',
      title: { bm: 'Misi Kami', en: 'Our Mission' },
      description: {
        bm: 'Mewujudkan suasana penjagaan yang mesra, selamat, dan menyokong tumbesaran seimbang.',
        en: 'To create a childcare setting that feels warm, safe, and supportive of balanced growth.',
      },
    },
    {
      icon: ShieldCheck,
      tone: 'teal',
      title: { bm: 'Pendekatan Keselamatan', en: 'Safety Approach' },
      description: {
        bm: 'Rutin teratur, ruang yang kemas, dan perhatian terhadap keselesaan harian anak.',
        en: 'Structured routines, tidy spaces, and careful attention to each child’s daily comfort.',
      },
    },
    {
      icon: Sparkles,
      tone: 'yellow',
      title: { bm: 'Suasana Ceria', en: 'Cheerful Environment' },
      description: {
        bm: 'Persekitaran yang mesra, terang, dan sesuai untuk belajar sambil bermain.',
        en: 'A bright, welcoming environment designed for playful learning.',
      },
    },
  ] satisfies FeatureItem[],
  locationTitle: {
    bm: 'Lokasi Yang Mudah Diakses',
    en: 'A Conveniently Located Centre',
  },
  locationBody: {
    bm: 'Terletak di Presint 9, Taska Al-Mizan memudahkan ibu bapa di Putrajaya mendapatkan penjagaan yang dekat dan praktikal.',
    en: 'Located in Presint 9, Taska Al-Mizan gives families in Putrajaya a nearby and practical childcare option.',
  },
};
