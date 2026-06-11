import { useLanguage } from '../../app/providers/useLanguage';
import { cn } from '../../lib/utils';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex rounded-full border border-brand-teal/25 bg-white/80 p-1 shadow-soft">
      {(['bm', 'en'] as const).map((item) => (
        <button
          key={item}
          aria-label={item.toUpperCase()}
          className={cn(
            'rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] transition',
            language === item
              ? 'bg-brand-teal text-white'
              : 'text-brand-muted hover:bg-brand-teal/10',
          )}
          onClick={() => setLanguage(item)}
          type="button"
        >
          {item}
        </button>
      ))}
    </div>
  );
}
