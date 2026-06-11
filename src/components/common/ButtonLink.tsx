import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

type ButtonLinkProps = {
  to?: string;
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  ariaLabel?: string;
};

const variantClasses = {
  primary:
    'bg-brand-teal text-white shadow-soft hover:-translate-y-0.5 hover:shadow-float',
  secondary:
    'btn-secondary bg-brand-pink text-white shadow-soft hover:-translate-y-0.5 hover:shadow-float',
  outline:
    'border-2 border-brand-teal bg-white/80 text-brand-teal hover:-translate-y-0.5 hover:shadow-soft',
};

const sharedClasses =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-extrabold transition duration-200';

export function ButtonLink({
  to,
  href,
  children,
  variant = 'primary',
  className,
  ariaLabel,
}: ButtonLinkProps) {
  const classes = cn(sharedClasses, variantClasses[variant], className);

  if (to) {
    return (
      <Link aria-label={ariaLabel} className={classes} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <a aria-label={ariaLabel} className={classes} href={href}>
      {children}
    </a>
  );
}
