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
      imageSrc: '/images/hero-classroom.png',
      imageAlt: {
        bm: 'Guru dan kanak-kanak di ruang kelas yang ceria',
        en: 'Teacher and children in a cheerful classroom',
      },
      objectPosition: 'center',
    },
    {
      title: { bm: 'Aktiviti Pembelajaran', en: 'Learning Activities' },
      category: { bm: 'Aktiviti', en: 'Activities' },
      description: {
        bm: 'Pembelajaran awal yang berlaku melalui permainan dan interaksi.',
        en: 'Early learning through play and interaction.',
      },
      tone: 'yellow',
      imageSrc: '/images/gallery-learning.png',
      imageAlt: {
        bm: 'Kanak-kanak melakukan aktiviti pembelajaran awal',
        en: 'Children doing early learning activities',
      },
      objectPosition: 'center',
    },
    {
      title: { bm: 'Waktu Makan', en: 'Meal Time' },
      category: { bm: 'Makan', en: 'Meal Time' },
      description: {
        bm: 'Rutin makan yang kemas dan menenangkan.',
        en: 'An orderly, reassuring mealtime routine.',
      },
      tone: 'pink',
      imageSrc: '/images/gallery-mealtime.png',
      imageAlt: {
        bm: 'Waktu makan yang selesa untuk kanak-kanak',
        en: 'A comfortable mealtime for young children',
      },
      objectPosition: 'center',
    },
    {
      title: { bm: 'Aktiviti Berkumpulan', en: 'Group Activities' },
      category: { bm: 'Perkembangan Sosial', en: 'Social Development' },
      description: {
        bm: 'Interaksi yang membantu anak merasa yakin bersama rakan-rakan.',
        en: 'Group moments that help children feel confident with peers.',
      },
      tone: 'mint',
      imageSrc: '/images/gallery-group-play.png',
      imageAlt: {
        bm: 'Aktiviti berkumpulan yang membina keyakinan sosial',
        en: 'Group activities that build social confidence',
      },
      objectPosition: 'center',
    },
    {
      title: { bm: 'Acara & Sambutan', en: 'Events & Celebrations' },
      category: { bm: 'Acara', en: 'Events' },
      description: {
        bm: 'Ruang untuk meraikan momen kecil yang menggembirakan anak-anak.',
        en: 'A warm way to celebrate joyful milestones and shared moments.',
      },
      tone: 'yellow',
      imageSrc: '/images/hero-classroom.png',
      imageAlt: {
        bm: 'Suasana ceria di taska yang sesuai untuk acara kecil',
        en: 'A cheerful childcare atmosphere suited for small events',
      },
      objectPosition: 'left center',
    },
    {
      title: { bm: 'Aktiviti Kreatif', en: 'Creative Activities' },
      category: { bm: 'Kreatif', en: 'Creative Play' },
      description: {
        bm: 'Seni, kraf dan penerokaan imaginasi yang menyeronokkan.',
        en: 'Arts, crafts, and imaginative exploration.',
      },
      tone: 'teal',
      imageSrc: '/images/gallery-creative.png',
      imageAlt: {
        bm: 'Kanak-kanak meneroka aktiviti kreatif bersama guru',
        en: 'Children exploring creative activities with their teacher',
      },
      objectPosition: 'center',
    },
  ] satisfies GalleryItem[],
};
