import type { ResumeData } from '../types/resume';

const resume: ResumeData = {
  name: 'Hiroshi Suda',
  title: 'Senior Software Engineer',
  summary:
    'Detail-oriented software engineer with 8+ years of experience in full-stack development, specializing in visualizations, cloud technologies, and automation. Proven expertise in optimizing development processes, implementing DevOps practices, and leading Agile teams as a Scrum Master. Adept at leveraging modern web technologies, backend frameworks, and cloud solutions to build scalable applications.',
  location: 'Pittsburgh, PA',
  links: {
    github: 'https://github.com/hiroshisuda',
    linkedin: 'https://www.linkedin.com/in/hiroshi-suda-662a23101/',
  },
  experience: [
    {
      company: 'Torc Robotics',
      title: 'Senior Software Engineer',
      period: 'July 2024 – Present',
      bullets: [
        'Develop low-latency applications for monitoring and assisting a fleet of autonomous vehicles.',
        'Facilitated Agile processes as Scrum Master, overseeing standups and backlog refinement.',
        'Collaborated with product management to track delivery progress and refine development plans.',
        'Built applications using React, Python, GraphQL, and AWS technologies like AppSync and DynamoDB.',
        'Implemented team performance metrics and dashboards via Datadog to measure productivity.',
      ],
    },
    {
      company: 'Torc Robotics',
      title: 'Full Stack Software Engineer',
      period: 'September 2021 – June 2024',
      bullets: [
        'Designed and implemented visualizations for autonomous vehicles using Golang, XViz, and JavaScript.',
        'Developed and deployed applications using AWS technologies, including Greengrass and ECS.',
        'Served as Scrum Master, managing daily standups, backlog grooming, sprint planning, and demos.',
        'Prioritized team tasks and coordinated with stakeholders to ensure smooth development cycles.',
      ],
    },
    {
      company: 'Savvior Custom Software Solutions',
      title: 'Software Developer',
      period: 'January 2021 – June 2021',
      bullets: [
        'Created and maintained backend systems to facilitate workflows and synchronize client data across multiple APIs using Laravel, Doctrine/DBAL, and SQL.',
        'Collaborated with clients and senior developers to solve technical challenges and optimize project workflows.',
      ],
    },
    {
      company: 'UNCG Online',
      title: 'Full Stack Developer',
      period: 'May 2017 – December 2020',
      bullets: [
        'Built and tested frontend and backend applications with Laravel PHP, React JS, MySQL, and PHPUnit.',
        'Implemented automated testing to ensure software quality throughout the development cycle.',
        'Developed and maintained REST APIs and managed cloud hosting environments on Azure.',
        'Integrated secure login using OAuth 2.0 and PKCE to meet industry security standards.',
        'Led development both remotely and on-site in a highly collaborative environment.',
      ],
    },
    {
      company: 'UNCG Online',
      title: 'Web Development Intern',
      period: 'July 2016 – May 2017',
      bullets: [
        'Spearheaded department-wide improvements in WordPress theme development, reducing redundant work.',
        'Developed WordPress themes for online courses and university marketing sites.',
        'Maintained legacy AngularJS applications.',
      ],
    },
    {
      company: 'Kernersville Chrysler Dodge Jeep Ram',
      title: 'Assistant Webmaster',
      period: 'May 2014 – July 2016',
      bullets: [
        'Designed and implemented internal applications to automate sales and marketing tasks, increasing productivity by up to 80%.',
        'Led a full website redesign using Drupal 7 CMS with custom themes and modules.',
        'Provided technical support for sales and business teams.',
      ],
    },
  ],
  skills: [
    {
      category: 'Languages & Frameworks',
      skills: ['JavaScript', 'TypeScript', 'React', 'Angular', 'Python', 'Golang', 'PHP (Laravel)', 'GraphQL'],
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'DynamoDB'],
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS (ECS, Greengrass, AppSync, DynamoDB)', 'Azure', 'Docker', 'Datadog'],
    },
    {
      category: 'Testing & Tooling',
      skills: ['Git', 'Pytest', 'Jest', 'Playwright', 'PHPUnit'],
    },
  ],
  education: [
    {
      institution: 'University of North Carolina at Greensboro',
      location: 'Greensboro, NC',
      degree: 'B.S. in Computer Science',
      graduation: 'May 2017',
      notes: ['Minor in Mathematics'],
    },
  ],
  additionalSkills: [
    'Agile methodologies and team leadership',
    'Performance monitoring and data visualization',
    'Cloud-based logging and observability',
    'DevOps best practices and workflow optimization',
  ],
};

export default resume;
