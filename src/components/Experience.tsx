import type { ExperienceEntry } from '../types/resume';

interface Props {
  experience: ExperienceEntry[];
}

export default function Experience({ experience }: Props) {
  return (
    <section id="experience" className="py-16 border-t border-slate-100 dark:border-slate-800/60">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading num="02">Experience</SectionHeading>

        <div className="mt-4">
          {experience.map((entry, i) => (
            <article
              key={i}
              className="py-10 border-b last:border-b-0 border-slate-100 dark:border-slate-800/60 first:border-t first:border-slate-100 first:dark:border-slate-800/60"
            >
              {/* Company header */}
              <p className="text-accent-500 dark:text-accent-400 font-bold text-sm uppercase tracking-widest mb-6">
                {entry.company}
              </p>

              {/* Roles */}
              <div className="space-y-0">
                {entry.roles.map((role, j) => {
                  const isLast = j === entry.roles.length - 1;
                  return (
                    <div key={j} className="flex gap-5">
                      {/* Timeline column: dot + connector line (multi-role only) */}
                      <div className="flex flex-col items-center shrink-0 w-[11px]">
                        {entry.roles.length > 1 && (
                          <div className="w-[11px] h-[11px] rounded-full border-2 border-accent-500 dark:border-accent-400 bg-white dark:bg-slate-950 shrink-0 mt-[11px]" />
                        )}
                        {entry.roles.length > 1 && !isLast && (
                          <div className="w-px flex-1 bg-slate-200 dark:bg-slate-700 mt-1.5" />
                        )}
                      </div>

                      {/* Content column */}
                      <div className={`flex-1 min-w-0 ${isLast ? '' : 'pb-8'}`}>
                        <div className="grid md:grid-cols-[1fr_auto] gap-1 md:gap-12 items-start mb-3">
                          <h3 className="text-slate-900 dark:text-slate-100 font-bold text-xl md:text-2xl leading-tight">
                            {role.title}
                          </h3>
                          <span className="font-mono text-xs text-slate-400 dark:text-slate-500 md:text-right whitespace-nowrap pt-1">
                            {role.period}
                          </span>
                        </div>

                        {role.description && (
                          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-2xl mb-4">
                            {role.description}
                          </p>
                        )}

                        {role.bullets && role.bullets.length > 0 && (
                          <ul className="space-y-2 max-w-2xl">
                            {role.bullets.map((bullet, k) => (
                              <li key={k} className="flex gap-3 text-slate-500 dark:text-slate-500 text-sm leading-relaxed">
                                <span className="text-accent-500 dark:text-accent-400 shrink-0 mt-0.5">▸</span>
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
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
