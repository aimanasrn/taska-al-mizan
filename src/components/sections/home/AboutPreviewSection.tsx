import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../../app/providers/useLanguage';
import { aboutPreview } from '../../../content/home';
import { ButtonLink } from '../../common/ButtonLink';
import { ImageCard } from '../../common/ImageCard';
import { SectionHeading } from '../../common/SectionHeading';

export function AboutPreviewSection() {
  const { language } = useLanguage();

  return (
    <section className="py-14">
      <div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <ImageCard
          badge={language === 'bm' ? 'Taska Mesra Keluarga' : 'Family-Friendly Taska'}
          description={aboutPreview.description[language]}
          title={language === 'bm' ? 'Ruang yang tenang untuk rutin yang ceria' : 'A calm space for cheerful routines'}
          tone="mint"
        />
        <div>
          <SectionHeading title={aboutPreview.title[language]} description={aboutPreview.description[language]} />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {aboutPreview.features.map((feature) => (
              <div
                key={feature.en}
                className="inline-flex items-center gap-3 rounded-[22px] bg-white px-5 py-4 text-sm font-bold text-brand-ink shadow-soft"
              >
                <CheckCircle2 className="text-brand-teal" size={18} />
                {feature[language]}
              </div>
            ))}
          </div>
          <div className="mt-7">
            <ButtonLink to="/about" variant="outline">
              {language === 'bm' ? 'Ketahui Lebih Lanjut' : 'Learn More'}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
