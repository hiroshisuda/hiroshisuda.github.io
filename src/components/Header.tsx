import { Sun, Moon } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import type { Links } from '../types/resume';

interface Props {
  name: string;
  links: Links;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Header({ name, links, theme, onToggleTheme }: Props) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <a
          href="#about"
          className="text-slate-900 dark:text-slate-100 font-semibold text-lg tracking-tight hover:text-amber-500 dark:hover:text-amber-400 transition-colors shrink-0"
        >
          {name}
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-slate-500 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors font-medium"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 shrink-0">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-500 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
          >
            <GitHubIcon size={20} />
          </a>
          {links.linkedin && (
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-500 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
            >
              <LinkedInIcon size={20} />
            </a>
          )}
          <button
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="text-slate-500 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors cursor-pointer"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
