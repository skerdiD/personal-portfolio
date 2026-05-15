export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Principles", link: "#principles" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "SaaS MVPs",
    description: "Core product builds",
    body: "Build the first usable version with auth, data, dashboards, and the main workflow.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[56vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "Global collaboration",
    body: "Clear async communication and smooth collaboration across regions.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 min-h-[21rem]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Full-Stack Stack",
    description: "Frontend, backend, data",
    body: "React, Next.js, APIs, auth, databases, deployment, and monitoring.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "AI-Powered Features",
    description: "Practical product workflows",
    body: "Add summaries, proposal drafts, triage, and structured outputs where AI makes the workflow faster.",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2 min-h-[20rem]",
    imgClassName: "opacity-25",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 6,
    title: "Need a SaaS MVP, dashboard, or AI-powered feature?",
    description: "",
    body: "Let's turn it into a clean, functional web app.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "BugTriage AI",
    focus: "AI-powered issue intake",
    des: "Turns bug reports, screenshots, logs, and user complaints into clear tickets for engineering review.",
    useCase:
      "Solves messy issue intake and proves auth, database modeling, monitoring, and AI workflow design.",
    features: [
      "Structured AI triage from messy inputs",
      "Auth, database modeling, monitoring, and abuse protection",
    ],
    img: "/p1.svg",
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "AI SDK",
      "Gemini",
      "Prisma",
      "Sentry",
      "Arcjet",
    ],
    github: "https://github.com/skerdiD/BugTriage-AI",
  },
  {
    id: 2,
    title: "Pulse Chat",
    focus: "Realtime team workspace",
    des: "A realtime chat product with rooms, live messaging, reactions, typing states, and permission-aware interactions.",
    useCase:
      "Solves lightweight collaboration and proves realtime full-stack product architecture.",
    features: [
      "Realtime rooms, feedback states, and reactions",
      "Permission-aware UX with tested flows",
    ],
    img: "/p2.svg",
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase Realtime",
      "Tailwind",
      "Auth",
      "Testing",
    ],
    github: "https://github.com/skerdiD/pulse_chat",
  },
  {
    id: 3,
    title: "Portfolia",
    focus: "Portfolio dashboard",
    des: "A dashboard for holdings, watchlists, allocation, gains and losses, and performance signals.",
    useCase:
      "Solves spreadsheet sprawl and proves protected dashboard UX with relational data.",
    features: [
      "Chart-driven portfolio views and watchlists",
      "Protected dashboard patterns with relational data",
    ],
    img: "/p3.svg",
    tags: ["Next.js", "TypeScript", "Recharts", "PostgreSQL", "Clerk", "Tailwind"],
    github: "https://github.com/skerdiD/Portfolia",
  },
  {
    id: 4,
    title: "ScopeFlow AI",
    focus: "AI proposal workflow",
    des: "Turns discovery notes into proposals, deliverables, milestones, risks, and scope language.",
    useCase:
      "Solves proposal drafting and proves practical AI workflows inside a full-stack product.",
    features: [
      "AI-assisted scoping from raw notes",
      "Client-ready deliverables, risks, and milestones",
    ],
    img: "/p4.svg",
    tags: ["React", "TypeScript", "AI", "Supabase", "Tailwind", "SaaS"],
    github: "https://github.com/skerdiD/ScopeFlow-AI",
  },
  {
    id: 5,
    title: "LeadFlow",
    focus: "Lead management SaaS",
    des: "A SaaS workflow for tracking prospects, pipeline stages, follow-ups, and opportunities.",
    useCase:
      "Solves lead tracking and proves SaaS CRUD flows, auth, and persistent business data.",
    features: [
      "Pipeline tracking, lead status, and follow-ups",
      "Authenticated SaaS structure with persistent data",
    ],
    img: "/p1.svg",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Clerk", "Tailwind", "SaaS"],
    github: "https://github.com/skerdiD/lead-flow",
  },
];

export const capabilityServices = [
  {
    title: "SaaS MVPs",
    description:
      "Scoped product builds with the core flows founders need first: auth, data, dashboards, and useful business logic.",
    tags: ["Auth", "Database", "Core flows", "Product logic"],
  },
  {
    title: "Dashboards & admin panels",
    description:
      "Clean interfaces for managing users, leads, projects, analytics, tasks, and internal business workflows.",
    tags: ["Tables", "Filters", "Charts", "Roles"],
  },
  {
    title: "AI-powered features",
    description:
      "Practical AI integrations for summaries, structured outputs, proposal generation, bug triage, and workflow assistance.",
    tags: ["OpenAI/Gemini", "Structured output", "AI workflows", "Integrations"],
  },
];

export const techStackGroups = [
  {
    title: "Frontend",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
    ],
  },
  {
    title: "Backend & data",
    items: ["Node.js", "PostgreSQL", "Prisma", "Drizzle", "Supabase", "Neon"],
  },
  {
    title: "Auth & product logic",
    items: ["Clerk", "Supabase Auth", "Role-based access", "Protected dashboards"],
  },
  {
    title: "AI & quality",
    items: [
      "Vercel AI SDK",
      "Gemini",
      "Sentry",
      "Arcjet",
      "Playwright",
      "Vitest",
      "GitHub Actions",
    ],
  },
];

export const productStrengths = [
  {
    id: 1,
    title: "SaaS MVP Development",
    desc: "Core product flows, auth boundaries, data models, and feature structure for usable first versions.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "AI-powered Workflows",
    desc: "Practical AI integrations that turn messy inputs into tickets, proposals, summaries, and structured outputs.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Dashboards & Admin Tools",
    desc: "Interfaces for tracking, filtering, reviewing, and acting on operational or financial data.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Full-stack Product Polish",
    desc: "React/Next.js improvements, responsive states, errors, performance checks, and deployment readiness.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    link: "https://github.com/skerdiD",
  },
  {
    id: 2,
    name: "LinkedIn",
  },
  {
    id: 3,
    name: "X/Twitter",
    // Placeholder until Skerdi's exact public X profile is finalized.
    link: "https://x.com/skerdiD",
  },
  {
    id: 4,
    name: "Email",
    link: "mailto:hello.skerdi.dev@gmail.com",
  },
];
