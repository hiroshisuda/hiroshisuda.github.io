import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import type { Links } from '../types/resume';

interface Props {
  links: Links;
}

export default function Contact({ links }: Props) {
  return (
    <section id="contact" className="py-16 border-t border-slate-100 dark:border-slate-800/60">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading>Contact</SectionHeading>

        <div className="mt-12 max-w-2xl">
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed mb-10">
            I'm always open to new opportunities and conversations. Whether you have a project in
            mind or just want to connect, feel free to reach out via GitHub or LinkedIn.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              <GitHubIcon size={16} />
              GitHub
            </a>
            {links.linkedin && (
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 border-2 border-slate-200 dark:border-slate-700 hover:border-accent-500 dark:hover:border-accent-500 text-slate-700 dark:text-slate-300 hover:text-accent-600 dark:hover:text-accent-400 font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                <LinkedInIcon size={16} />
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-5">
      <span className="font-mono text-accent-500 dark:text-accent-400 text-sm font-medium">06</span>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 leading-none tracking-tight">
        {children}
      </h2>
    </div>
  );
}
