import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about" className="scroll-mt-24 pb-20 pt-12 md:scroll-mt-28 md:pt-16">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h1 className="heading">
          What I <span className="text-purple">build</span>
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-white-200 md:text-lg">
          SaaS MVPs, admin dashboards, and AI-powered features with clean UI,
          auth, databases, and real business logic.
        </p>
      </div>

      <BentoGrid className="w-full">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
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
