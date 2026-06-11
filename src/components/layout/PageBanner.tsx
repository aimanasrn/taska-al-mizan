import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';

type PageBannerProps = {
  title: string;
  description: string;
};

export function PageBanner({ title, description }: PageBannerProps) {
  return (
    <section className="relative overflow-hidden rounded-[40px] bg-hero-wash px-6 py-14 shadow-soft md:px-10 md:py-20">
      <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-brand-yellow/40 blur-3xl" />
      <div className="absolute bottom-0 left-10 h-36 w-36 rounded-full bg-brand-pink/35 blur-3xl" />
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 14 }}
        transition={{ duration: 0.45 }}
      >
        <SectionHeading centered eyebrow="Taska Al-Mizan" title={title} description={description} />
      </motion.div>
    </section>
  );
}
