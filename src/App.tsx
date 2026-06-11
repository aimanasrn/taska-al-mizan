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
      <div className="min-h-screen bg-brand-cream text-brand-ink">
        <TopContactBar />
        <SiteHeader />
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-8">
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
