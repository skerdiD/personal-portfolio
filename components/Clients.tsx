import { capabilityServices, techStackGroups } from "@/data";

const Clients = () => {
  return (
    <section id="principles" className="scroll-mt-24 py-20 md:scroll-mt-28">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-100">
            What I build
          </p>
          <h1 className="heading mt-3">
            SaaS MVPs, dashboards, and{" "}
            <span className="text-purple">AI-powered features</span>
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-white-200 md:text-lg">
            I build clean full-stack products with strong UI, auth, databases,
            business logic, and practical AI integrations.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {capabilityServices.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-white/[.1] bg-black-200 p-6 shadow-input backdrop-blur-lg"
            >
              <h2 className="text-xl font-bold text-white md:text-2xl">
                {service.title}
              </h2>
              <p className="mt-4 min-h-24 text-sm leading-relaxed text-white-200">
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

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {techStackGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/[.1] bg-black-200 p-5 backdrop-blur-lg"
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

export default Clients;
