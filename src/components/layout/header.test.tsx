import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderApp } from '../../test/renderApp';

test('opens the mobile menu and exposes the WhatsApp CTA', async () => {
  const user = userEvent.setup();
  renderApp(['/']);

  await user.click(screen.getByRole('button', { name: /buka menu/i }));

  expect(screen.getAllByRole('link', { name: /whatsapp sekarang/i })[0]).toBeInTheDocument();
});
