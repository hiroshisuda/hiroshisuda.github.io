import { Github, Mail, Linkedin } from 'lucide-react';
import type { Links } from '../types/resume';

interface Props {
  name: string;
  links: Links;
}

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Header({ name, links }: Props) {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 dark:bg-slate-950/90 backdrop-blur border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <a
          href="#about"
          className="text-slate-100 font-semibold text-lg tracking-tight hover:text-teal-400 transition-colors shrink-0"
        >
          {name}
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-slate-400 hover:text-teal-400 transition-colors font-medium"
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
            className="text-slate-400 hover:text-teal-400 transition-colors"
          >
            <Github size={20} />
          </a>
          {links.linkedin && (
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-teal-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          )}
          <a
            href={`mailto:${links.email}`}
            aria-label="Email"
            className="text-slate-400 hover:text-teal-400 transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}
