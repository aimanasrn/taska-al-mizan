import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../app/providers/useLanguage';
import { navItems, siteContent } from '../../content/site';

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="mt-20 bg-slate-900 text-slate-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <p className="font-heading text-2xl font-bold">{siteContent.brand.name}</p>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            {siteContent.footer.description[language]}
          </p>
        </div>
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-brand-yellow">
            {siteContent.footer.quickLinksTitle[language]}
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            {navItems.map((item) => (
              <NavLink key={item.key} to={item.href}>
                {item.label[language]}
              </NavLink>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-brand-yellow">
            {siteContent.footer.contactTitle[language]}
          </p>
          <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
            <p>{siteContent.contact.phone}</p>
            <p>{siteContent.contact.address}</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-brand-yellow">
            {siteContent.footer.socialTitle[language]}
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            {siteContent.footer.social.map((item) => (
              <a
                key={item.name}
                className="inline-flex items-center gap-3"
                href={item.href}
                rel="noreferrer"
                target={item.href.startsWith('http') ? '_blank' : undefined}
              >
                <item.icon size={18} />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
