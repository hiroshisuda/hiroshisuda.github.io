import type { ExperienceEntry } from '../types/resume';

interface Props {
  experience: ExperienceEntry[];
}

export default function Experience({ experience }: Props) {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading>Experience</SectionHeading>

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-slate-800 hidden md:block" />

          <div className="space-y-12">
            {experience.map((entry, i) => (
              <div key={i} className="md:pl-10 relative">
                {/* Timeline dot */}
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-teal-500 hidden md:block ring-4 ring-slate-950" />

                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                    <div>
                      <h3 className="text-slate-100 font-semibold text-lg leading-tight">
                        {entry.title}
                      </h3>
                      <p className="text-teal-400 font-medium text-sm mt-0.5">{entry.company}</p>
                    </div>
                    <span className="text-slate-500 text-sm font-mono shrink-0">{entry.period}</span>
                  </div>

                  <ul className="space-y-2">
                    {entry.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                        <span className="text-teal-500 mt-1.5 shrink-0">▸</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-4">
      <span className="text-teal-400 font-mono text-xl">02.</span>
      {children}
      <div className="flex-1 h-px bg-slate-800 hidden sm:block" />
    </h2>
  );
}
