import resume from './data/resume';
import { useDarkMode } from './hooks/useDarkMode';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  const { theme, toggle } = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Header name={resume.name} links={resume.links} theme={theme} onToggleTheme={toggle} />

      <main>
        <Hero
          name={resume.name}
          title={resume.title}
          location={resume.location}
          summary={resume.summary}
        />

        <div className="border-t border-slate-200 dark:border-slate-800/50">
          <Experience experience={resume.experience} />
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800/50">
          <Skills skills={resume.skills} additionalSkills={resume.additionalSkills} />
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800/50">
          <Education education={resume.education} />
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800/50">
          <Contact links={resume.links} />
        </div>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-6">
        <div className="max-w-5xl mx-auto px-6 text-center text-slate-400 dark:text-slate-600 text-xs font-mono">
          Built with React + TypeScript + Tailwind CSS
        </div>
      </footer>
    </div>
  );
}
