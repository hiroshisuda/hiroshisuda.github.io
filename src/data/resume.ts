import type { ResumeData } from "../types/resume";

const resume: ResumeData = {
  name: "Hiroshi Suda",
  title: "Software Engineer",
  summary:
    "I'm a full-stack engineer with 10+ years of experience building everything from autonomous vehicle visualizations to cloud-native web apps. I care about clean architecture, fast feedback loops, and shipping things that actually work. I've also spent a lot of time on the process side — running Agile teams, refining backlogs, and helping engineering orgs move with less friction.",
  location: "Pittsburgh, PA",
  links: {
    github: "https://github.com/hiroshisuda",
    linkedin: "https://www.linkedin.com/in/hiroshi-suda/",
  },
  experience: [
    {
      company: "Torc Robotics",
      roles: [
        {
          title: "Senior Software Engineer",
          period: "July 2024 – Present",
          description:
            "I lead development of the web application remote support staff use to monitor and assist autonomous semi trucks in the field — a high-stakes real-time interface where reliability and clear UX are critical. I also drive team delivery end-to-end: owning planning, running retros, managing cross-functional dependencies, and keeping the team unblocked.",
          bullets: [
            "Promoted from Full Stack Engineer after leading increasingly complex cross-functional work.",
            "Built team performance dashboards in Datadog to surface bottlenecks and track delivery.",
          ],
        },
        {
          title: "Full Stack Software Engineer",
          period: "September 2021 – June 2024",
          description:
            "Built data visualizations that let engineers inspect vehicle behavior, plus cloud infrastructure for edge and containerized services. Over time I took on team leadership responsibilities alongside the technical work, eventually owning our delivery process.",
          bullets: [
            "AV data visualizations used by engineering teams and in external marketing, built with Golang, XViz, and JavaScript.",
            "Built a pipeline for creating, deploying, and managing software on hardware benches used in the commissioning process of autonomous trucks — using AWS ImageBuilder to produce images deployed to remote devices via AWS Greengrass.",
            "Cloud applications on AWS including Greengrass (edge) and ECS (containerized services).",
          ],
        },
      ],
    },
    {
      company: "Savvior Custom Software Solutions",
      roles: [
        {
          title: "Software Developer",
          period: "January 2021 – June 2021",
          description:
            "Focused on backend systems that synchronized client data across multiple third-party APIs. Stabilized complex multi-API integrations — figured out what was actually happening between systems and made it reliable.",
          bullets: [
            "Backend sync systems built with Laravel, Doctrine/DBAL, and SQL.",
            "Worked directly with clients to diagnose and resolve integration problems.",
          ],
        },
      ],
    },
    {
      company: "UNCG Online",
      roles: [
        {
          title: "Full Stack Developer",
          period: "May 2017 – December 2020",
          description:
            "Three-plus years building full-stack applications for online education — REST APIs, a React frontend backed by Laravel and MySQL, and cloud hosting on Azure. I worked across the whole stack and kept test coverage solid.",
          bullets: [
            "Built and tested frontend and backend applications using Laravel PHP, React, MySQL, and PHPUnit.",
            "Developed and maintained REST APIs and managed cloud hosting on Azure.",
            "Integrated OAuth 2.0 with PKCE for secure authentication — implemented from scratch.",
          ],
        },
        {
          title: "Web Development Intern",
          period: "July 2016 – May 2017",
          description:
            "Got my start here building WordPress themes for online courses and university marketing pages. Standardized theme development across the department and maintained legacy AngularJS apps while newer projects moved forward.",
        },
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
        "AWS (ECS, Greengrass, ImageBuilder, AppSync, DynamoDB)",
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
  publications: [
    {
      title:
        "Technical Note: Proposed Standard for Automatic Calculation of Rainfall Erosivity",
      authors: "M. R. Reyes, H. Suda, M. Brooks, R. Boyles",
      journal: "Applied Engineering in Agriculture, Vol. 26, No. 3",
      year: 2010,
      url: "https://www.researchgate.net/publication/271433109_Technical_Note_Proposed_Standard_for_Automatic_Calculation_of_Rainfall_Erosivity",
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
