import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../app/providers/useLanguage';
import { navItems, siteContent } from '../../content/site';
import { cn } from '../../lib/utils';
import { ButtonLink } from '../common/ButtonLink';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { MobileNav } from './MobileNav';

export function SiteHeader() {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 6);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-30 border-b border-transparent bg-white/85 backdrop-blur',
        scrolled && 'border-brand-teal/10 shadow-soft',
      )}
      role="banner"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <div>
          <NavLink className="font-heading text-2xl font-bold text-brand-ink" to="/">
            {siteContent.brand.name}
          </NavLink>
          <p className="hidden text-sm text-brand-muted md:block">
            {siteContent.brand.tagline[language]}
          </p>
        </div>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              className={({ isActive }) =>
                cn(
                  'text-sm font-bold transition hover:text-brand-teal',
                  isActive ? 'text-brand-teal' : 'text-brand-ink',
                )
              }
              to={item.href}
            >
              {item.label[language]}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <ButtonLink href={siteContent.contact.whatsappHref} variant="primary">
            {siteContent.header.primaryCta[language]}
          </ButtonLink>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button
            aria-label={open ? siteContent.header.closeMenu[language] : siteContent.header.openMenu[language]}
            className="rounded-full bg-brand-teal p-3 text-white shadow-soft"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <MobileNav onNavigate={() => setOpen(false)} open={open} />
    </header>
  );
}
