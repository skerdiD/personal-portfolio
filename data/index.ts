export const navItems = [
  { name: "About", link: "#about" },
  { name: "Work", link: "#projects" },
  { name: "Services", link: "#services" },
  { name: "Principles", link: "#principles" },
  { name: "Contact", link: "#contact" },
];

type GridItem = {
  id: number;
  title: string;
  description?: string;
  body: string;
  className: string;
  imgClassName?: string;
  titleClassName: string;
  img?: string;
  spareImg?: string;
};

export const gridItems: GridItem[] = [
  {
    id: 1,
    title: "Useful product flow",
    description: "From idea to working app",
    body: "I connect clean screens, auth, data, and the main actions users need into one practical product.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[56vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
  },
  {
    id: 2,
    description: "Remote Ready",
    title: "Open to Different Time Zones",
    body: "I work well with async updates, clear communication, and flexible overlap for teams in different regions.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 min-h-[21rem]",
    titleClassName: "justify-start",
  },
  {
    id: 3,
    title: "Tools I Use",
    description: "Modern tools",
    body: "Modern tools for building clean, reliable web products.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 min-h-[21rem]",
    titleClassName: "justify-center",
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
    body: "I can help turn it into a clean, useful web app with strong UI, real data, and reliable product flow.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
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
    img: "/projects/BugTriage.png",
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
    liveUrl: "https://bug-triage-ai.vercel.app/",
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
    img: "/projects/pulsechat.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase Realtime",
      "Tailwind",
      "Auth",
      "Testing",
    ],
    github: "https://github.com/skerdiD/pulse_chat",
    liveUrl: "https://pulse-chat-seven.vercel.app/",
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
    img: "/projects/leadflow.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Clerk",
      "PostgreSQL",
      "Drizzle",
      "Tailwind CSS",
    ],
    github: "https://github.com/skerdiD/lead-flow",
    liveUrl: "https://lead-flow-fstg89v0n-skerdids-projects.vercel.app/",
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
    img: "/projects/portfolia.png",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle",
      "Recharts",
      "Clerk",
      "Tailwind CSS",
    ],
    github: "https://github.com/skerdiD/Portfolia",
    liveUrl: "https://portfolia-wheat-gamma.vercel.app/",
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
    img: "/projects/Scopeflow - Copy.png",
    tags: [
      "React/Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "AI SDK",
      "Tailwind CSS",
    ],
    github: "https://github.com/skerdiD/ScopeFlow-AI",
    liveUrl: "https://scope-flow-ai.vercel.app/",
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
      "React Hook Form",
      "Zod",
      "Recharts",
      "TanStack Table",
      "Sonner",
    ],
  },
  {
    title: "Backend & Data",
    items: [
      "Node.js",
      "Django",
      "REST APIs",
      "PostgreSQL",
      "SQL",
      "Prisma",
      "Drizzle",
      "Supabase",
      "Neon",
      "Postman",
    ],
  },
  {
    title: "AI & Integrations",
    items: [
      "Vercel AI SDK",
      "Gemini",
      "OpenAI",
      "Structured output",
      "Prompt safety",
      "GitHub Issues API",
      "AI workflows",
    ],
  },
  {
    title: "Quality & Deployment",
    items: [
      "Sentry",
      "Arcjet",
      "Playwright",
      "Vitest",
      "GitHub Actions",
      "CI/CD",
      "Vercel",
      "Render",
      "Cloud deployment",
    ],
  },
];

export const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    link: "https://github.com/skerdiD",
  },
  {
    id: 3,
    name: "Email",
    link: "mailto:skerdidev.services@gmail.com",
  },
];
