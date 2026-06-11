import { useLanguage } from '../app/providers/useLanguage';
import { ImageCard } from '../components/common/ImageCard';
import { PageBanner } from '../components/layout/PageBanner';
import { ContactCTA } from '../components/sections/shared/ContactCTA';
import { galleryPageContent } from '../content/gallery';

export default function GalleryPage() {
  const { language } = useLanguage();

  return (
    <main className="space-y-14">
      <PageBanner
        description={galleryPageContent.bannerDescription[language]}
        title={galleryPageContent.bannerTitle[language]}
      />

      <section className="space-y-6 xl:space-y-8">
        <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,1.15fr)_360px] xl:grid-cols-[minmax(0,1.2fr)_380px] xl:gap-8">
          <div className="rounded-[32px] bg-white/88 p-8 shadow-soft backdrop-blur">
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-brand-teal">
              {language === 'bm' ? 'Suasana Taska' : 'Taska Atmosphere'}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-brand-ink xl:text-4xl">
              {language === 'bm'
                ? 'Lihat ruang, aktiviti dan momen yang membina keyakinan ibu bapa'
                : 'See the spaces, activities, and moments that build parent confidence'}
            </h2>
            <p className="mt-4 text-base leading-8 text-brand-muted">
              {language === 'bm'
                ? 'Galeri ini membantu menunjukkan rasa, ritma, dan suasana harian yang ceria namun tetap teratur.'
                : 'This gallery gives families a feel for the rhythm, warmth, and calm structure of daily life here.'}
            </p>
          </div>
          <ImageCard
            badge={language === 'bm' ? 'Ruang Ceria' : 'Cheerful Spaces'}
            description={
              language === 'bm'
                ? 'Pencahayaan lembut, warna pastel dan susun atur yang kemas memberi rasa tenang pada ruang.'
                : 'Soft light, pastel tones, and tidy layouts create a reassuring sense of calm.'
            }
            imageAlt={
              language === 'bm'
                ? 'Guru dan kanak-kanak di ruang kelas yang ceria'
                : 'Teacher and children in a cheerful classroom'
            }
            imageSrc="/images/hero-classroom.png"
            objectPosition="center"
            className="min-h-[280px] lg:min-h-full"
            title={language === 'bm' ? 'Persekitaran yang nampak selamat dan mesra' : 'An environment that feels safe and welcoming'}
            tone="teal"
          />
        </div>

        <div className="flex flex-wrap gap-5">
          {galleryPageContent.items.map((item, index) => (
            <ImageCard
              key={`${item.title.en}-${index}`}
              badge={item.category[language]}
              className="min-h-[300px] w-full md:w-[calc(50%-10px)]"
              description={item.description[language]}
              imageAlt={item.imageAlt?.[language]}
              imageSrc={item.imageSrc}
              objectPosition={item.objectPosition}
              title={item.title[language]}
              tone={item.tone}
            />
          ))}
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
