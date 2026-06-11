import type { GalleryItem } from '../lib/types';

export const galleryPageContent = {
  bannerTitle: {
    bm: 'Galeri Taska',
    en: 'Taska Gallery',
  },
  bannerDescription: {
    bm: 'Lihat suasana ruang, aktiviti, dan momen ceria yang menggambarkan rutin di Taska Al-Mizan.',
    en: 'See the spaces, activities, and cheerful moments that reflect daily life at Taska Al-Mizan.',
  },
  items: [
    {
      title: { bm: 'Sudut Kelas Ceria', en: 'Cheerful Classroom Corner' },
      category: { bm: 'Kelas / Ruang Main', en: 'Classroom / Play Area' },
      description: {
        bm: 'Ruang yang terang dan selesa untuk aktiviti harian.',
        en: 'A bright, comfortable space for everyday activities.',
      },
      tone: 'teal',
    },
    {
      title: { bm: 'Aktiviti Pembelajaran', en: 'Learning Activities' },
      category: { bm: 'Aktiviti', en: 'Activities' },
      description: {
        bm: 'Pembelajaran awal yang berlaku melalui permainan dan interaksi.',
        en: 'Early learning through play and interaction.',
      },
      tone: 'yellow',
    },
    {
      title: { bm: 'Waktu Makan', en: 'Meal Time' },
      category: { bm: 'Makan', en: 'Meal Time' },
      description: {
        bm: 'Rutin makan yang kemas dan menenangkan.',
        en: 'An orderly, reassuring mealtime routine.',
      },
      tone: 'pink',
    },
    {
      title: { bm: 'Aktiviti Berkumpulan', en: 'Group Activities' },
      category: { bm: 'Perkembangan Sosial', en: 'Social Development' },
      description: {
        bm: 'Interaksi yang membantu anak merasa yakin bersama rakan-rakan.',
        en: 'Group moments that help children feel confident with peers.',
      },
      tone: 'mint',
    },
    {
      title: { bm: 'Acara & Sambutan', en: 'Events & Celebrations' },
      category: { bm: 'Acara', en: 'Events' },
      description: {
        bm: 'Ruang untuk meraikan momen kecil yang menggembirakan anak-anak.',
        en: 'A warm way to celebrate joyful milestones and shared moments.',
      },
      tone: 'yellow',
    },
    {
      title: { bm: 'Aktiviti Kreatif', en: 'Creative Activities' },
      category: { bm: 'Kreatif', en: 'Creative Play' },
      description: {
        bm: 'Seni, kraf dan penerokaan imaginasi yang menyeronokkan.',
        en: 'Arts, crafts, and imaginative exploration.',
      },
      tone: 'teal',
    },
  ] satisfies GalleryItem[],
};
