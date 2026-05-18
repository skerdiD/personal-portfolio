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
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
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
    des: "Turns messy bug reports, screenshots, logs, and user complaints into clear tickets for engineering review.",
    useCase:
      "Built around auth, database modeling, monitoring, abuse protection, and structured AI output.",
    features: [
      "Structured tickets from messy inputs",
      "Protected product flow with auth and data",
      "Monitoring and rate-limit awareness",
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
    title: "PulseChat",
    focus: "Realtime Team Workspace",
    des: "A team chat experience with rooms, live messages, reactions, typing states, and permission-aware interactions.",
    useCase:
      "Shows realtime product thinking, responsive UI states, and tested collaboration flows.",
    features: [
      "Realtime rooms and live updates",
      "Reactions, typing states, and feedback UI",
      "Permission-aware product flow",
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
    title: "LeadFlow",
    focus: "Client Lead Manager",
    des: "A simple CRM-style workspace for tracking prospects, lead status, notes, and follow-ups.",
    useCase:
      "Built to show clean dashboard structure, CRUD logic, protected routes, and business-focused workflows.",
    features: [
      "Lead pipeline and status tracking",
      "Protected dashboard experience",
      "Clean data model and business logic",
    ],
    img: "/p1.svg",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Clerk", "Tailwind", "SaaS"],
    github: "https://github.com/skerdiD/lead-flow",
  },
  {
    id: 4,
    title: "Portfolia",
    focus: "Investment Dashboard",
    des: "A personal finance dashboard for tracking holdings, performance, allocation, and watchlist ideas in one place.",
    useCase:
      "Built with a focus on clean analytics, readable charts, and premium dashboard UI.",
    features: [
      "Portfolio tracking and analytics",
      "Charts, filters, and financial summaries",
      "Polished fintech-style interface",
    ],
    img: "/p3.svg",
    tags: ["Next.js", "TypeScript", "Recharts", "PostgreSQL", "Clerk", "Tailwind"],
    github: "https://github.com/skerdiD/Portfolia",
  },
  {
    id: 5,
    title: "ScopeFlow AI",
    focus: "Proposal Workspace",
    des: "An AI-powered workspace that turns discovery notes into project summaries, scope, deliverables, milestones, and risks.",
    useCase:
      "Built to show how AI can support real client work, not just generate random text.",
    features: [
      "AI proposal generation",
      "Structured project outputs",
      "Clear workflow from notes to scope",
    ],
    img: "/p4.svg",
    tags: ["React", "TypeScript", "AI", "Supabase", "Tailwind", "SaaS"],
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
