import type { ResumeData } from "../types/resume";

const resume: ResumeData = {
  name: "Hiroshi Suda",
  title: "Senior Software Engineer",
  summary:
    "I'm a full-stack engineer with 8+ years of experience building everything from autonomous vehicle visualizations to cloud-native web apps. I care about clean architecture, fast feedback loops, and shipping things that actually work. I've also spent a lot of time on the process side — running Agile teams, refining backlogs, and helping engineering orgs move with less friction.",
  location: "Pittsburgh, PA",
  links: {
    github: "https://github.com/hiroshisuda",
    linkedin: "https://www.linkedin.com/in/hiroshi-suda/",
  },
  experience: [
    {
      company: "Torc Robotics",
      title: "Senior Software Engineer",
      period: "July 2024 – Present",
      bullets: [
        "Building remote assistance applications for autonomous semi trucks, supporting 250+ active users across operations.",
        "Promoted from Full Stack Engineer after leading increasingly complex cross-functional work.",
        "Scrum Master for a team of up to 7 engineers — running standups, backlog refinement, and sprint planning.",
        "Shipping features across the stack with React, Python, GraphQL, AppSync, and DynamoDB.",
        "Built team performance dashboards in Datadog to surface bottlenecks and track delivery health.",
      ],
    },
    {
      company: "Torc Robotics",
      title: "Full Stack Software Engineer",
      period: "September 2021 – June 2024",
      bullets: [
        "Built AV data visualizations used both internally by engineering teams and in external marketing materials, using Golang, XViz, and JavaScript.",
        "Developed and deployed cloud applications on AWS, including Greengrass (edge) and ECS (containerized services).",
        "Served as Scrum Master across the full sprint lifecycle — standups, grooming, planning, and demos.",
        "Helped the team stay aligned with stakeholders by keeping priorities clear and blockers visible.",
      ],
    },
    {
      company: "Savvior Custom Software Solutions",
      title: "Software Developer",
      period: "January 2021 – June 2021",
      bullets: [
        "Built and maintained backend systems to synchronize client data across multiple third-party APIs, using Laravel, Doctrine/DBAL, and SQL.",
        "Worked directly with clients and senior engineers to untangle technical problems and keep projects on track.",
      ],
    },
    {
      company: "UNCG Online",
      title: "Full Stack Developer",
      period: "May 2017 – December 2020",
      bullets: [
        "Greenfield development of full-stack applications for online education using Laravel, React, MySQL, and PHPUnit.",
        "Wrote automated test suites that caught regressions early and gave the team confidence to ship faster.",
        "Designed and maintained REST APIs, with hosting managed on Azure.",
        "Implemented OAuth 2.0 with PKCE for secure authentication — greenfield integration from scratch.",
        "Led a distributed team across remote and on-site work over three-plus years.",
      ],
    },
    {
      company: "UNCG Online",
      title: "Web Development Intern",
      period: "July 2016 – May 2017",
      bullets: [
        "Standardized WordPress theme development across the department, cutting a lot of duplicated effort.",
        "Built themes for online courses and university marketing pages.",
        "Kept legacy AngularJS applications running while new projects moved forward.",
      ],
    },
  ],
  skills: [
    {
      category: "Languages & Frameworks",
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Angular",
        "Python",
        "Golang",
        "PHP (Laravel)",
        "GraphQL",
      ],
    },
    {
      category: "Databases",
      skills: ["MySQL", "DynamoDB"],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        "AWS (ECS, Greengrass, AppSync, DynamoDB)",
        "Azure",
        "Docker",
        "Datadog",
      ],
    },
    {
      category: "Testing & Tooling",
      skills: ["Git", "Pytest", "Jest", "Playwright", "PHPUnit"],
    },
  ],
  education: [
    {
      institution: "University of North Carolina at Greensboro",
      location: "Greensboro, NC",
      degree: "B.S. in Computer Science",
      graduation: "May 2017",
      notes: ["Minor in Mathematics"],
    },
  ],
  additionalSkills: [
    "Agile / Scrum team leadership",
    "Performance monitoring and data visualization",
    "Cloud observability and logging",
    "DevOps and developer workflow improvement",
  ],
};

export default resume;
