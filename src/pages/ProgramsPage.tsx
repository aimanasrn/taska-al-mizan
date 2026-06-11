import { useLanguage } from '../app/providers/useLanguage';
import { InfoCard } from '../components/common/InfoCard';
import { PageBanner } from '../components/layout/PageBanner';
import { ContactCTA } from '../components/sections/shared/ContactCTA';
import { programsPageContent } from '../content/programs';

export default function ProgramsPage() {
  const { language } = useLanguage();

  return (
    <main className="space-y-14">
      <PageBanner
        description={programsPageContent.bannerDescription[language]}
        title={programsPageContent.bannerTitle[language]}
      />

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {programsPageContent.programs.map((program) => (
          <InfoCard
            key={program.title.en}
            description={program.description[language]}
            icon={program.icon}
            title={program.title[language]}
            tone={program.tone}
          />
        ))}
      </section>

      <section className="rounded-[32px] bg-white p-8 shadow-soft">
        <h2 className="font-heading text-3xl font-bold text-brand-ink">
          {programsPageContent.supportTitle[language]}
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {programsPageContent.supportPoints.map((item) => (
            <div
              key={item.en}
              className="rounded-[24px] bg-brand-cream px-5 py-5 text-sm font-bold leading-7 text-brand-muted"
            >
              {item[language]}
            </div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
