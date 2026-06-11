import { screen } from '@testing-library/react';
import { renderApp } from '../test/renderApp';

test('renders the homepage trust and conversion sections', () => {
  renderApp(['/']);

  expect(screen.getByText(/mengapa ibu bapa memilih taska al-mizan/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /lihat program/i })).toBeInTheDocument();
  expect(
    screen.getByRole('img', { name: /ruang ceria untuk kanak-kanak bermain dan belajar/i }),
  ).toBeInTheDocument();
});
