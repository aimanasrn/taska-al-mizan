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

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {galleryPageContent.items.map((item, index) => (
          <ImageCard
            key={`${item.title.en}-${index}`}
            badge={item.category[language]}
            description={item.description[language]}
            title={item.title[language]}
            tone={item.tone}
          />
        ))}
      </section>

      <ContactCTA />
    </main>
  );
}
