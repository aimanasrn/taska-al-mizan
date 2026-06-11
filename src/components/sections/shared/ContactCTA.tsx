import { Phone } from 'lucide-react';
import { useLanguage } from '../../../app/providers/useLanguage';
import { homeContactCta } from '../../../content/home';
import { siteContent } from '../../../content/site';
import { ButtonLink } from '../../common/ButtonLink';
import { ImageCard } from '../../common/ImageCard';
import { SectionHeading } from '../../common/SectionHeading';

export function ContactCTA() {
  const { language } = useLanguage();

  return (
    <section className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-brand-yellow via-rose-100 to-brand-pink px-6 py-10 shadow-soft md:px-10 md:py-14">
      <div className="absolute -left-8 top-6 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
      <div className="absolute bottom-0 right-0 h-36 w-36 rounded-full bg-white/20 blur-3xl" />
      <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <SectionHeading
            title={homeContactCta.title[language]}
            description={homeContactCta.description[language]}
          />
          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={siteContent.contact.whatsappHref} variant="primary">
              {homeContactCta.primaryCta[language]}
            </ButtonLink>
            <ButtonLink href={`tel:${siteContent.contact.phone}`} variant="outline">
              <Phone className="mr-2" size={18} />
              {homeContactCta.secondaryCta[language]}
            </ButtonLink>
          </div>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-white/70 px-4 py-3 text-sm font-bold text-brand-ink shadow-sm">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-teal text-white">
              9
            </span>
            {language === 'bm'
              ? 'Presint 9, Putrajaya dan mudah dihubungi melalui WhatsApp'
              : 'Conveniently located in Presint 9, Putrajaya with easy WhatsApp contact'}
          </div>
        </div>

        <div className="lg:justify-self-end lg:max-w-md">
          <ImageCard
            badge={language === 'bm' ? 'Pendaftaran Mesra' : 'Friendly Enquiries'}
            description={
              language === 'bm'
                ? 'Hubungi kami untuk bertanya tentang kekosongan, rutin harian, dan langkah pendaftaran.'
                : 'Reach out to ask about availability, daily routines, and registration steps.'
            }
            imageAlt={
              language === 'bm'
                ? 'Guru bersama kanak-kanak dalam suasana taska yang ceria'
                : 'Teacher with children in a cheerful childcare setting'
            }
            imageSrc="/images/gallery-group-play.png"
            objectPosition="center"
            title={language === 'bm' ? 'Mula perbualan dengan tenang' : 'Start the conversation with confidence'}
            tone="pink"
          />
        </div>
      </div>
    </section>
  );
}
