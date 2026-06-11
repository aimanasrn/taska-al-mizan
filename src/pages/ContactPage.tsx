import { useLanguage } from '../app/providers/useLanguage';
import { ContactForm } from '../components/forms/ContactForm';
import { InfoCard } from '../components/common/InfoCard';
import { PageBanner } from '../components/layout/PageBanner';
import { contactPageContent } from '../content/contact';
import { contactHighlights, siteContent } from '../content/site';

export default function ContactPage() {
  const { language } = useLanguage();

  return (
    <main className="space-y-14">
      <PageBanner
        description={contactPageContent.bannerDescription[language]}
        title={contactPageContent.bannerTitle[language]}
      />

      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <div>
            <h2 className="font-heading text-3xl font-bold text-brand-ink">
              {contactPageContent.contactCardsTitle[language]}
            </h2>
            <p className="mt-3 text-base leading-8 text-brand-muted">
              {contactPageContent.formDescription[language]}
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {contactHighlights.map((item) => (
              <InfoCard
                key={item.title.en}
                description={item.body[language]}
                icon={item.icon}
                title={item.title[language]}
                tone="yellow"
              />
            ))}
          </div>
          <div className="rounded-[30px] bg-white p-6 shadow-soft">
            <h3 className="font-heading text-2xl font-bold text-brand-ink">
              {language === 'bm' ? 'Waktu Operasi' : 'Operating Hours'}
            </h3>
            <p className="mt-3 text-sm leading-7 text-brand-muted">
              {siteContent.contact.hours[language]}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="font-heading text-3xl font-bold text-brand-ink">
              {contactPageContent.formTitle[language]}
            </h2>
            <p className="mt-3 text-base leading-8 text-brand-muted">
              {contactPageContent.formDescription[language]}
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="overflow-hidden rounded-[36px] bg-white p-4 shadow-soft">
        <iframe
          className="h-[380px] w-full rounded-[28px] border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={siteContent.contact.mapEmbed}
          title="Taska Al-Mizan map"
        />
      </section>
    </main>
  );
}
