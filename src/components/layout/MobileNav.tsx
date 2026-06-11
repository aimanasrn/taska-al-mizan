import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../app/providers/useLanguage';
import { navItems, siteContent } from '../../content/site';
import { ButtonLink } from '../common/ButtonLink';

type MobileNavProps = {
  open: boolean;
  onNavigate: () => void;
};

export function MobileNav({ open, onNavigate }: MobileNavProps) {
  const { language } = useLanguage();

  if (!open) {
    return null;
  }

  return (
    <div className="border-t border-brand-teal/10 bg-white/95 px-6 py-5 md:hidden">
      <nav className="flex flex-col gap-3">
        {navItems.map((item) => (
          <NavLink
            key={item.key}
            className="rounded-2xl px-4 py-3 text-sm font-bold text-brand-ink transition hover:bg-brand-teal/10"
            onClick={onNavigate}
            to={item.href}
          >
            {item.label[language]}
          </NavLink>
        ))}
      </nav>
      <div className="mt-5">
        <ButtonLink href={siteContent.contact.whatsappHref} variant="primary">
          {siteContent.header.primaryCta[language]}
        </ButtonLink>
      </div>
    </div>
  );
}
