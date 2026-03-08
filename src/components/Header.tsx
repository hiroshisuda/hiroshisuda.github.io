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
  { label: 'Publications', href: '#publications' },
  { label: 'Contact', href: '#contact' },
];

export default function Header({ name, links, theme, onToggleTheme }: Props) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800/60">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <a
          href="#about"
          className="font-bold text-base tracking-tight text-slate-900 dark:text-slate-100 hover:text-accent-500 dark:hover:text-accent-400 transition-colors shrink-0"
        >
          {name.split(' ')[0]}{' '}
          <span className="text-accent-500 dark:text-accent-400">{name.split(' ')[1]}</span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
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
            className="text-slate-400 dark:text-slate-500 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
          >
            <GitHubIcon size={19} />
          </a>
          {links.linkedin && (
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 dark:text-slate-500 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
            >
              <LinkedInIcon size={19} />
            </a>
          )}
          <button
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="text-slate-400 dark:text-slate-500 hover:text-accent-500 dark:hover:text-accent-400 transition-colors cursor-pointer"
          >
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>
        </div>
      </div>
    </header>
  );
}
