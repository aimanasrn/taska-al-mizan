import { cn } from '../../lib/utils';

const toneClasses = {
  teal: 'from-brand-teal/60 to-brand-teal/20',
  yellow: 'from-brand-yellow/80 to-white',
  pink: 'from-brand-pink/70 to-white',
  mint: 'from-brand-mint/80 to-white',
};

type ImageCardProps = {
  title: string;
  description: string;
  badge?: string;
  tone?: keyof typeof toneClasses;
  tall?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  objectPosition?: string;
};

export function ImageCard({
  title,
  description,
  badge,
  tone = 'teal',
  tall = false,
  imageSrc,
  imageAlt,
  objectPosition = 'center',
}: ImageCardProps) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-[28px] bg-white shadow-soft',
        tall ? 'min-h-[380px]' : 'min-h-[300px]',
      )}
    >
      {imageSrc ? (
        <>
          <img
            alt={imageAlt ?? title}
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            src={imageSrc}
            style={{ objectPosition }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-brand-ink/10 to-white/10" />
        </>
      ) : (
        <>
          <div className={cn('absolute inset-0 bg-gradient-to-br', toneClasses[tone])} />
          <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-white/25 blur-2xl" />
          <div className="absolute bottom-6 right-4 h-28 w-28 rounded-[32px] border border-white/35 bg-white/20 backdrop-blur-sm transition duration-300 group-hover:scale-105" />
        </>
      )}
      <div className="relative flex h-full flex-col justify-between gap-6 p-7">
        {badge ? (
          <span className="w-fit rounded-full bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-brand-ink shadow-sm">
            {badge}
          </span>
        ) : null}
        <div className={cn('mt-auto rounded-[24px] p-5 backdrop-blur', imageSrc ? 'bg-white/84' : 'bg-white/78')}>
          <p className="font-heading text-2xl font-bold text-brand-ink">{title}</p>
          <p className="mt-2 text-sm leading-7 text-brand-muted">{description}</p>
        </div>
      </div>
    </div>
  );
}
