import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './app/providers/LanguageProvider';
import { AppRoutes } from './app/routes';
import { FloatingWhatsAppButton } from './components/common/FloatingWhatsAppButton';
import { Footer } from './components/layout/Footer';
import { SiteHeader } from './components/layout/SiteHeader';
import { TopContactBar } from './components/layout/TopContactBar';

export function AppShell() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen overflow-hidden bg-brand-cream text-brand-ink">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-brand-yellow/20 blur-3xl" />
          <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-brand-teal/15 blur-3xl" />
          <div className="absolute bottom-24 left-1/3 h-72 w-72 rounded-full bg-brand-pink/15 blur-3xl" />
        </div>
        <TopContactBar />
        <SiteHeader />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-8">
          <AppRoutes />
        </div>
        <Footer />
        <FloatingWhatsAppButton />
      </div>
    </LanguageProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
