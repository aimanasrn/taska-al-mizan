import type { LucideIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

const toneClasses = {
  teal: 'bg-cyan-50',
  yellow: 'bg-amber-50',
  pink: 'bg-rose-50',
  mint: 'bg-emerald-50',
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
        'rounded-[28px] border border-white/60 p-7 shadow-soft transition duration-200 hover:-translate-y-1 hover:shadow-float',
        toneClasses[tone],
      )}
    >
      <div className="mb-5 inline-flex rounded-2xl bg-white p-3 text-brand-teal shadow-sm">
        <Icon size={24} />
      </div>
      <h3 className="font-heading text-2xl font-bold text-brand-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-brand-muted">{description}</p>
    </article>
  );
}
