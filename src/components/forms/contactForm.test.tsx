import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageProvider } from '../../app/providers/LanguageProvider';
import { ContactForm } from './ContactForm';
import { renderWithRouter } from '../../test/renderApp';

test('shows validation messages for empty required fields', async () => {
  const user = userEvent.setup();

  renderWithRouter(
    <LanguageProvider>
      <ContactForm />
    </LanguageProvider>,
  );

  await user.click(screen.getByRole('button', { name: /hantar pertanyaan/i }));

  expect(screen.getByText(/nama ibu\/bapa diperlukan/i)).toBeInTheDocument();
  expect(screen.getByText(/nombor telefon diperlukan/i)).toBeInTheDocument();
  expect(screen.getByText(/umur anak diperlukan/i)).toBeInTheDocument();
  expect(screen.getByText(/mesej diperlukan/i)).toBeInTheDocument();
});
