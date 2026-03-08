import { ExternalLink } from 'lucide-react';
import type { Publication } from '../types/resume';

interface Props {
  publications: Publication[];
}

export default function Publications({ publications }: Props) {
  return (
    <section id="publications" className="py-16 border-t border-slate-100 dark:border-slate-800/60">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading num="05">Publications</SectionHeading>

        <div className="mt-4">
          {publications.map((pub, i) => (
            <article
              key={i}
              className="py-10 border-b last:border-b-0 border-slate-100 dark:border-slate-800/60 first:border-t first:border-slate-100 first:dark:border-slate-800/60"
            >
              <div className="grid md:grid-cols-[1fr_auto] gap-2 md:gap-12 items-start">
                <div>
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-start gap-2 text-slate-900 dark:text-slate-100 font-bold text-xl md:text-2xl leading-tight hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
                  >
                    {pub.title}
                    <ExternalLink size={16} className="shrink-0 mt-1.5 text-slate-400 group-hover:text-accent-500 dark:group-hover:text-accent-400 transition-colors" />
                  </a>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">{pub.authors}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-mono text-xs text-slate-400 dark:text-slate-500 whitespace-nowrap">{pub.year}</span>
                </div>
              </div>
              <p className="text-slate-400 dark:text-slate-600 font-mono text-xs mt-3 tracking-wide">{pub.journal}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ children, num }: { children: React.ReactNode; num: string }) {
  return (
    <div className="flex items-center gap-5 mb-2">
      <span className="font-mono text-accent-500 dark:text-accent-400 text-sm font-medium">{num}</span>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 leading-none tracking-tight">
        {children}
      </h2>
    </div>
  );
}
