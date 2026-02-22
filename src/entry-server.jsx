import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppContent } from './App';

export function render(url) {
  const helmetContext = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <MemoryRouter initialEntries={[url]} initialIndex={0}>
        <AppContent />
      </MemoryRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;

  return { html, helmet };
}
