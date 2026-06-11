import { useLanguage } from '../../../app/providers/useLanguage';
import { testimonials } from '../../../content/home';
import { SectionHeading } from '../../common/SectionHeading';

export function TestimonialsSection() {
  const { language } = useLanguage();

  return (
    <section className="rounded-[36px] bg-rose-50 px-6 py-14 md:px-10">
      <SectionHeading
        centered
        eyebrow={language === 'bm' ? 'Testimoni' : 'Testimonials'}
        title={language === 'bm' ? 'Apa Kata Ibu Bapa' : 'What Parents Say'}
        description={
          language === 'bm'
            ? 'Ulasan yang memberi gambaran tentang rasa yakin dan selesa keluarga.'
            : 'Reviews that reflect the confidence and comfort families are looking for.'
        }
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="rounded-[28px] bg-white p-7 shadow-soft">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-teal/15 font-heading text-lg font-bold text-brand-teal">
              {item.name.charAt(0)}
            </div>
            <h3 className="mt-5 font-heading text-2xl font-bold text-brand-ink">{item.name}</h3>
            <p className="mt-1 text-sm font-bold text-brand-muted">{item.role[language]}</p>
            <p className="mt-4 text-sm leading-7 text-brand-muted">“{item.quote[language]}”</p>
          </article>
        ))}
      </div>
    </section>
  );
}
