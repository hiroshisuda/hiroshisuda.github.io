import type { SkillGroup } from '../types/resume';

interface Props {
  skills: SkillGroup[];
  additionalSkills: string[];
}

export default function Skills({ skills, additionalSkills }: Props) {
  return (
    <section id="skills" className="py-16 border-t border-slate-100 dark:border-slate-800/60">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading num="03">Skills</SectionHeading>

        <div className="mt-12 space-y-10">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-[11px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 hover:border-accent-400 hover:text-accent-600 dark:hover:text-accent-300 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60">
            <h3 className="font-mono text-[11px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-3">
              Methodologies & Practices
            </h3>
            <div className="flex flex-wrap gap-2">
              {additionalSkills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1.5 rounded-md font-medium text-accent-600 dark:text-accent-400 bg-accent-500/8 dark:bg-accent-500/10 border border-accent-200 dark:border-accent-500/20 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
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
