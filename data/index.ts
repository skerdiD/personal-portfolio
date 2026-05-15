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
      "I am Skerdi, a computer science student and full-stack developer focused on real-world web apps with clean UI, strong product thinking, AI integrations, dashboards, auth, databases, and production-style workflows.",
    description: "About Me",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I collaborate smoothly across async teams and product workflows",
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
    description: "Built for real SaaS apps",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "AI integrations, protected dashboards, databases, testing, and deployment polish.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building AI-powered SaaS and business tooling",
    description: "Current focus",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Have an AI product or dashboard in mind?",
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
    focus: "AI issue intake and engineering handoff",
    des: "Turns unstructured bug reports, screenshots, logs, and user complaints into clear, developer-ready tickets so teams can move from vague feedback to actionable work faster.",
    useCase:
      "Useful for SaaS teams, support-heavy products, and agencies that need a cleaner path from customer reports to engineering tasks.",
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
    focus: "Realtime collaboration product",
    des: "A team chat workspace built around fast room-based communication, live messaging, reactions, typing states, and permission-aware interactions.",
    useCase:
      "Useful for internal teams, communities, and client portals that need lightweight collaboration without a bloated enterprise tool.",
    features: [
      "Realtime rooms, presence-style feedback, and reactions",
      "Permission-aware UX with tested interaction flows",
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
    focus: "Financial dashboard and data visualization",
    des: "A portfolio analytics dashboard for organizing holdings, watchlists, allocation, gains and losses, and performance signals in a clean decision-support interface.",
    useCase:
      "Useful for investors, finance learners, and small advisory workflows that need readable portfolio visibility instead of spreadsheet sprawl.",
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
    focus: "AI proposal and scope generation",
    des: "Converts rough discovery notes into organized proposals, deliverables, milestones, risks, and scope language that can be reviewed and refined for clients.",
    useCase:
      "Useful for freelancers, consultants, and agencies that want to move from sales calls to professional proposals with less manual rewriting.",
    features: [
      "AI-assisted scoping from raw notes",
      "Client-ready structure for deliverables, risks, and milestones",
    ],
    img: "/p4.svg",
    tags: ["React", "TypeScript", "AI", "Supabase", "Tailwind", "SaaS"],
    github: "https://github.com/skerdiD/ScopeFlow-AI",
  },
  {
    id: 5,
    title: "LeadFlow",
    focus: "CRM workflow for small service teams",
    des: "A lead management SaaS for tracking prospects, pipeline stages, follow-ups, and opportunities so small teams can manage sales without losing context.",
    useCase:
      "Useful for freelancers, studios, and local service businesses that need a focused pipeline from first contact to close.",
    features: [
      "Pipeline tracking, lead status, and follow-up workflows",
      "Authenticated SaaS structure with persistent business data",
    ],
    img: "/p1.svg",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Clerk", "Tailwind", "SaaS"],
    github: "https://github.com/skerdiD/lead-flow",
  },
];

export const productValues = [
  {
    quote:
      "I build AI features around real workflows: triage, proposals, automation, analysis, and structured output that helps people move faster.",
    name: "Practical AI Integrations",
    title: "Useful automation inside SaaS products",
  },
  {
    quote:
      "I care about dashboards that are easy to scan, filter, and act on, with clear states for data, loading, errors, and empty workflows.",
    name: "Dashboard UX",
    title: "Clean interfaces for business decisions",
  },
  {
    quote:
      "I treat auth, databases, APIs, and permissions as product design problems, not just implementation details.",
    name: "Full-stack Foundations",
    title: "Auth, data models, APIs, and access control",
  },
  {
    quote:
      "I build realtime interfaces with the small UX details that make them feel alive: typing states, message flow, reactions, and responsive feedback.",
    name: "Realtime Product Feel",
    title: "Collaboration and activity-driven interfaces",
  },
  {
    quote:
      "I look for the production polish that turns an early build into a reliable product: testing paths, deployment readiness, performance, and resilient UI states.",
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
    desc: "Planning product flows, data models, auth boundaries, and feature structure before polishing the interface.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "AI-powered Workflows",
    desc: "Turning messy inputs into structured actions, tickets, proposals, summaries, and business-ready outputs.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Dashboards & Business Tools",
    desc: "Designing interfaces for tracking, filtering, reviewing, and acting on operational or financial data.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Production Polish",
    desc: "Improving responsive behavior, testing paths, error states, performance, deployment readiness, and UX details.",
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
