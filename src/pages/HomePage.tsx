import { AboutPreviewSection } from '../components/sections/home/AboutPreviewSection';
import { DailyActivitiesSection } from '../components/sections/home/DailyActivitiesSection';
import { GalleryPreviewSection } from '../components/sections/home/GalleryPreviewSection';
import { HeroSection } from '../components/sections/home/HeroSection';
import { ProgramsPreviewSection } from '../components/sections/home/ProgramsPreviewSection';
import { TestimonialsSection } from '../components/sections/home/TestimonialsSection';
import { WhyChooseUsSection } from '../components/sections/home/WhyChooseUsSection';
import { ContactCTA } from '../components/sections/shared/ContactCTA';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutPreviewSection />
      <ProgramsPreviewSection />
      <WhyChooseUsSection />
      <DailyActivitiesSection />
      <GalleryPreviewSection />
      <TestimonialsSection />
      <div className="py-14">
        <ContactCTA />
      </div>
    </main>
  );
}
