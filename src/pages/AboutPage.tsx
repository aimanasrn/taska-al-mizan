import { useLanguage } from '../app/providers/useLanguage';
import { InfoCard } from '../components/common/InfoCard';
import { PageBanner } from '../components/layout/PageBanner';
import { ContactCTA } from '../components/sections/shared/ContactCTA';
import { aboutPageContent } from '../content/about';

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <main className="space-y-14">
      <PageBanner
        description={aboutPageContent.bannerDescription[language]}
        title={aboutPageContent.bannerTitle[language]}
      />

      <section className="grid gap-8 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h2 className="font-heading text-4xl font-bold text-brand-ink">
            {aboutPageContent.introTitle[language]}
          </h2>
          <p className="mt-5 text-base leading-8 text-brand-muted">
            {aboutPageContent.introBody[language]}
          </p>
          <div className="mt-8 rounded-[28px] bg-white p-7 shadow-soft">
            <h3 className="font-heading text-2xl font-bold text-brand-ink">
              {aboutPageContent.locationTitle[language]}
            </h3>
            <p className="mt-3 text-sm leading-7 text-brand-muted">
              {aboutPageContent.locationBody[language]}
            </p>
          </div>
        </div>
        <div className="grid gap-6">
          {aboutPageContent.values.map((item) => (
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

      <ContactCTA />
    </main>
  );
}
