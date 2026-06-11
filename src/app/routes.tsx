import { Route, Routes } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import GalleryPage from '../pages/GalleryPage';
import HomePage from '../pages/HomePage';
import ProgramsPage from '../pages/ProgramsPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<ProgramsPage />} path="/programs" />
      <Route element={<GalleryPage />} path="/gallery" />
      <Route element={<ContactPage />} path="/contact" />
    </Routes>
  );
}
