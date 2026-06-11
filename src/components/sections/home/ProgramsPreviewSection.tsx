import { useLanguage } from '../../../app/providers/useLanguage';
import { programPreviewCards } from '../../../content/home';
import { InfoCard } from '../../common/InfoCard';
import { SectionHeading } from '../../common/SectionHeading';

export function ProgramsPreviewSection() {
  const { language } = useLanguage();

  return (
    <section className="py-14">
      <SectionHeading
        centered
        eyebrow={language === 'bm' ? 'Program Kami' : 'Our Programs'}
        title={language === 'bm' ? 'Program Penjagaan Kanak-Kanak' : 'Our Childcare Programs'}
        description={
          language === 'bm'
            ? 'Kad pastel yang jelas untuk menerangkan pilihan penjagaan dan pembelajaran awal.'
            : 'Clear pastel cards that explain the care and early learning options available.'
        }
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {programPreviewCards.map((item) => (
          <InfoCard
            key={item.title.en}
            description={item.description[language]}
            icon={item.icon}
            title={item.title[language]}
            tone={item.tone}
          />
        ))}
      </div>
    </section>
  );
}
