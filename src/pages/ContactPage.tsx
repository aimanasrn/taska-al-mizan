import { useLanguage } from '../app/providers/useLanguage';
import { ContactForm } from '../components/forms/ContactForm';
import { ImageCard } from '../components/common/ImageCard';
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

      <section className="grid gap-8 xl:grid-cols-[0.86fr_1.14fr]">
        <div className="space-y-6">
          <ImageCard
            badge={language === 'bm' ? 'Hubungi Kami' : 'Reach Out'}
            description={
              language === 'bm'
                ? 'Kami sedia membantu anda memahami kekosongan, rutin harian, dan langkah pendaftaran dengan lebih jelas.'
                : 'We are here to help you understand availability, daily routines, and registration steps more clearly.'
            }
            imageAlt={
              language === 'bm'
                ? 'Guru dan kanak-kanak dalam suasana taska yang ceria'
                : 'Teacher and children in a cheerful childcare environment'
            }
            imageSrc="/images/gallery-group-play.png"
            objectPosition="center"
            title={language === 'bm' ? 'Mulakan pertanyaan dengan yakin' : 'Start your enquiry with confidence'}
            tone="pink"
          />
          <div>
            <h2 className="font-heading text-3xl font-bold text-brand-ink">
              {contactPageContent.contactCardsTitle[language]}
            </h2>
            <p className="mt-3 text-base leading-8 text-brand-muted">
              {contactPageContent.formDescription[language]}
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
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
          <div className="rounded-[30px] bg-gradient-to-br from-brand-yellow/20 via-white to-brand-teal/10 p-6 shadow-soft">
            <h3 className="font-heading text-2xl font-bold text-brand-ink">
              {language === 'bm' ? 'Waktu Operasi' : 'Operating Hours'}
            </h3>
            <p className="mt-3 text-sm leading-7 text-brand-muted">
              {siteContent.contact.hours[language]}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[32px] bg-white/88 p-8 shadow-soft backdrop-blur">
            <h2 className="font-heading text-3xl font-bold text-brand-ink">
              {contactPageContent.formTitle[language]}
            </h2>
            <p className="mt-3 text-base leading-8 text-brand-muted">
              {contactPageContent.formDescription[language]}
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-brand-teal/10 px-4 py-3 text-sm font-bold text-brand-ink">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-teal text-white">
                WA
              </span>
              {language === 'bm'
                ? 'Respon pantas melalui WhatsApp juga tersedia'
                : 'Fast WhatsApp follow-up is also available'}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="overflow-hidden rounded-[36px] bg-white p-4 shadow-soft">
        <div className="px-4 pb-4 pt-2">
          <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-brand-teal">
            {language === 'bm' ? 'Lokasi' : 'Location'}
          </p>
          <h3 className="mt-2 font-heading text-2xl font-bold text-brand-ink">
            {language === 'bm' ? 'Datang dan lihat persekitaran kami' : 'Come and see the environment for yourself'}
          </h3>
        </div>
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
