export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Capabilities", link: "#testimonials" },
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
    description: "The Inside Scoop",
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

export const testimonials = [
  {
    quote:
      "I focus on building products that feel polished on the surface and dependable underneath, from clean interfaces to the business rules that make them useful.",
    name: "Full-stack SaaS Builds",
    title: "Product architecture, UI, auth, and data flows",
  },
  {
    quote:
      "I design dashboards for scanning, filtering, and decision-making, with attention to empty states, loading states, and the small details that make tools usable every day.",
    name: "Dashboards & Admin Tools",
    title: "Operational interfaces for real workflows",
  },
  {
    quote:
      "I integrate AI where it supports the product instead of distracting from it: smart actions, structured generation, workflow helpers, and useful automation.",
    name: "AI Integrations",
    title: "Practical AI features inside web products",
  },
  {
    quote:
      "I care about the full product path: frontend, backend, database, API design, authentication, deployment concerns, and maintainable code.",
    name: "Production-style Delivery",
    title: "End-to-end implementation mindset",
  },
  {
    quote:
      "I translate product ideas into clear interfaces and working systems, keeping the experience focused, responsive, and ready to grow.",
    name: "Business Tools",
    title: "Custom apps for teams, services, and operations",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full-stack Web Developer",
    desc: "Building modern web apps with responsive interfaces, API-driven features, and reliable product flows.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "AI SaaS Builder",
    desc: "Creating SaaS-style products with AI features, authentication patterns, dashboards, and database-backed workflows.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Dashboard & Business Tools",
    desc: "Designing admin panels and operational tools that make data, users, and actions easier to manage.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Frontend Experience Engineer",
    desc: "Crafting clean, animated, accessible interfaces with Next.js, TypeScript, and production-minded UI patterns.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
