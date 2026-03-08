import { MapPin, ArrowDownRight } from 'lucide-react';

interface Props {
  name: string;
  title: string;
  location: string;
  summary: string;
}

export default function Hero({ name, location, summary }: Props) {
  const [first, last] = name.split(' ');

  return (
    <section id="about" className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden">
      {/* Dot grid background */}
      <div className="hero-dots absolute inset-0 opacity-40" />

      {/* Radial accent glow */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-accent-500/8 dark:bg-accent-500/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-16 w-80 h-80 bg-accent-400/6 dark:bg-accent-400/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 w-full py-20">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-accent-500" />
          <span className="font-mono text-accent-500 dark:text-accent-400 text-xs tracking-[0.25em] uppercase">
            Software Engineer
          </span>
        </div>

        {/* Name — massive display */}
        <h1 className="font-bold leading-[0.88] tracking-tight mb-8 select-none">
          <span className="block text-[clamp(3.5rem,11vw,8.5rem)] text-slate-900 dark:text-slate-50">
            {first}
          </span>
          <span className="block text-[clamp(3.5rem,11vw,8.5rem)] text-accent-500 dark:text-accent-400">
            {last}
          </span>
        </h1>

        {/* Divider */}
        <div className="w-full h-px bg-slate-200 dark:bg-slate-800 mb-10" />

        {/* Sub-row: location + summary + buttons */}
        <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-start max-w-4xl">
          {/* Location */}
          <div className="md:pt-1 shrink-0">
            <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm">
              <MapPin size={13} className="text-accent-500" />
              <span className="font-mono text-xs tracking-wide">{location}</span>
            </div>
          </div>

          {/* Summary + CTAs */}
          <div>
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed mb-8">
              {summary}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                View My Work
                <ArrowDownRight size={15} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-slate-200 dark:border-slate-700 hover:border-accent-500 dark:hover:border-accent-500 text-slate-700 dark:text-slate-300 hover:text-accent-600 dark:hover:text-accent-400 font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
