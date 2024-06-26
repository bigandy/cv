export enum TimelineEvent {
  JOB = "JOB",
  QUALIFICATION = "QUALIFICATION",
  PROJECT = "PROJECT",
  CONTRACTING = "PROJECT",
}

const data: {
  title: string;
  type: TimelineEvent;
  timelineStart: Date;
  timelineEnd: Date;
  skills: string[];
  place: string;
  description: string;
  notRelevant?: boolean;
}[] = [
  // {
  //   title: "Technical Support Analyst",
  //   type: TimelineEvent.JOB,
  //   timelineStart: new Date(2012, 8),
  //   timelineEnd: new Date(2015, 8),
  //   skills: ["HTML", "CSS", "Javascript"],
  //   place: "Oxford University Press",
  //   description:
  //     "Provided 2nd line support for customers using OUP platforms and software.",
  //   notRelevant: true,
  // },
  // {
  //   title: "Platform Support Team Lead",
  //   type: TimelineEvent.JOB,
  //   timelineStart: new Date(2015, 9),
  //   timelineEnd: new Date(2017, 9),
  //   skills: ["HTML", "CSS", "Javascript"],
  //   place: "Oxford University Press",
  //   description:
  //     "Managed a 1st and 2nd line team providing support for OUP platform and software.",
  //   notRelevant: true,
  // },
  // {
  //   title: "Software Engineer",
  //   type: TimelineEvent.JOB,
  //   timelineStart: new Date(2017, 10),
  //   timelineEnd: new Date(2017, 12),
  //   skills: [
  //     "Java",
  //     "HTML",
  //     "CSS",
  //     "Javascript",
  //     "Typescript",
  //     "Unit Tests",
  //     "Docker",
  //     "Kubernetes",
  //     "git",
  //   ],
  //   place: "Diffblue",
  //   description:
  //     "During the initial phase of my engineering career, I played a crucial role in developing and managing their internal product dashboard systems. I not only shaped the AI-driven software through comprehensive analysis but also actively contributed to the sales and support of the product. My efforts were instrumental in helping the team land their first major client. This experience expanded my technical expertise while honing my customer engagement skills, fueling my passion for delivering exceptional solutions.",
  // },
  // {
  //   title: "Development Team Lead",
  //   type: TimelineEvent.JOB,
  //   timelineStart: new Date(2017, 12),
  //   timelineEnd: new Date(2020, 5),
  //   skills: [
  //     "Java",
  //     "React",
  //     "Project Planning",
  //     "Agile",
  //     "GCP",
  //     "HTML",
  //     "CSS",
  //     "Unit Tests",
  //     "Kubernetes",
  //     "Docker",
  //   ],
  //   place: "Diffblue",
  //   description:
  //     "Building upon my previous role, I swiftly progressed to lead a dedicated team responsible for developing a pipeline that automated the analysis of thousands of open repositories. This initiative provided our core technology teams with invaluable insights into the credibility and performance of the software. Moreover, we extended the project to autonomously contribute the tests it generated to the corresponding open-source repositories.",
  // },
  {
    title: "Software Engineer",
    type: TimelineEvent.JOB,
    timelineStart: new Date(2020, 5),
    timelineEnd: new Date(2022, 8),
    skills: [
      "Typescript",
      "React",
      "GCP",
      "GraphQL",
      "Apollo",
      "NextJS",
      "Auth",
      "HTML",
      "Docker",
      "Postgres",
      "e2e testing",
      "Prisma",
      "Next.js",
      "SEO",
      "Wordpress",
      "Electron",
    ],
    place: "Venture Harbour",
    description:
      "I joined an ambitious team of engineers with a shared goal of planning, building, and maintaining multiple ventures at a fast-pace. Given the team's small size, we engaged in all aspects of the technical stack, effectively contributing to a diverse range of products. Our projects spanned from creating Electron and Slack applications to developing referral and SaaS-based platforms.",
  },
  // {
  //   title: "Lead Engineer",
  //   type: TimelineEvent.JOB,
  //   timelineStart: new Date(2022, 8),
  //   timelineEnd: new Date(2023, new Date().getMonth()),
  //   skills: [
  //     "Typescript",
  //     "React",
  //     "GCP",
  //     "GraphQL",
  //     "Apollo",
  //     "NextJS",
  //     "Auth",
  //     "HTML",
  //     "Docker",
  //     "Postgres",
  //     "SQL",
  //     "e2e testing",
  //     "Prisma",
  //     "Next.js",
  //     "SEO",
  //     "Astro",
  //     "Wordpress",
  //   ],
  //   place: "Venture Harbour",
  //   description:
  //     "Demonstrating my strong leadership capabilities and drive, I earned a promotion to the role of Lead Engineer within the organization. This promotion coincided with our most ambitious venture, Truenorth.io, a global SaaS marketing platform. As Lead Engineer, I successfully managed a team of engineers, overseeing the planning and execution of new feature development and bug fixes in alignment with the product team's requirements. While leading the team, I also actively contributed to the codebase, remaining engaged in day-to-day development tasks.",
  // },
  {
    title: "University of Manchester",
    type: TimelineEvent.QUALIFICATION,
    timelineStart: new Date(1999, 8),
    timelineEnd: new Date(2003, 6),
    skills: [],
    place: "Manchester",
    description: "MChem (Hons) Chemistry with Industrial Experience - 2:1",
  },
  {
    title: "Edgbarrow School",
    type: TimelineEvent.QUALIFICATION,
    timelineStart: new Date(1992, 8),
    timelineEnd: new Date(1999, 6),
    skills: [],
    place: "Bristol",
    description: "Grades A - C",
  },
];

export default data;
