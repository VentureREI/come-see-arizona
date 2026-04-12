import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import Router from './Router'

const rootElement = document.getElementById('root')!;
const app = (
  <StrictMode>
    <HelmetProvider>
      <Router />
    </HelmetProvider>
  </StrictMode>
);

if (rootElement.innerHTML.trim().length > 0) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
