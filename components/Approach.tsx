"use client";

import { workPrinciples } from "@/data";

const Approach = () => {
  return (
    <section id="principles" className="w-full scroll-mt-24 py-20 md:scroll-mt-28">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="heading">How I Work</h1>
        <p className="mt-4 text-sm leading-relaxed text-white-200 md:text-lg">
          I care about clear product thinking, clean execution, and building
          features that make sense for real users.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
        {workPrinciples.map((principle) => (
          <article
            key={principle.title}
            className="rounded-2xl border border-white/[.1] bg-black-200 p-6 shadow-input backdrop-blur-lg transition duration-200 hover:-translate-y-1 hover:border-purple/30"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple">
              0{principle.id}
            </p>
            <h2 className="mt-4 text-xl font-bold leading-tight text-white">
              {principle.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white-200">
              {principle.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Approach;
