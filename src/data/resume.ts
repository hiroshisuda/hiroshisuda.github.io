import type { ResumeData } from '../types/resume';

const resume: ResumeData = {
  name: 'Hiroshi Suda',
  title: 'Senior Software Engineer',
  summary:
    "I'm a full-stack engineer with 8+ years of experience building everything from autonomous vehicle visualizations to cloud-native web apps. I care about clean architecture, fast feedback loops, and shipping things that actually work. I've also spent a lot of time on the process side — running Agile teams, refining backlogs, and helping engineering orgs move with less friction.",
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
        'Building low-latency monitoring and assistance tools for a fleet of autonomous vehicles.',
        'Running Agile ceremonies as Scrum Master — standups, backlog refinement, sprint planning — keeping the team focused and unblocked.',
        'Working closely with product to track delivery progress and adjust plans as priorities shift.',
        'Shipping features across the stack with React, Python, GraphQL, AppSync, and DynamoDB.',
        'Built out team performance dashboards in Datadog to give us visibility into productivity and bottlenecks.',
      ],
    },
    {
      company: 'Torc Robotics',
      title: 'Full Stack Software Engineer',
      period: 'September 2021 – June 2024',
      bullets: [
        'Built rich visualizations for autonomous vehicle data using Golang, XViz, and JavaScript.',
        'Developed and deployed cloud applications on AWS, including Greengrass (edge) and ECS (containerized services).',
        'Served as Scrum Master across the full sprint lifecycle — standups, grooming, planning, and demos.',
        'Helped the team stay aligned with stakeholders by keeping priorities clear and blockers visible.',
      ],
    },
    {
      company: 'Savvior Custom Software Solutions',
      title: 'Software Developer',
      period: 'January 2021 – June 2021',
      bullets: [
        'Built and maintained backend systems to synchronize client data across multiple third-party APIs, using Laravel, Doctrine/DBAL, and SQL.',
        'Worked directly with clients and senior engineers to untangle technical problems and keep projects on track.',
      ],
    },
    {
      company: 'UNCG Online',
      title: 'Full Stack Developer',
      period: 'May 2017 – December 2020',
      bullets: [
        'Built and maintained full-stack applications for online education using Laravel, React, MySQL, and PHPUnit.',
        'Wrote automated test suites that caught regressions early and gave the team confidence to ship faster.',
        'Designed and maintained REST APIs, with hosting managed on Azure.',
        'Implemented OAuth 2.0 with PKCE for secure authentication across multiple applications.',
        'Led a distributed team across remote and on-site work over three-plus years.',
      ],
    },
    {
      company: 'UNCG Online',
      title: 'Web Development Intern',
      period: 'July 2016 – May 2017',
      bullets: [
        'Standardized WordPress theme development across the department, cutting a lot of duplicated effort.',
        'Built themes for online courses and university marketing pages.',
        'Kept legacy AngularJS applications running while new projects moved forward.',
      ],
    },
    {
      company: 'Kernersville Chrysler Dodge Jeep Ram',
      title: 'Assistant Webmaster',
      period: 'May 2014 – July 2016',
      bullets: [
        'Built internal tools to automate sales and marketing tasks, cutting manual work by up to 80%.',
        'Led a full site redesign on Drupal 7, including custom themes and modules.',
        'Handled day-to-day technical support for sales and business staff.',
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
    'Agile / Scrum team leadership',
    'Performance monitoring and data visualization',
    'Cloud observability and logging',
    'DevOps and developer workflow improvement',
  ],
};

export default resume;
