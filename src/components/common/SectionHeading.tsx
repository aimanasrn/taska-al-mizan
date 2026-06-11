type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.24em] text-brand-teal">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl font-bold leading-tight text-brand-ink md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-brand-muted md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
