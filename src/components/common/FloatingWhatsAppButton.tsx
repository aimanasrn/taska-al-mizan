import { MessageCircleMore } from 'lucide-react';
import { useLanguage } from '../../app/providers/useLanguage';
import { siteContent } from '../../content/site';

export function FloatingWhatsAppButton() {
  const { language } = useLanguage();

  return (
    <a
      aria-label={siteContent.header.primaryCta[language]}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full bg-brand-teal px-5 py-4 text-sm font-extrabold text-white shadow-float transition hover:-translate-y-0.5"
      href={siteContent.contact.whatsappHref}
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircleMore size={20} />
      <span className="hidden sm:inline">{siteContent.header.primaryCta[language]}</span>
    </a>
  );
}
