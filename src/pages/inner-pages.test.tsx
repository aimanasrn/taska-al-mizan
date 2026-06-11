import { screen } from '@testing-library/react';
import { renderApp } from '../test/renderApp';

test('renders the programs page with childcare offering cards', () => {
  renderApp(['/programs']);

  expect(screen.getByText(/penjagaan sepenuh hari/i)).toBeInTheDocument();
  expect(screen.getByText(/nilai islam & adab asas/i)).toBeInTheDocument();
});
