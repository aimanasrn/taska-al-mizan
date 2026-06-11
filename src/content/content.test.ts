import { homeHero } from './home';
import { siteContent } from './site';

test('stores WhatsApp CTA content for both supported languages', () => {
  expect(homeHero.title.bm).toBe('Tempat Yang Selamat & Ceria Untuk Si Kecil Anda');
  expect(homeHero.title.en).toBe('A Safe & Cheerful Place for Your Little One');
  expect(siteContent.contact.whatsappHref).toContain('wa.me/60139491544');
});
