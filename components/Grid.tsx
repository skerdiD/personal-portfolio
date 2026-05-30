import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const aboutHighlights = [
  {
    title: "Who I help",
    description: "Startups, creators, and small businesses",
  },
  {
    title: "What I build",
    description: "SaaS apps, dashboards, portals, APIs, and AI workflows",
  },
  {
    title: "Outcomes",
    description: "Auth, data management, tracking, automation, and real workflows",
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
      <div className="relative mb-12 overflow-hidden rounded-3xl border border-white/[0.1] bg-black-200 px-5 py-7 shadow-input backdrop-blur-lg md:mb-16 md:px-8 md:py-10 lg:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(203,172,249,0.18),transparent_32%),radial-gradient(circle_at_84%_20%,rgba(96,165,250,0.14),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_42%)]" />
        <div className="pointer-events-none absolute inset-0 bg-grid-small-white/[0.035]" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-100">
              About Me
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">
              Full-stack products built for real client workflows.
            </h1>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-white-200 md:text-lg">
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
                automate tasks, and use real workflows smoothly.
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

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {aboutHighlights.map((highlight, index) => (
              <article
                key={highlight.title}
                className="group rounded-2xl border border-white/[0.1] bg-[#10132E]/85 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-purple/30 md:p-5"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl border border-purple/25 bg-purple/10 text-sm font-bold text-purple">
                  0{index + 1}
                </div>
                <h2 className="text-base font-bold text-white md:text-lg">
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
