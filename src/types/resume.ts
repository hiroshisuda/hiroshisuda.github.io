export interface ExperienceEntry {
  company: string;
  title: string;
  period: string;
  description?: string;
  bullets?: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface EducationEntry {
  institution: string;
  location: string;
  degree: string;
  graduation: string;
  notes: string[];
}

export interface Links {
  github: string;
  linkedin?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  summary: string;
  links: Links;
  experience: ExperienceEntry[];
  skills: SkillGroup[];
  education: EducationEntry[];
  additionalSkills: string[];
}
