import { useLanguage } from '../app/providers/useLanguage';
import { ImageCard } from '../components/common/ImageCard';
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

      <section className="space-y-6 xl:space-y-8">
        <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,1.15fr)_360px] xl:grid-cols-[minmax(0,1.2fr)_380px] xl:gap-8">
          <div className="rounded-[32px] bg-white/88 p-8 shadow-soft backdrop-blur">
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-brand-teal">
              {language === 'bm' ? 'Gambaran Program' : 'Program Snapshot'}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-brand-ink xl:text-4xl">
              {language === 'bm'
                ? 'Pilihan penjagaan yang jelas, lembut dan meyakinkan'
                : 'Care options that feel clear, gentle, and reassuring'}
            </h2>
            <p className="mt-4 text-base leading-8 text-brand-muted">
              {language === 'bm'
                ? 'Daripada pembelajaran awal hingga rutin yang seimbang, setiap program direka agar sesuai dengan keperluan keluarga.'
                : 'From early learning to balanced daily routines, each program is shaped around the needs of young families.'}
            </p>
          </div>

          <ImageCard
            badge={language === 'bm' ? 'Aktiviti Harian' : 'Daily Learning'}
            description={
              language === 'bm'
                ? 'Gabungan pembelajaran, permainan, dan perhatian harian yang terasa mesra kepada anak-anak.'
                : 'A blend of learning, play, and daily care that feels warm and approachable for children.'
            }
            imageAlt={
              language === 'bm'
                ? 'Kanak-kanak menjalankan aktiviti pembelajaran awal'
                : 'Children taking part in early learning activities'
            }
            imageSrc="/images/gallery-learning.png"
            objectPosition="center"
            className="min-h-[280px] lg:min-h-full"
            title={language === 'bm' ? 'Belajar sambil berasa selesa' : 'Learning while feeling at ease'}
            tone="yellow"
          />
        </div>

        <div className="flex flex-wrap gap-5">
          {programsPageContent.programs.map((program) => (
            <InfoCard
              key={program.title.en}
              className="min-h-[unset] w-full px-7 py-6 md:w-[calc(50%-10px)] lg:px-8"
              description={program.description[language]}
              icon={program.icon}
              layout="row"
              title={program.title[language]}
              tone={program.tone}
            />
          ))}
        </div>
      </section>

      <section className="rounded-[32px] bg-gradient-to-br from-brand-teal/10 via-white to-brand-yellow/20 p-8 shadow-soft">
        <h2 className="font-heading text-3xl font-bold text-brand-ink">
          {programsPageContent.supportTitle[language]}
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {programsPageContent.supportPoints.map((item, index) => (
            <div
              key={item.en}
              className="rounded-[24px] bg-white/85 px-5 py-5 text-sm font-bold leading-7 text-brand-muted shadow-sm"
            >
              <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-teal/10 text-xs font-extrabold text-brand-teal">
                {index + 1}
              </span>
              <div>{item[language]}</div>
            </div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
