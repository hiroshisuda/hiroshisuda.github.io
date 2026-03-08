import resume from './data/resume';
import { useDarkMode } from './hooks/useDarkMode';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Publications from './components/Publications';
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
        <Experience experience={resume.experience} />
        <Skills skills={resume.skills} additionalSkills={resume.additionalSkills} />
        <Education education={resume.education} />
        {resume.publications && resume.publications.length > 0 && (
          <Publications publications={resume.publications} />
        )}
        <Contact links={resume.links} />
      </main>

      <footer className="border-t border-slate-100 dark:border-slate-800/60 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-slate-400 dark:text-slate-600 text-xs font-mono tracking-wider">
          Built with React + TypeScript + Tailwind CSS
        </div>
      </footer>
    </div>
  );
}
