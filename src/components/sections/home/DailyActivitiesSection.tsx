import { useLanguage } from '../../../app/providers/useLanguage';
import { dailyActivities } from '../../../content/home';

export function DailyActivitiesSection() {
  const { language } = useLanguage();

  return (
    <section className="px-4 py-14 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-brand-teal">
            {language === 'bm' ? 'Rutin Harian' : 'Daily Activities'}
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-brand-ink md:text-5xl">
            {language === 'bm' ? 'Hari Ceria di Taska Al-Mizan' : 'A Happy Day at Taska Al-Mizan'}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-brand-muted">
            {language === 'bm'
              ? 'Rutin harian kami disusun secara teratur namun fleksibel untuk menyeimbangkan pembelajaran, bermain, rehat, dan waktu makan.'
              : 'Our structured yet flexible routine balances learning, play, rest, and mealtime throughout the day.'}
          </p>
        </div>

        <div className="mt-10 rounded-[32px] border border-white/70 bg-white/92 px-6 py-5 shadow-soft backdrop-blur md:px-8 md:py-6">
          {dailyActivities.map((item, index) => (
            <article
              key={`${item.time}-${item.title.en}`}
              className="grid gap-2 py-5 first:pt-2 last:pb-2 md:grid-cols-[120px_minmax(0,1fr)] md:gap-6"
            >
              <div className="text-base font-extrabold text-brand-pink md:text-lg">{item.time}</div>
              <div className="min-w-0">
                <h3 className="font-heading text-xl font-bold text-brand-ink md:text-2xl">
                  {item.title[language]}
                </h3>
                <p className="mt-1 text-sm leading-7 text-brand-muted md:text-base">
                  {item.description[language]}
                </p>
              </div>
              {index < dailyActivities.length - 1 ? (
                <div className="md:col-span-2">
                  <div className="mt-5 h-px bg-brand-ink/8" />
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
