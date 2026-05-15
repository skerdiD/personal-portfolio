export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Principles", link: "#principles" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I build full-stack SaaS apps, dashboards, and AI features with clean UI, reliable backend logic, auth, databases, and deployment-ready workflows.",
    description: "About Me",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Clear planning, practical communication, and steady delivery",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Full-stack & AI stack",
    description: "Built for SaaS workflows",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "AI features, protected dashboards, database design, testing, and deployment polish.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Building SaaS tools that turn workflows into usable products",
    description: "Current focus",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Need a dashboard, SaaS app, or AI feature?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
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
    focus: "AI issue intake",
    des: "Turns bug reports, screenshots, logs, and user complaints into clear, developer-ready tickets.",
    useCase:
      "For SaaS teams that need a cleaner support-to-engineering handoff.",
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
    des: "A team chat app with rooms, live messaging, reactions, typing states, and permission-aware interactions.",
    useCase:
      "For teams, communities, and client portals that need focused collaboration.",
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
    des: "A finance dashboard for holdings, watchlists, allocation, gains and losses, and performance signals.",
    useCase:
      "For users who need readable portfolio visibility without spreadsheet sprawl.",
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
    des: "Turns discovery notes into organized proposals, deliverables, milestones, risks, and scope language.",
    useCase:
      "For freelancers, consultants, and agencies moving from sales calls to client-ready scope.",
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
    des: "A CRM-style workflow for tracking prospects, pipeline stages, follow-ups, and opportunities.",
    useCase:
      "For freelancers, studios, and service businesses that need a simple path from lead to close.",
    features: [
      "Pipeline tracking, lead status, and follow-ups",
      "Authenticated SaaS structure with persistent data",
    ],
    img: "/p1.svg",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Clerk", "Tailwind", "SaaS"],
    github: "https://github.com/skerdiD/lead-flow",
  },
];

export const productValues = [
  {
    quote:
      "I build AI features around useful workflows: triage, proposals, automation, analysis, and structured output.",
    name: "Practical AI Integrations",
    title: "Automation that supports real product tasks",
  },
  {
    quote:
      "I design dashboards that are easy to scan, filter, and act on, with clear loading, error, and empty states.",
    name: "Dashboard UX",
    title: "Clear interfaces for business decisions",
  },
  {
    quote:
      "I treat auth, databases, APIs, and permissions as core parts of the product experience.",
    name: "Full-stack Foundations",
    title: "Auth, data models, APIs, and access control",
  },
  {
    quote:
      "I add realtime details where they help: message flow, reactions, typing states, and responsive feedback.",
    name: "Realtime Product Feel",
    title: "Collaboration and activity-driven interfaces",
  },
  {
    quote:
      "I focus on the polish that makes a product easier to trust: testing paths, deployment readiness, performance, and resilient UI states.",
    name: "Shipping Quality",
    title: "Testing, deployment, performance, and polish",
  },
];

export const stackHighlights = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Framer Motion",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Drizzle",
  "Supabase",
  "Neon",
  "Clerk",
  "Supabase Auth",
  "Role-based access",
  "Protected dashboards",
  "Vercel AI SDK",
  "Gemini",
  "OpenAI-style integrations",
  "AI workflows",
  "Business prompting",
  "Vercel",
  "Sentry",
  "Arcjet",
  "Playwright",
  "Vitest",
  "GitHub Actions",
  "Performance",
];

export const productStrengths = [
  {
    id: 1,
    title: "SaaS Product Architecture",
    desc: "Product flows, data models, auth boundaries, and feature structure that are clear before the UI gets polished.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "AI-powered Workflows",
    desc: "AI flows that turn messy inputs into tickets, proposals, summaries, and structured outputs.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Dashboards & Business Tools",
    desc: "Interfaces for tracking, filtering, reviewing, and acting on operational or financial data.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Production Polish",
    desc: "Responsive behavior, error states, performance checks, deployment readiness, and UX details.",
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
