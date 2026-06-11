import {
  Baby,
  BookOpenText,
  BrushCleaning,
  HeartHandshake,
  House,
  MoonStar,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import type { ActivityItem, FeatureItem, GalleryItem, Testimonial } from '../lib/types';

export const homeHero = {
  eyebrow: {
    bm: 'Taska mesra keluarga di Presint 9',
    en: 'Family-friendly childcare in Presint 9',
  },
  title: {
    bm: 'Tempat Yang Selamat & Ceria Untuk Si Kecil Anda',
    en: 'A Safe & Cheerful Place for Your Little One',
  },
  description: {
    bm: 'Taska Al-Mizan menyediakan penjagaan kanak-kanak dalam suasana yang mesra, ceria dan selamat di Presint 9, Putrajaya.',
    en: 'Taska Al-Mizan provides caring childcare support in a warm, playful, and safe environment for children in Presint 9, Putrajaya.',
  },
  primaryCta: {
    bm: 'Hubungi Kami',
    en: 'Contact Us',
  },
  secondaryCta: {
    bm: 'Lihat Program',
    en: 'View Programs',
  },
  imageLabel: {
    bm: 'Ruang ceria untuk kanak-kanak bermain dan belajar',
    en: 'A cheerful space for children to play and learn',
  },
  imageSrc: '/images/hero-classroom.png',
};

export const aboutPreview = {
  title: {
    bm: 'Selamat Datang ke Taska Al-Mizan',
    en: 'Welcome to Taska Al-Mizan',
  },
  description: {
    bm: 'Kami memberi fokus kepada keselamatan, keselesaan, rutin harian yang teratur, dan pengalaman awal pembelajaran yang membantu anak membesar dengan yakin.',
    en: 'We focus on safety, comfort, structured daily routines, and early learning experiences that help children grow with confidence.',
  },
  features: [
    { bm: 'Persekitaran penyayang', en: 'Caring environment' },
    { bm: 'Aktiviti mesra kanak-kanak', en: 'Child-friendly activities' },
    { bm: 'Rutin harian yang selamat', en: 'Safe daily routine' },
    { bm: 'Komunikasi bersama ibu bapa', en: 'Parent communication' },
  ],
};

export const programPreviewCards: FeatureItem[] = [
  {
    icon: Baby,
    tone: 'teal',
    title: { bm: 'Penjagaan Sepenuh Hari', en: 'Full Day Care' },
    description: {
      bm: 'Sokongan penjagaan yang konsisten untuk ibu bapa yang memerlukan penjagaan sepanjang hari.',
      en: 'Reliable all-day childcare support for parents with full schedules.',
    },
  },
  {
    icon: Sparkles,
    tone: 'yellow',
    title: { bm: 'Penjagaan Separuh Hari', en: 'Half Day Care' },
    description: {
      bm: 'Pilihan fleksibel bagi jadual yang lebih pendek dan lebih santai.',
      en: 'A flexible option for shorter daily schedules.',
    },
  },
  {
    icon: BookOpenText,
    tone: 'pink',
    title: { bm: 'Pembelajaran Awal', en: 'Early Learning' },
    description: {
      bm: 'Aktiviti menyeronokkan melalui permainan, pembacaan dan penerokaan kreatif.',
      en: 'Fun learning through play, reading, and creative exploration.',
    },
  },
  {
    icon: HeartHandshake,
    tone: 'mint',
    title: { bm: 'Nilai Islam & Adab', en: 'Islamic Values' },
    description: {
      bm: 'Membina tabiat baik, adab asas dan rutin yang positif setiap hari.',
      en: 'Building good habits, basic adab, and positive daily routines.',
    },
  },
];

export const whyChooseUsCards: FeatureItem[] = [
  {
    icon: ShieldCheck,
    tone: 'yellow',
    title: { bm: 'Persekitaran Selamat', en: 'Safe Environment' },
    description: {
      bm: 'Ruang yang terancang dan selesa supaya anak lebih tenang sepanjang hari.',
      en: 'A carefully arranged, comfortable space that helps children feel secure.',
    },
  },
  {
    icon: UsersRound,
    tone: 'teal',
    title: { bm: 'Pemantauan Penyayang', en: 'Caring Supervision' },
    description: {
      bm: 'Pendekatan penuh perhatian yang membantu anak rasa disayangi dan difahami.',
      en: 'Attentive care that helps children feel seen, supported, and cared for.',
    },
  },
  {
    icon: BrushCleaning,
    tone: 'pink',
    title: { bm: 'Aktiviti Menyeronokkan', en: 'Fun Learning Activities' },
    description: {
      bm: 'Aktiviti harian yang seimbang antara belajar, bermain dan berehat.',
      en: 'A balanced day of learning, play, and calm routines.',
    },
  },
  {
    icon: House,
    tone: 'mint',
    title: { bm: 'Lokasi Selesa', en: 'Comfortable Location' },
    description: {
      bm: 'Terletak di Presint 9 untuk memudahkan ibu bapa di kawasan sekitar.',
      en: 'Conveniently located in Presint 9 for nearby families.',
    },
  },
  {
    icon: HeartHandshake,
    tone: 'yellow',
    title: { bm: 'Komunikasi Mesra Ibu Bapa', en: 'Parent-Friendly Communication' },
    description: {
      bm: 'Perkongsian maklumat yang jelas supaya ibu bapa sentiasa yakin dan tenang.',
      en: 'Clear communication so parents feel informed and reassured.',
    },
  },
  {
    icon: Sparkles,
    tone: 'teal',
    title: { bm: 'Fokus Perkembangan Anak', en: 'Child Development Focus' },
    description: {
      bm: 'Menyokong keyakinan, rutin positif, dan perkembangan sosial yang sihat.',
      en: 'Supporting confidence, positive habits, and healthy social growth.',
    },
  },
];

export const dailyActivities: ActivityItem[] = [
  {
    time: '8:00',
    title: { bm: 'Ketibaan & Salam', en: 'Arrival & Greeting' },
    description: {
      bm: 'Menyambut anak dengan suasana tenang dan mesra.',
      en: 'Welcoming children into a calm and friendly start.',
    },
  },
  {
    time: '9:00',
    title: { bm: 'Circle Time', en: 'Morning Circle' },
    description: {
      bm: 'Aktiviti berkumpulan ringan untuk bersedia memulakan hari.',
      en: 'Gentle group time to settle in and begin the day together.',
    },
  },
  {
    time: '10:00',
    title: { bm: 'Belajar Melalui Bermain', en: 'Learning Through Play' },
    description: {
      bm: 'Penerokaan kreatif, cerita, dan permainan yang membina kemahiran.',
      en: 'Creative play, storytelling, and guided discovery for skill-building.',
    },
  },
  {
    time: '12:00',
    title: { bm: 'Waktu Makan', en: 'Meal Time' },
    description: {
      bm: 'Rutin makan yang selesa dan tersusun.',
      en: 'A comfortable, well-supported meal routine.',
    },
  },
  {
    time: '1:00',
    title: { bm: 'Waktu Rehat', en: 'Rest Time' },
    description: {
      bm: 'Masa tenang untuk berehat dan menyusun semula tenaga.',
      en: 'Quiet time for rest and recharging.',
    },
  },
  {
    time: '3:00',
    title: { bm: 'Aktiviti Kreatif', en: 'Creative Activities' },
    description: {
      bm: 'Seni, kraf, dan aktiviti motor yang menyeronokkan.',
      en: 'Arts, crafts, and playful motor-skill activities.',
    },
  },
  {
    time: '5:00',
    title: { bm: 'Waktu Ambil Pulang', en: 'Pickup Time' },
    description: {
      bm: 'Penutupan hari yang tenang bersama maklumat ringkas untuk ibu bapa.',
      en: 'A calm close to the day with simple parent updates.',
    },
  },
];

export const homeGalleryPreview: GalleryItem[] = [
  {
    title: { bm: 'Ruang Pembelajaran Ceria', en: 'Cheerful Learning Space' },
    category: { bm: 'Kelas', en: 'Classroom' },
    description: {
      bm: 'Ruang yang terang, kemas dan sesuai untuk aktiviti harian.',
      en: 'A bright, tidy space designed for daily activities.',
    },
    tone: 'teal',
    imageSrc: '/images/gallery-learning.png',
    imageAlt: {
      bm: 'Kanak-kanak dan guru di ruang pembelajaran ceria',
      en: 'Children and teacher in a cheerful learning space',
    },
    objectPosition: 'center',
  },
  {
    title: { bm: 'Aktiviti Berkumpulan', en: 'Group Activities' },
    category: { bm: 'Aktiviti', en: 'Activities' },
    description: {
      bm: 'Momen kebersamaan yang menyokong perkembangan sosial.',
      en: 'Shared moments that support social development.',
    },
    tone: 'yellow',
    imageSrc: '/images/gallery-group-play.png',
    imageAlt: {
      bm: 'Aktiviti berkumpulan yang menyeronokkan di taska',
      en: 'Fun group activities at the childcare centre',
    },
    objectPosition: 'center',
  },
  {
    title: { bm: 'Waktu Makan Selesa', en: 'Comfortable Meal Time' },
    category: { bm: 'Makan', en: 'Meal Time' },
    description: {
      bm: 'Rutin pemakanan yang kemas dan meyakinkan ibu bapa.',
      en: 'A mealtime routine that feels orderly and reassuring.',
    },
    tone: 'pink',
    imageSrc: '/images/gallery-mealtime.png',
    imageAlt: {
      bm: 'Kanak-kanak menikmati waktu makan di taska',
      en: 'Children enjoying mealtime at the childcare centre',
    },
    objectPosition: 'center',
  },
  {
    title: { bm: 'Main & Teroka', en: 'Play & Explore' },
    category: { bm: 'Permainan', en: 'Play' },
    description: {
      bm: 'Sudut bermain yang menyokong penerokaan aktif dan selamat.',
      en: 'A playful zone that supports safe exploration.',
    },
    tone: 'mint',
    imageSrc: '/images/gallery-creative.png',
    imageAlt: {
      bm: 'Kanak-kanak meneroka aktiviti kreatif dalam ruang selamat',
      en: 'Children exploring creative activities in a safe space',
    },
    objectPosition: 'center',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Puan Aina',
    role: { bm: 'Ibu kepada anak taska', en: 'Parent of an enrolled child' },
    quote: {
      bm: 'Persekitarannya sangat selesa dan sesuai untuk anak kecil. Saya rasa lebih tenang setiap hari.',
      en: 'The environment feels very comfortable for young children. I feel more at ease every day.',
    },
  },
  {
    name: 'Encik Hafiz',
    role: { bm: 'Bapa kepada anak taska', en: 'Parent of an enrolled child' },
    quote: {
      bm: 'Komunikasi dengan ibu bapa terasa jelas dan mesra. Anak pun nampak gembira setiap kali datang.',
      en: 'Parent communication feels clear and warm. Our child looks happy each time we arrive.',
    },
  },
  {
    name: 'Puan Sofea',
    role: { bm: 'Ibu kepada anak taska', en: 'Parent of an enrolled child' },
    quote: {
      bm: 'Saya suka suasananya yang ceria tetapi masih nampak kemas dan teratur.',
      en: 'I love that the atmosphere feels cheerful while still looking tidy and well-organized.',
    },
  },
];

export const homeContactCta = {
  title: {
    bm: 'Sedang Mencari Taska Penyayang di Putrajaya?',
    en: 'Looking for a Caring Taska in Putrajaya?',
  },
  description: {
    bm: 'Hubungi Taska Al-Mizan hari ini untuk bertanya tentang kekosongan dan pendaftaran.',
    en: 'Contact Taska Al-Mizan today to ask about availability and registration.',
  },
  primaryCta: {
    bm: 'WhatsApp Sekarang',
    en: 'WhatsApp Now',
  },
  secondaryCta: {
    bm: 'Hubungi Kami',
    en: 'Call Us',
  },
};

export const heroHighlights = [
  {
    icon: ShieldCheck,
    text: {
      bm: 'Penjagaan harian yang selamat',
      en: 'Safe daily care',
    },
  },
  {
    icon: BookOpenText,
    text: {
      bm: 'Aktiviti awal pembelajaran',
      en: 'Early learning activities',
    },
  },
  {
    icon: MoonStar,
    text: {
      bm: 'Rutin ceria dan teratur',
      en: 'Cheerful structured routines',
    },
  },
];
