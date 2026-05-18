export const navItems = [
  { name: "About", link: "#about" },
  { name: "Work", link: "#projects" },
  { name: "Services", link: "#services" },
  { name: "Principles", link: "#principles" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Useful product flow",
    description: "From idea to working app",
    body: "I connect clean screens, auth, data, and the main actions users need into one practical product.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[56vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible With Remote Collaboration",
    description: "Clear async work",
    body: "Clear async updates, organized communication, and smooth collaboration across time zones.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 min-h-[21rem]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tools I Use",
    description: "Modern product stack",
    body: "I use modern tools to build fast, clean, and reliable web products.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 min-h-[21rem]",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Practical AI workflows",
    description: "Useful automation",
    body: "I add AI where it helps with real work: summaries, drafts, triage, structured outputs, and repeated tasks.",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2 min-h-[20rem]",
    imgClassName: "opacity-25",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 6,
    title: "Have a product idea to build?",
    description: "",
    body: "I can help turn it into a clean, useful web app with strong UI, real data, and reliable product flow.",
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
    focus: "AI Issue Intake",
    problem:
      "Bug reports often arrive messy, unclear, and hard for engineering teams to review.",
    built:
      "An AI issue intake flow that turns screenshots, logs, and user complaints into structured tickets.",
    technicalFocus:
      "Structured AI output, protected flows, abuse protection, monitoring, and database-backed issue handling.",
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
    title: "PulseChat",
    focus: "Realtime Team Workspace",
    problem:
      "Teams need a simple realtime workspace for rooms, messages, and fast collaboration.",
    built:
      "A realtime chat product with rooms, live messages, reactions, typing states, and permission-aware interactions.",
    technicalFocus:
      "Realtime updates, responsive UI states, membership logic, and tested collaboration flows.",
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
    title: "LeadFlow",
    focus: "Client Lead Manager",
    problem:
      "Freelancers and small teams need a simple way to track leads, statuses, notes, and follow-ups.",
    built:
      "A protected lead management workspace with dashboard stats, CRUD flows, filtering, and lead status tracking.",
    technicalFocus:
      "Auth boundaries, PostgreSQL persistence, clean data modeling, and business-focused dashboard logic.",
    img: "/p1.svg",
    tags: ["Next.js", "TypeScript", "Clerk", "PostgreSQL", "Drizzle", "Tailwind CSS"],
    github: "https://github.com/skerdiD/lead-flow",
  },
  {
    id: 4,
    title: "Portfolia",
    focus: "Investment Dashboard",
    problem:
      "Investors need a clean way to understand holdings, performance, allocation, and watchlist ideas.",
    built:
      "A personal investment dashboard with portfolio tracking, analytics, charts, filters, and summaries.",
    technicalFocus:
      "Readable financial UI, derived metrics, chart performance, and dashboard data organization.",
    img: "/p3.svg",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Recharts", "Clerk", "Tailwind CSS"],
    github: "https://github.com/skerdiD/Portfolia",
  },
  {
    id: 5,
    title: "ScopeFlow AI",
    focus: "Proposal Workspace",
    problem:
      "Discovery notes can be messy and hard to turn into a clear project proposal.",
    built:
      "An AI proposal workspace that creates summaries, scope, deliverables, milestones, and risks from raw notes.",
    technicalFocus:
      "AI-assisted structured outputs, proposal workflow design, auth, data persistence, and clean product UX.",
    img: "/p4.svg",
    tags: ["React/Next.js", "TypeScript", "Supabase", "PostgreSQL", "AI SDK", "Tailwind CSS"],
    github: "https://github.com/skerdiD/ScopeFlow-AI",
  },
];

export const capabilityServices = [
  {
    title: "Product MVPs",
    description:
      "I turn an idea into a first working version with sign-in, core flows, data, dashboards, and the main features users need first.",
    tags: ["Sign-in", "Core flows", "Data", "Dashboards"],
  },
  {
    title: "Dashboards & Admin Tools",
    description:
      "Clean interfaces for managing users, leads, projects, analytics, tasks, and internal business workflows.",
    tags: ["Tables", "Filters", "Charts", "Roles"],
  },
  {
    title: "AI Workflows",
    description:
      "I add practical AI features that help with summaries, proposal drafts, bug triage, structured outputs, and repetitive tasks.",
    tags: ["Summaries", "Drafts", "Triage", "Structured output"],
  },
  {
    title: "Full-Stack Product Polish",
    description:
      "I improve loading states, error handling, responsive design, security basics, performance, tests, and deployment readiness.",
    tags: ["Loading states", "Errors", "Performance", "Deployment"],
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
    title: "Backend & Data",
    items: ["Node.js", "APIs", "PostgreSQL", "Prisma", "Drizzle", "Supabase", "Neon"],
  },
  {
    title: "Auth & Product Logic",
    items: ["Clerk", "Supabase Auth", "Protected routes", "Roles", "Permissions", "User flows"],
  },
  {
    title: "Quality & Deployment",
    items: [
      "Sentry",
      "Arcjet",
      "Playwright",
      "Vitest",
      "GitHub Actions",
      "Vercel",
    ],
  },
];

export const workPrinciples = [
  {
    id: 1,
    title: "Start With the Problem",
    desc: "Before adding features, I focus on what the user needs and what the product should actually solve.",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Build the Core Flow First",
    desc: "I prioritize the main user journey first, then improve the details around it.",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Keep the UI Clear",
    desc: "Good design should make the product easier to understand, not just make it look decorated.",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Make It Reliable",
    desc: "I care about loading states, errors, auth, data safety, performance, and deployment readiness.",
    thumbnail: "/exp4.svg",
  },
  {
    id: 5,
    title: "Ship, Learn, Improve",
    desc: "I believe a product gets stronger through real feedback, not endless guessing.",
    thumbnail: "/exp1.svg",
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
