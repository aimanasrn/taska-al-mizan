import { useLanguage } from '../app/providers/useLanguage';
import { ButtonLink } from '../components/common/ButtonLink';
import { ImageCard } from '../components/common/ImageCard';
import { InfoCard } from '../components/common/InfoCard';
import { PageBanner } from '../components/layout/PageBanner';
import { ContactCTA } from '../components/sections/shared/ContactCTA';
import { aboutPageContent } from '../content/about';
import { siteContent } from '../content/site';

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <main className="space-y-14">
      <PageBanner
        description={aboutPageContent.bannerDescription[language]}
        title={aboutPageContent.bannerTitle[language]}
      />

      <section className="grid gap-8 xl:grid-cols-[1.02fr_0.98fr]">
        <div className="space-y-8">
          <div className="rounded-[32px] bg-white/88 p-8 shadow-soft backdrop-blur">
            <h2 className="font-heading text-4xl font-bold text-brand-ink">
              {aboutPageContent.introTitle[language]}
            </h2>
            <p className="mt-5 text-base leading-8 text-brand-muted">
              {aboutPageContent.introBody[language]}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <div className="rounded-full bg-brand-teal/10 px-4 py-3 text-sm font-extrabold text-brand-teal">
                {language === 'bm' ? 'Ruang mesra kanak-kanak' : 'Child-friendly spaces'}
              </div>
              <div className="rounded-full bg-brand-yellow/25 px-4 py-3 text-sm font-extrabold text-brand-ink">
                {language === 'bm' ? 'Rutin tenang setiap hari' : 'Calm daily routines'}
              </div>
              <div className="rounded-full bg-brand-pink/20 px-4 py-3 text-sm font-extrabold text-brand-ink">
                {language === 'bm' ? 'Komunikasi bersama ibu bapa' : 'Parent communication'}
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <ImageCard
              badge={language === 'bm' ? 'Suasana Mesra' : 'Welcoming Atmosphere'}
              description={
                language === 'bm'
                  ? 'Kami menitikberatkan suasana yang lembut, teratur dan sesuai untuk perkembangan awal anak.'
                  : 'We prioritize an environment that feels gentle, organized, and supportive of early development.'
              }
              imageAlt={
                language === 'bm'
                  ? 'Kanak-kanak dan guru di ruang taska yang cerah'
                  : 'Children and teacher in a bright childcare space'
              }
              imageSrc="/images/hero-classroom.png"
              objectPosition="center"
              title={language === 'bm' ? 'Rasa tenang sejak langkah pertama' : 'A calm feeling from the first step in'}
              tone="teal"
            />
            <div className="rounded-[28px] bg-gradient-to-br from-brand-yellow/25 via-white to-brand-pink/20 p-7 shadow-soft">
              <h3 className="font-heading text-2xl font-bold text-brand-ink">
                {aboutPageContent.locationTitle[language]}
              </h3>
              <p className="mt-3 text-sm leading-7 text-brand-muted">
                {aboutPageContent.locationBody[language]}
              </p>
              <div className="mt-6 rounded-[22px] bg-white/80 p-5 shadow-sm">
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-brand-teal">
                  {language === 'bm' ? 'Alamat' : 'Address'}
                </p>
                <p className="mt-3 text-sm leading-7 text-brand-muted">
                  {siteContent.contact.address}
                </p>
              </div>
              <div className="mt-6">
                <ButtonLink href={siteContent.contact.whatsappHref} variant="primary">
                  {language === 'bm' ? 'Tanya Melalui WhatsApp' : 'Ask on WhatsApp'}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] bg-gradient-to-br from-cyan-50 via-white to-emerald-50 p-6 shadow-soft md:p-8">
          <div className="mb-6 max-w-xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-brand-teal">
              {language === 'bm' ? 'Nilai & Pendekatan' : 'Values & Approach'}
            </p>
            <h3 className="mt-3 font-heading text-3xl font-bold text-brand-ink">
              {language === 'bm'
                ? 'Asas penjagaan yang membantu ibu bapa rasa yakin'
                : 'Care foundations that help parents feel reassured'}
            </h3>
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
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
