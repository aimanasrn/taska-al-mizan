import type { LucideIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

const toneClasses = {
  teal: 'border-cyan-100 bg-gradient-to-br from-cyan-50 to-white',
  yellow: 'border-amber-100 bg-gradient-to-br from-amber-50 to-white',
  pink: 'border-rose-100 bg-gradient-to-br from-rose-50 to-white',
  mint: 'border-emerald-100 bg-gradient-to-br from-emerald-50 to-white',
};

const iconToneClasses = {
  teal: 'bg-cyan-100 text-cyan-700',
  yellow: 'bg-amber-100 text-amber-700',
  pink: 'bg-rose-100 text-rose-700',
  mint: 'bg-emerald-100 text-emerald-700',
};

type InfoCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  tone?: keyof typeof toneClasses;
};

export function InfoCard({
  icon: Icon,
  title,
  description,
  tone = 'teal',
}: InfoCardProps) {
  return (
    <article
      className={cn(
        'rounded-[28px] border p-7 shadow-soft transition duration-200 hover:-translate-y-1 hover:shadow-float',
        toneClasses[tone],
      )}
    >
      <div
        className={cn(
          'mb-5 inline-flex rounded-2xl p-3 shadow-sm ring-4 ring-white/60',
          iconToneClasses[tone],
        )}
      >
        <Icon size={24} />
      </div>
      <h3 className="font-heading text-2xl font-bold text-brand-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-brand-muted">{description}</p>
      <div className="mt-5 h-1.5 w-16 rounded-full bg-white/80" />
    </article>
  );
}
