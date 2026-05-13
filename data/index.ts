export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Principles", link: "#principles" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I build full-stack products with clean UI and real business logic",
    description: "",
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
    title: "My tech stack",
    description: "Tools I use to ship",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "AI integrations, dashboards, auth, databases, and production-ready flows.",
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
    des: "AI-powered bug triage SaaS that turns messy reports, screenshots, logs, and user complaints into developer-ready tickets.",
    useCase: "For product and engineering teams that need faster issue intake.",
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
    des: "Real-time team chat app with rooms, messages, reactions, typing indicators, permissions, and polished realtime UX.",
    useCase: "For teams that need structured, responsive collaboration spaces.",
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
    des: "Investment analytics dashboard for tracking holdings, watchlists, charts, allocation, gains/losses, and portfolio performance.",
    useCase: "For investors who need clear portfolio visibility and decision support.",
    img: "/p3.svg",
    tags: ["Next.js", "TypeScript", "Recharts", "PostgreSQL", "Clerk", "Tailwind"],
    github: "https://github.com/skerdiD/Portfolia",
  },
  {
    id: 4,
    title: "ScopeFlow AI",
    des: "AI proposal workspace that converts raw discovery notes into proposals, deliverables, milestones, risks, and client-ready scope.",
    useCase: "For freelancers and agencies turning discovery calls into sellable scope.",
    img: "/p4.svg",
    tags: ["React", "TypeScript", "AI", "Supabase", "Tailwind", "SaaS"],
    github: "https://github.com/skerdiD/ScopeFlow-AI",
  },
  {
    id: 5,
    title: "LeadFlow",
    des: "CRM and lead management SaaS for freelancers and small agencies to track leads, pipeline status, follow-ups, and opportunities.",
    useCase: "For service businesses that need a simple pipeline from lead to close.",
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
      "I look for the production polish that separates a demo from a product: testing paths, deployment readiness, performance, and resilient UI states.",
    name: "Shipping Quality",
    title: "Testing, deployment, performance, and polish",
  },
];

export const stackHighlights = [
  "Next.js",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
  "Clerk",
  "Prisma",
  "AI SDK",
  "Gemini",
  "Recharts",
  "Tailwind",
  "Sentry",
  "Testing",
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
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Dashboards & Business Tools",
    desc: "Designing interfaces for tracking, filtering, reviewing, and acting on operational or financial data.",
    className: "md:col-span-2", // change to md:col-span-2
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
    img: "/git.svg",
    link: "https://github.com/skerdiD",
  },
];
