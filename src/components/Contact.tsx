import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import type { Links } from '../types/resume';

interface Props {
  links: Links;
}

export default function Contact({ links }: Props) {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading>Contact</SectionHeading>

        <div className="mt-12 max-w-xl">
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10">
            I'm always open to new opportunities and conversations. Whether you have a project in
            mind or just want to connect, feel free to reach out via GitHub or LinkedIn.
          </p>

          <div className="flex gap-6">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white dark:text-slate-950 font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              <GitHubIcon size={16} />
              GitHub
            </a>
            {links.linkedin && (
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-slate-300 dark:border-slate-700 hover:border-amber-500 dark:hover:border-amber-500 text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 font-medium px-6 py-3 rounded-lg transition-colors text-sm"
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
    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-4">
      <span className="text-amber-500 dark:text-amber-400 font-mono text-xl">05.</span>
      {children}
      <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />
    </h2>
  );
}
