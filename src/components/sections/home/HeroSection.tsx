import { motion } from 'framer-motion';
import { useLanguage } from '../../../app/providers/useLanguage';
import { heroHighlights, homeHero } from '../../../content/home';
import { siteContent } from '../../../content/site';
import { ButtonLink } from '../../common/ButtonLink';
import { ImageCard } from '../../common/ImageCard';

export function HeroSection() {
  const { language } = useLanguage();

  return (
    <section className="py-10 md:py-16">
      <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.45 }}
        >
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.24em] text-brand-teal">
            {homeHero.eyebrow[language]}
          </p>
          <h1 className="font-heading text-5xl font-extrabold leading-[1.02] text-brand-ink md:text-7xl">
            {homeHero.title[language]}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-brand-muted">
            {homeHero.description[language]}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={siteContent.contact.whatsappHref} variant="primary">
              {homeHero.primaryCta[language]}
            </ButtonLink>
            <ButtonLink to="/programs" variant="secondary">
              {homeHero.secondaryCta[language]}
            </ButtonLink>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {heroHighlights.map((item) => (
              <div
                key={item.text.en}
                className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-3 text-sm font-bold text-brand-ink shadow-soft"
              >
                <item.icon className="text-brand-teal" size={18} />
                {item.text[language]}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <ImageCard
            badge={language === 'bm' ? 'Suasana Selamat' : 'Safe Environment'}
            description={homeHero.imageLabel[language]}
            tall
            title={language === 'bm' ? 'Ruang belajar, bermain dan berkembang' : 'A place to learn, play, and grow'}
            tone="teal"
          />
        </motion.div>
      </div>
    </section>
  );
}
