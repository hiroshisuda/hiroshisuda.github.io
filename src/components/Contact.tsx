import { Github, Linkedin } from 'lucide-react';
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
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            I'm always open to new opportunities and conversations. Whether you have a project in
            mind or just want to connect, feel free to reach out via GitHub or LinkedIn.
          </p>

          <div className="flex gap-6">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              <Github size={16} />
              GitHub
            </a>
            {links.linkedin && (
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-slate-700 hover:border-teal-500 text-slate-300 hover:text-teal-400 font-medium px-6 py-3 rounded-lg transition-colors text-sm"
              >
                <Linkedin size={16} />
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
    <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-4">
      <span className="text-teal-400 font-mono text-xl">05.</span>
      {children}
      <div className="flex-1 h-px bg-slate-800 hidden sm:block" />
    </h2>
  );
}
