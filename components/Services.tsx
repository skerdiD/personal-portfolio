import { capabilityServices, techStackGroups } from "@/data";

const Services = () => {
  return (
    <section id="services" className="scroll-mt-24 py-14 md:scroll-mt-28 md:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-100">
            What I Build
          </p>
          <h1 className="heading mt-3">
            Useful web apps, dashboards, and{" "}
            <span className="text-purple">AI workflows</span>
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-white-200 md:text-lg">
            I focus on building products that are simple to understand, easy to
            use, and strong enough to show real business value.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2 xl:grid-cols-4">
          {capabilityServices.map((service) => (
            <article
              key={service.title}
              className="h-full rounded-2xl border border-white/[.1] bg-black-200 p-6 shadow-input backdrop-blur-lg transition duration-300 hover:-translate-y-0.5 hover:border-purple/25 hover:shadow-[0_18px_60px_rgba(203,172,249,0.1)]"
            >
              <h2 className="text-xl font-bold text-white md:text-2xl">
                {service.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white-200 md:min-h-32">
                {service.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[.12] bg-black-100 px-3 py-1.5 text-xs text-white-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center md:mt-16">
          <h2 className="heading">Tools I Use</h2>
          <p className="mt-4 text-sm leading-relaxed text-white-200 md:text-lg">
            I use modern tools to build fast, clean, and reliable web products.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {techStackGroups.map((group) => (
            <div
              key={group.title}
              className="h-full rounded-2xl border border-white/[.1] bg-black-200 p-5 backdrop-blur-lg transition duration-300 hover:-translate-y-0.5 hover:border-purple/25"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-purple">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/[.1] bg-[#10132E] px-2.5 py-1.5 text-xs leading-none text-white-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
