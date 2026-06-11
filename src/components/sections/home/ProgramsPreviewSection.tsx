import { useLanguage } from '../../../app/providers/useLanguage';
import { programPreviewCards } from '../../../content/home';
import { InfoCard } from '../../common/InfoCard';
import { SectionHeading } from '../../common/SectionHeading';

export function ProgramsPreviewSection() {
  const { language } = useLanguage();

  return (
    <section className="overflow-hidden rounded-[36px] bg-white/85 px-6 py-14 shadow-soft backdrop-blur md:px-8">
      <div className="grid items-end gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <SectionHeading
          eyebrow={language === 'bm' ? 'Program Kami' : 'Our Programs'}
          title={language === 'bm' ? 'Program Penjagaan Kanak-Kanak' : 'Our Childcare Programs'}
          description={
            language === 'bm'
              ? 'Kad pastel yang jelas untuk menerangkan pilihan penjagaan dan pembelajaran awal.'
              : 'Clear pastel cards that explain the care and early learning options available.'
          }
        />
        <div className="rounded-[28px] bg-gradient-to-r from-brand-teal/15 via-brand-yellow/20 to-brand-pink/15 p-6">
          <p className="font-heading text-2xl font-bold text-brand-ink">
            {language === 'bm' ? 'Fokus seimbang untuk rutin, perkembangan dan keselesaan' : 'A balanced focus on routine, development, and comfort'}
          </p>
          <p className="mt-3 text-sm leading-7 text-brand-muted">
            {language === 'bm'
              ? 'Setiap program direka untuk membantu ibu bapa rasa tenang sambil anak melalui hari yang ceria dan tersusun.'
              : 'Each program is shaped to help parents feel reassured while children move through a cheerful, structured day.'}
          </p>
        </div>
      </div>
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
