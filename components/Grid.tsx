import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const aboutHighlights = [
  {
    title: "Who I help",
    description: "Startups, small businesses, freelancers, and small agencies",
    Icon: UsersIcon,
  },
  {
    title: "What I build",
    description:
      "Full-stack web apps, dashboards, admin tools, analytics/reporting systems, client portals, internal tools, API integrations, and AI workflows.",
    Icon: LayersIcon,
  },
  {
    title: "Outcomes",
    description:
      "Systems that save time, manage data, automate tasks, track business activity, show clear analytics, and help businesses operate better.",
    Icon: CheckChartIcon,
  },
];

const aboutCapabilities = [
  "Clean UI",
  "Authentication",
  "Databases",
  "Dashboards",
  "Client portals",
  "API integrations",
  "AI workflows",
];

const Grid = () => {
  return (
    <section id="about" className="scroll-mt-24 pb-14 pt-4 md:scroll-mt-28 md:pb-20 md:pt-6 lg:pt-16">
      <div className="relative mx-auto mb-12 w-full max-w-[calc(100vw-2.5rem)] overflow-hidden rounded-3xl border border-white/[0.1] bg-black-200 px-5 py-7 shadow-input backdrop-blur-lg sm:max-w-full md:mb-16 md:px-8 md:py-10 lg:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(203,172,249,0.18),transparent_32%),radial-gradient(circle_at_84%_20%,rgba(96,165,250,0.14),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_42%)]" />
        <div className="pointer-events-none absolute inset-0 bg-grid-small-white/[0.035]" />

        <div className="relative z-10 grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)] lg:items-center">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-100">
              About Me
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-white [text-wrap:balance] md:text-5xl">
              Full-stack web products built for real business workflows.
            </h1>
            <div className="mt-6 min-w-0 space-y-4 text-sm leading-relaxed text-white-200 md:text-lg">
              <p>
                I&apos;m a full-stack developer focused on building practical
                web products for startups, creators, and small businesses.
              </p>
              <p>
                I help turn ideas into usable products with clean UI,
                authentication, databases, dashboards, client portals, API
                integrations, and AI-powered workflows.
              </p>
              <p>
                My focus is building products that do more than look good,
                products where users can log in, manage data, track activity,
                automate tasks, and work smoothly.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {aboutCapabilities.map((capability) => (
                <span
                  key={capability}
                  className="rounded-full border border-white/[0.12] bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-white-100"
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>

          <div className="grid min-w-0 gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {aboutHighlights.map((highlight, index) => (
              <article
                key={highlight.title}
                className="group min-w-0 rounded-2xl border border-white/[0.1] bg-[#10132E]/85 p-4 shadow-[0_12px_36px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-0.5 hover:border-purple/30 hover:bg-[#111633]/90 md:p-5"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl border border-purple/25 bg-purple/10 text-sm font-bold text-purple">
                  0{index + 1}
                </div>
                <h2 className="flex items-center gap-2.5 text-base font-bold text-white md:text-lg">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/[0.1] bg-white/[0.05] text-blue-100 transition duration-300 group-hover:border-purple/25 group-hover:text-purple">
                    <highlight.Icon className="h-3.5 w-3.5" />
                  </span>
                  {highlight.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-white-200">
                  {highlight.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <BentoGrid className="w-full">
        {gridItems.map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            body={item.body}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M8.75 11.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Zm6.5 8H2.25v-1.5a5 5 0 0 1 5-5h3a5 5 0 0 1 5 5v1.5Zm1-8a2.75 2.75 0 1 0 0-5.5m5.5 13.5v-1.25a4.25 4.25 0 0 0-4.25-4.25h-1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function LayersIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="m12 3.75 8.25 4.5L12 12.75l-8.25-4.5L12 3.75Zm-6.75 8.5L12 16l6.75-3.75M5.25 16.25 12 20l6.75-3.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function CheckChartIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M4.75 18.75V5.25m0 13.5h14.5M8 15.25l3.25-3.25 2.25 2.25 4.5-5.5m-6.75 3.25 2.25 2.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}
