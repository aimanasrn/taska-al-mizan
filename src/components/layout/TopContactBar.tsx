import { MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../../app/providers/useLanguage';
import { siteContent } from '../../content/site';

export function TopContactBar() {
  const { language } = useLanguage();

  return (
    <div className="bg-brand-yellow">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-3 text-sm font-semibold text-brand-ink md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-4">
          <span className="rounded-full bg-white/80 px-3 py-1 font-extrabold">
            {siteContent.brand.name}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin size={16} />
            {siteContent.topBar.location[language]}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-2">
            <Phone size={16} />
            {siteContent.contact.phone}
          </span>
          <a
            className="rounded-full bg-white px-4 py-2 shadow-sm transition hover:-translate-y-0.5"
            href={siteContent.contact.whatsappHref}
            rel="noreferrer"
            target="_blank"
          >
            {siteContent.topBar.cta[language]}
          </a>
        </div>
      </div>
    </div>
  );
}
