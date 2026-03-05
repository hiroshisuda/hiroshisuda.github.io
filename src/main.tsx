import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// Default to dark mode; switch to light only if user explicitly prefers light
const prefersDark = !window.matchMedia('(prefers-color-scheme: light)').matches;
if (prefersDark) {
  document.documentElement.classList.add('dark');
}

// Keep in sync if the user changes their system preference
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
  if (e.matches) {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
