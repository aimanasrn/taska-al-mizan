import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderApp } from '../test/renderApp';

test('renders the home route with a language toggle and translated nav', async () => {
  const user = userEvent.setup();
  renderApp(['/']);

  expect(screen.getByRole('heading', { name: /tempat yang selamat/i })).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: 'Utama' }).length).toBeGreaterThan(0);

  await user.click(screen.getAllByRole('button', { name: 'EN' })[0]);

  expect(screen.getByRole('heading', { name: /a safe & cheerful place/i })).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: 'Home' }).length).toBeGreaterThan(0);
});
