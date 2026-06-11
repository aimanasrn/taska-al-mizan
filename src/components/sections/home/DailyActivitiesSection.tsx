import { useLanguage } from '../../../app/providers/useLanguage';
import { dailyActivities } from '../../../content/home';
import { SectionHeading } from '../../common/SectionHeading';

export function DailyActivitiesSection() {
  const { language } = useLanguage();

  return (
    <section className="py-14">
      <SectionHeading
        eyebrow={language === 'bm' ? 'Rutin Harian' : 'Daily Activities'}
        title={language === 'bm' ? 'Hari Ceria di Taska Al-Mizan' : 'A Happy Day at Taska Al-Mizan'}
        description={
          language === 'bm'
            ? 'Susunan rutin yang tenang membantu anak rasa selamat, aktif dan selesa.'
            : 'A calm daily rhythm that helps children feel secure, active, and comfortable.'
        }
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {dailyActivities.map((item) => (
          <article
            key={`${item.time}-${item.title.en}`}
            className="rounded-[26px] bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-float"
          >
            <span className="inline-flex rounded-full bg-brand-teal/10 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.24em] text-brand-teal">
              {item.time}
            </span>
            <h3 className="mt-5 font-heading text-2xl font-bold text-brand-ink">
              {item.title[language]}
            </h3>
            <p className="mt-3 text-sm leading-7 text-brand-muted">{item.description[language]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
