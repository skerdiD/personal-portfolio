import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about" className="scroll-mt-24 pb-20 pt-12 md:scroll-mt-28 md:pt-16">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h1 className="heading">About Me</h1>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-white-200 md:text-lg">
          <p>
            I&apos;m a full-stack developer focused on building practical web
            products that look clean, work smoothly, and solve real problems.
          </p>
          <p>
            I like projects where the frontend, backend, database, auth, and
            user flow connect into one useful product, not just a nice-looking
            page.
          </p>
          <p>
            I&apos;m interested in working with startups, SaaS teams, creators,
            and small businesses that need dashboards, internal tools, AI
            workflows, or full-stack product features.
          </p>
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
