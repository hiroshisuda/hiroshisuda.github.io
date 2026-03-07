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
      title: "Senior Software Engineer",
      period: "July 2024 – Present",
      description:
        "I build the web application that remote operators use to monitor and assist autonomous semi trucks in the field — a real-time interface where reliability and UX actually matter. I also run the team as Scrum Master, so I spend as much time thinking about how we work as what we build.",
      bullets: [
        "Promoted from Full Stack Engineer after leading increasingly complex cross-functional work.",
        "Built team performance dashboards in Datadog to surface bottlenecks and track delivery health.",
      ],
    },
    {
      company: "Torc Robotics",
      title: "Full Stack Software Engineer",
      period: "September 2021 – June 2024",
      description:
        "This is where I got deep into the AV stack — building data visualizations that let engineers inspect vehicle behavior, plus cloud infrastructure for edge and containerized services. I picked up Scrum Master responsibilities here too, which grew into a bigger part of my role over time.",
      bullets: [
        "AV data visualizations used by engineering teams and in external marketing, built with Golang, XViz, and JavaScript.",
        "Cloud applications on AWS including Greengrass (edge) and ECS (containerized services).",
      ],
    },
    {
      company: "Savvior Custom Software Solutions",
      title: "Software Developer",
      period: "January 2021 – June 2021",
      description:
        "Short contract role focused on backend systems that synchronized client data across multiple third-party APIs. A lot of the work was untangling messy integrations — figuring out what was actually happening between systems and making it reliable.",
      bullets: [
        "Backend sync systems built with Laravel, Doctrine/DBAL, and SQL.",
        "Worked directly with clients to diagnose and resolve integration problems.",
      ],
    },
    {
      company: "UNCG Online",
      title: "Full Stack Developer",
      period: "May 2017 – December 2020",
      description:
        "I spent three-plus years as the lead developer on a suite of full-stack apps for online education, building most of it from the ground up — REST APIs, a React frontend, auth, and test coverage. Eventually took on team leadership as we grew.",
      bullets: [
        "Implemented OAuth 2.0 with PKCE from scratch — greenfield auth integration.",
        "Wrote automated test suites that gave the team confidence to ship faster.",
        "Led a distributed team across remote and on-site work.",
      ],
    },
    {
      company: "UNCG Online",
      title: "Web Development Intern",
      period: "July 2016 – May 2017",
      description:
        "Got my start here building WordPress themes for online courses and university marketing pages. Standardized theme development across the department and kept some legacy AngularJS apps alive while newer projects moved forward.",
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
