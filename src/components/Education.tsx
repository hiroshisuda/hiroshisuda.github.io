import type { EducationEntry } from '../types/resume';

interface Props {
  education: EducationEntry[];
}

export default function Education({ education }: Props) {
  return (
    <section id="education" className="py-16 border-t border-slate-100 dark:border-slate-800/60">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading num="04">Education</SectionHeading>

        <div className="mt-12 space-y-0">
          {education.map((entry, i) => (
            <article key={i} className="py-10 border-b last:border-b-0 border-slate-100 dark:border-slate-800/60 first:border-t first:border-slate-100 first:dark:border-slate-800/60">
              <div className="grid md:grid-cols-[1fr_auto] gap-2 md:gap-12 items-start mb-3">
                <div>
                  <p className="text-accent-500 dark:text-accent-400 font-bold text-sm uppercase tracking-widest mb-1">
                    {entry.institution}
                  </p>
                  <h3 className="text-slate-900 dark:text-slate-100 font-bold text-xl md:text-2xl">
                    {entry.degree}
                  </h3>
                </div>
                <span className="font-mono text-xs text-slate-400 dark:text-slate-500 md:text-right whitespace-nowrap pt-1">
                  {entry.graduation}
                </span>
              </div>

              <p className="text-slate-500 dark:text-slate-500 text-sm mb-3">{entry.location}</p>

              {entry.notes.length > 0 && (
                <ul className="space-y-1">
                  {entry.notes.map((note) => (
                    <li key={note} className="flex items-center gap-2 text-slate-500 dark:text-slate-500 text-sm">
                      <span className="text-accent-500 dark:text-accent-400">▸</span>
                      {note}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ children, num }: { children: React.ReactNode; num: string }) {
  return (
    <div className="flex items-center gap-5">
      <span className="font-mono text-accent-500 dark:text-accent-400 text-sm font-medium">{num}</span>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 leading-none tracking-tight">
        {children}
      </h2>
    </div>
  );
}
