export interface ExperienceRole {
  title: string;
  period: string;
  description?: string;
  bullets?: string[];
}

export interface ExperienceEntry {
  company: string;
  roles: ExperienceRole[];
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

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  url: string;
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
  publications?: Publication[];
}
