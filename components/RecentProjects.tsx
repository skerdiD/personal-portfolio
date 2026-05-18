"use client";

import Image from "next/image";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { ArrowUpRightIcon, GitHubIcon } from "./ui/Icons";

const RecentProjects = () => {
  return (
    <div id="projects" className="scroll-mt-24 py-20 md:scroll-mt-28">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="heading">Selected Work</h1>
        <p className="mt-4 text-sm leading-relaxed text-white-200 md:text-lg">
          A few projects that show how I think about product flow, UI, data,
          and real-world features.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[42rem] h-[39rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title="View on GitHub" href={item.github}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[18vh] lg:h-[24vh] mb-7">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image
                    src="/bg.png"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 384px, 80vw"
                    className="object-cover"
                  />
                </div>
                <Image
                  src={item.img}
                  alt={`${item.title} preview`}
                  width={464}
                  height={300}
                  sizes="(min-width: 1024px) 384px, 80vw"
                  className="z-10 absolute bottom-0 h-auto w-full"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p className="mt-2 text-xs font-medium uppercase tracking-wider text-purple line-clamp-1">
                {item.focus}
              </p>

              <p
                className="lg:text-base lg:font-normal font-light text-sm line-clamp-3"
                style={{
                  color: "#BEC1DD",
                  margin: "0.75vh 0",
                }}
              >
                {item.des}
              </p>

              <p className="text-xs md:text-sm text-white-200 line-clamp-2">
                {item.useCase}
              </p>

              <div className="mt-4 flex flex-col gap-2">
                {item.features.map((feature) => (
                  <p
                    key={feature}
                    className="rounded-lg border border-white/[.1] bg-black-200 px-3 py-2 text-[11px] leading-snug text-white-100"
                  >
                    {feature}
                  </p>
                ))}
              </div>

              <div className="mt-4 mb-3 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[.14] bg-black-200 px-2.5 py-1 text-[11px] leading-none text-white-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-5 mb-3">
                <div className="flex items-center gap-2 text-white-200">
                  <GitHubIcon className="h-5 w-5" />
                  <span className="text-xs md:text-sm">GitHub</span>
                </div>

                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center"
                >
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    View GitHub
                  </p>
                  <ArrowUpRightIcon className="ms-3 h-4 w-4 text-purple" />
                </a>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
