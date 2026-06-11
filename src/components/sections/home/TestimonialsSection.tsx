import { MessageCircleHeart, Quote, Star } from 'lucide-react';
import { useLanguage } from '../../../app/providers/useLanguage';
import { testimonials } from '../../../content/home';
import { SectionHeading } from '../../common/SectionHeading';

export function TestimonialsSection() {
  const { language } = useLanguage();

  return (
    <section className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-rose-50 via-white to-cyan-50 px-6 py-14 md:px-10">
      <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-brand-pink/25 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-44 w-44 rounded-full bg-brand-teal/20 blur-3xl" />

      <div className="relative grid items-start gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="max-w-md">
          <SectionHeading
            eyebrow={language === 'bm' ? 'Testimoni' : 'Testimonials'}
            title={language === 'bm' ? 'Apa Kata Ibu Bapa' : 'What Parents Say'}
            description={
              language === 'bm'
                ? 'Ulasan yang memberi gambaran tentang rasa yakin, selesa, dan mesra keluarga.'
                : 'Reviews that reflect the confidence, comfort, and warmth families are looking for.'
            }
          />

          <div className="mt-8 rounded-[28px] bg-white/85 p-6 shadow-soft backdrop-blur">
            <div className="inline-flex rounded-full bg-brand-yellow/30 p-3 text-brand-ink">
              <MessageCircleHeart size={24} />
            </div>
            <p className="mt-5 font-heading text-2xl font-bold text-brand-ink">
              {language === 'bm'
                ? 'Kepercayaan ibu bapa adalah keutamaan kami'
                : 'Parent trust is at the center of our care'}
            </p>
            <p className="mt-3 text-sm leading-7 text-brand-muted">
              {language === 'bm'
                ? 'Setiap ulasan ini membantu menggambarkan suasana yang tenang, selamat dan meyakinkan untuk keluarga.'
                : 'Each review reflects the calm, safe, and reassuring atmosphere families want to feel.'}
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="relative rounded-[28px] bg-white/92 p-7 shadow-soft backdrop-blur transition duration-200 hover:-translate-y-1 hover:shadow-float"
            >
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={`${item.name}-${starIndex}`}
                    fill="currentColor"
                    size={16}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <div className="absolute right-5 top-5 text-brand-teal/20">
                <Quote size={36} />
              </div>
              <div className="mt-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-teal/15 font-heading text-lg font-bold text-brand-teal">
                {item.name.charAt(0)}
              </div>
              <h3 className="mt-5 font-heading text-2xl font-bold text-brand-ink">{item.name}</h3>
              <p className="mt-1 text-sm font-bold text-brand-muted">{item.role[language]}</p>
              <p className="mt-4 text-sm leading-7 text-brand-muted">"{item.quote[language]}"</p>
              <div className="mt-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-brand-teal via-brand-yellow to-brand-pink" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
