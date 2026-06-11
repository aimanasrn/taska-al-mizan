import { Phone } from 'lucide-react';
import { useLanguage } from '../../../app/providers/useLanguage';
import { homeContactCta } from '../../../content/home';
import { siteContent } from '../../../content/site';
import { ButtonLink } from '../../common/ButtonLink';
import { SectionHeading } from '../../common/SectionHeading';

export function ContactCTA() {
  const { language } = useLanguage();

  return (
    <section className="rounded-[36px] bg-gradient-to-r from-brand-yellow via-rose-100 to-brand-pink px-6 py-10 shadow-soft md:px-10 md:py-14">
      <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
        <SectionHeading
          title={homeContactCta.title[language]}
          description={homeContactCta.description[language]}
        />
        <div className="flex flex-col gap-4 sm:flex-row md:justify-end">
          <ButtonLink href={siteContent.contact.whatsappHref} variant="primary">
            {homeContactCta.primaryCta[language]}
          </ButtonLink>
          <ButtonLink href={`tel:${siteContent.contact.phone}`} variant="outline">
            <Phone className="mr-2" size={18} />
            {homeContactCta.secondaryCta[language]}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
