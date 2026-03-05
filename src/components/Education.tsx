import { GraduationCap } from 'lucide-react';
import type { EducationEntry } from '../types/resume';

interface Props {
  education: EducationEntry[];
}

export default function Education({ education }: Props) {
  return (
    <section id="education" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading>Education</SectionHeading>

        <div className="mt-12 space-y-4">
          {education.map((entry, i) => (
            <div
              key={i}
              className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex gap-5"
            >
              <div className="shrink-0 text-teal-500 dark:text-teal-400 mt-1">
                <GraduationCap size={24} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="text-slate-900 dark:text-slate-100 font-semibold">{entry.degree}</h3>
                    <p className="text-teal-600 dark:text-teal-400 text-sm font-medium mt-0.5">
                      {entry.institution} — {entry.location}
                    </p>
                  </div>
                  <span className="text-slate-400 dark:text-slate-500 text-sm font-mono shrink-0">{entry.graduation}</span>
                </div>
                {entry.notes.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {entry.notes.map((note) => (
                      <li key={note} className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                        <span className="text-teal-500">▸</span>
                        {note}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-4">
      <span className="text-teal-500 dark:text-teal-400 font-mono text-xl">04.</span>
      {children}
      <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />
    </h2>
  );
}
