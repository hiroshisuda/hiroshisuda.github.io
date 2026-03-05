import { MapPin, Download } from 'lucide-react';

interface Props {
  name: string;
  title: string;
  location: string;
  summary: string;
}

export default function Hero({ name, title, location, summary }: Props) {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-teal-400 font-mono text-sm mb-4 tracking-wider">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-100 tracking-tight mb-3">
          {name}
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-400 mb-6">
          {title}
        </h2>
        <div className="flex items-center gap-2 text-slate-500 text-sm mb-8">
          <MapPin size={14} />
          <span>{location}</span>
        </div>
        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-10">
          {summary}
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#experience"
            className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-slate-700 hover:border-teal-500 text-slate-300 hover:text-teal-400 font-medium px-6 py-3 rounded-lg transition-colors text-sm"
          >
            <Download size={16} />
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
