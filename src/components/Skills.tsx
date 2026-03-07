import type { SkillGroup } from '../types/resume';

interface Props {
  skills: SkillGroup[];
  additionalSkills: string[];
}

export default function Skills({ skills, additionalSkills }: Props) {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading>Skills</SectionHeading>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <h3 className="text-slate-500 dark:text-slate-300 font-semibold text-sm uppercase tracking-widest mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white dark:bg-slate-800 text-accent-700 dark:text-accent-300 text-xs font-mono px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
          <h3 className="text-slate-500 dark:text-slate-300 font-semibold text-sm uppercase tracking-widest mb-4">
            Methodologies & Practices
          </h3>
          <ul className="grid sm:grid-cols-2 gap-2">
            {additionalSkills.map((skill) => (
              <li key={skill} className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                <span className="text-accent-500">▸</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-4">
      <span className="text-accent-500 dark:text-accent-400 font-mono text-xl">03.</span>
      {children}
      <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />
    </h2>
  );
}
