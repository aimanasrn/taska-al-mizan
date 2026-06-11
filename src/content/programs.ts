import { Baby, BookOpenText, BrushCleaning, HeartHandshake, Puzzle, Sparkles, StretchHorizontal, UsersRound } from 'lucide-react';
import type { FeatureItem } from '../lib/types';

export const programsPageContent = {
  bannerTitle: {
    bm: 'Program Penjagaan Kami',
    en: 'Our Childcare Programs',
  },
  bannerDescription: {
    bm: 'Pilihan penjagaan dan aktiviti harian yang membantu anak belajar, bermain, dan berkembang dengan yakin.',
    en: 'Care options and daily activities that help children learn, play, and grow with confidence.',
  },
  programs: [
    {
      icon: Baby,
      tone: 'teal',
      title: { bm: 'Penjagaan Sepenuh Hari', en: 'Full Day Childcare' },
      description: {
        bm: 'Sesuai untuk ibu bapa yang memerlukan penjagaan harian yang stabil dan meyakinkan.',
        en: 'Ideal for parents who need steady, reassuring full-day care.',
      },
    },
    {
      icon: Sparkles,
      tone: 'yellow',
      title: { bm: 'Penjagaan Separuh Hari', en: 'Half Day Childcare' },
      description: {
        bm: 'Pilihan fleksibel untuk jadual yang lebih pendek.',
        en: 'A flexible option for shorter daily schedules.',
      },
    },
    {
      icon: BookOpenText,
      tone: 'pink',
      title: { bm: 'Aktiviti Pembelajaran Awal', en: 'Early Learning Activities' },
      description: {
        bm: 'Aktiviti membaca, bermain, dan meneroka dengan pendekatan mesra anak.',
        en: 'Reading, play, and exploration activities with a child-friendly approach.',
      },
    },
    {
      icon: HeartHandshake,
      tone: 'mint',
      title: { bm: 'Nilai Islam & Adab Asas', en: 'Islamic Values & Basic Adab' },
      description: {
        bm: 'Penerapan tabiat baik, adab, dan rutin positif dalam suasana lembut.',
        en: 'Gentle reinforcement of good habits, adab, and positive routines.',
      },
    },
    {
      icon: BrushCleaning,
      tone: 'pink',
      title: { bm: 'Permainan Kreatif', en: 'Creative Play' },
      description: {
        bm: 'Membina imaginasi dan keyakinan melalui aktiviti seni dan penerokaan.',
        en: 'Building imagination and confidence through creative activities.',
      },
    },
    {
      icon: Puzzle,
      tone: 'yellow',
      title: { bm: 'Bacaan & Story Time', en: 'Reading & Story Time' },
      description: {
        bm: 'Mendorong minat bahasa dan fokus melalui sesi membaca yang santai.',
        en: 'Encouraging language and attention through calm story sessions.',
      },
    },
    {
      icon: StretchHorizontal,
      tone: 'teal',
      title: { bm: 'Aktiviti Motor', en: 'Motor Skill Activities' },
      description: {
        bm: 'Permainan dan pergerakan yang menyokong koordinasi dan keyakinan fizikal.',
        en: 'Movement and play that support coordination and physical confidence.',
      },
    },
    {
      icon: UsersRound,
      tone: 'mint',
      title: { bm: 'Perkembangan Sosial', en: 'Social Development' },
      description: {
        bm: 'Membiasakan anak berinteraksi, berkongsi dan membina keyakinan bersama rakan.',
        en: 'Helping children interact, share, and build confidence with others.',
      },
    },
  ] satisfies FeatureItem[],
  supportTitle: {
    bm: 'Apa Yang Ibu Bapa Boleh Jangkakan',
    en: 'What Parents Can Expect',
  },
  supportPoints: [
    {
      bm: 'Rutin harian yang seimbang dan menenangkan.',
      en: 'Balanced, reassuring daily routines.',
    },
    {
      bm: 'Suasana yang mesra dan mudah didekati.',
      en: 'A welcoming, approachable environment.',
    },
    {
      bm: 'Pendekatan yang memberi ruang kepada anak belajar melalui pengalaman harian.',
      en: 'A care approach that supports learning through daily experiences.',
    },
  ],
};
