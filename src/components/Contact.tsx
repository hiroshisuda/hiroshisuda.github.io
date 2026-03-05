import { Mail, Github, Linkedin, MapPin } from 'lucide-react';
import type { Links } from '../types/resume';

interface Props {
  email: string;
  location: string;
  links: Links;
}

export default function Contact({ email, location, links }: Props) {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading>Contact</SectionHeading>

        <div className="mt-12 max-w-xl">
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            I'm always open to new opportunities and conversations. Whether you have a project in
            mind or just want to connect, feel free to reach out.
          </p>

          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-8 py-4 rounded-lg transition-colors mb-10"
          >
            <Mail size={18} />
            {email}
          </a>

          <div className="flex items-center gap-2 text-slate-500 text-sm mb-8">
            <MapPin size={14} />
            <span>{location}</span>
          </div>

          <div className="flex gap-6">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors text-sm"
            >
              <Github size={16} />
              GitHub
            </a>
            {links.linkedin && (
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors text-sm"
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
