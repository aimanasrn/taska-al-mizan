import { useLanguage } from '../../../app/providers/useLanguage';
import { homeGalleryPreview } from '../../../content/home';
import { ButtonLink } from '../../common/ButtonLink';
import { ImageCard } from '../../common/ImageCard';
import { SectionHeading } from '../../common/SectionHeading';

export function GalleryPreviewSection() {
  const { language } = useLanguage();

  return (
    <section className="py-14">
      <SectionHeading
        centered
        eyebrow={language === 'bm' ? 'Galeri' : 'Gallery'}
        title={language === 'bm' ? 'Momen di Taska Kami' : 'Moments at Our Taska'}
        description={
          language === 'bm'
            ? 'Ruang, aktiviti, dan suasana yang membantu ibu bapa membayangkan rutin anak mereka.'
            : "Spaces, activities, and atmosphere that help parents picture their child's daily routine."
        }
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-2">
        {homeGalleryPreview.map((item, index) => (
          <ImageCard
            key={item.title.en}
            badge={item.category[language]}
            className={index === 0 ? 'xl:col-span-2 xl:min-h-[340px]' : 'xl:min-h-[320px]'}
            description={item.description[language]}
            imageAlt={item.imageAlt?.[language]}
            imageSrc={item.imageSrc}
            objectPosition={item.objectPosition}
            title={item.title[language]}
            tone={item.tone}
          />
        ))}
      </div>
      <div className="mt-8 text-center">
        <ButtonLink className="w-full sm:w-auto" to="/gallery" variant="secondary">
          {language === 'bm' ? 'Lihat Galeri' : 'View Gallery'}
        </ButtonLink>
      </div>
    </section>
  );
}
