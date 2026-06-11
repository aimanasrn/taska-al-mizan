import { useLanguage } from '../../../app/providers/useLanguage';
import { dailyActivities } from '../../../content/home';
import { SectionHeading } from '../../common/SectionHeading';

export function DailyActivitiesSection() {
  const { language } = useLanguage();

  return (
    <section className="rounded-[36px] bg-white/85 px-6 py-14 shadow-soft backdrop-blur md:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <SectionHeading
            eyebrow={language === 'bm' ? 'Rutin Harian' : 'Daily Activities'}
            title={language === 'bm' ? 'Hari Ceria di Taska Al-Mizan' : 'A Happy Day at Taska Al-Mizan'}
            description={
              language === 'bm'
                ? 'Susunan rutin yang tenang membantu anak rasa selamat, aktif dan selesa.'
                : 'A calm daily rhythm that helps children feel secure, active, and comfortable.'
            }
          />
          <div className="mt-8 rounded-[28px] bg-gradient-to-br from-brand-teal/15 via-white to-brand-yellow/20 p-6">
            <p className="font-heading text-2xl font-bold text-brand-ink">
              {language === 'bm' ? 'Ritma yang menenangkan untuk kanak-kanak dan ibu bapa' : 'A reassuring rhythm for both children and parents'}
            </p>
            <p className="mt-3 text-sm leading-7 text-brand-muted">
              {language === 'bm'
                ? 'Daripada ketibaan pagi hingga waktu ambil pulang, setiap bahagian hari direka agar terasa teratur dan mesra.'
                : 'From morning arrival to pickup, each part of the day is designed to feel steady, warm, and well-paced.'}
            </p>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {dailyActivities.map((item, index) => (
            <article
              key={`${item.time}-${item.title.en}`}
              className="relative rounded-[26px] border border-white/70 bg-gradient-to-br from-white to-brand-cream p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-float"
            >
              <div className="absolute left-6 top-6 h-10 w-1 rounded-full bg-gradient-to-b from-brand-teal via-brand-yellow to-brand-pink" />
              <div className="pl-5">
                <span className="inline-flex rounded-full bg-brand-teal/10 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.24em] text-brand-teal">
                  {item.time}
                </span>
                <h3 className="mt-5 font-heading text-2xl font-bold text-brand-ink">
                  {item.title[language]}
                </h3>
                <p className="mt-3 text-sm leading-7 text-brand-muted">
                  {item.description[language]}
                </p>
                <div className="mt-5 text-xs font-extrabold uppercase tracking-[0.24em] text-brand-muted/70">
                  {language === 'bm' ? `Langkah ${index + 1}` : `Step ${index + 1}`}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
