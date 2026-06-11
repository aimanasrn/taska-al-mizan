import { useLanguage } from '../../../app/providers/useLanguage';
import { whyChooseUsCards } from '../../../content/home';
import { InfoCard } from '../../common/InfoCard';
import { SectionHeading } from '../../common/SectionHeading';

export function WhyChooseUsSection() {
  const { language } = useLanguage();

  return (
    <section className="rounded-[36px] bg-gradient-to-br from-cyan-50 via-white to-emerald-50 px-6 py-14 shadow-soft md:px-8">
      <SectionHeading
        centered
        eyebrow={language === 'bm' ? 'Kenapa Pilih Kami' : 'Why Choose Us'}
        title={
          language === 'bm'
            ? 'Mengapa Ibu Bapa Memilih Taska Al-Mizan'
            : 'Why Parents Choose Taska Al-Mizan'
        }
        description={
          language === 'bm'
            ? 'Faktor-faktor yang membuatkan ibu bapa rasa lebih yakin dan selesa.'
            : 'The qualities that help parents feel more confident and comfortable.'
        }
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {whyChooseUsCards.map((item) => (
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
