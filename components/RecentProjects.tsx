"use client";

import Image from "next/image";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { ArrowUpRightIcon, GitHubIcon } from "./ui/Icons";

const isRenderableHref = (link?: string): link is string =>
  Boolean(link && /^https?:\/\//.test(link));

const proofFields = [
  { field: "problem", label: "Problem" },
  { field: "built", label: "Built" },
  { field: "technicalFocus", label: "Technical focus" },
] as const;

const projectImageSizes = "(min-width: 640px) 448px, calc(100vw - 40px)";

const RecentProjects = () => {
  return (
    <div
      id="projects"
      className="scroll-mt-32 pb-14 pt-20 md:scroll-mt-28 md:py-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="heading">Selected Work</h1>
        <p className="mt-4 text-sm leading-relaxed text-white-200 md:text-lg">
          A few projects that show how I think about product flow, UI, data,
          and real-world features.
        </p>
      </div>
      <div className="mt-8 flex flex-col items-center justify-center gap-8 p-0 sm:flex-row sm:flex-wrap sm:gap-16 sm:p-4 md:mt-10">
        {projects.map((item, index) => {
          const liveHref =
            "liveUrl" in item && typeof item.liveUrl === "string"
              ? item.liveUrl
              : undefined;
          const shouldPreloadImage = index === 0;

          return (
            <div
              className="flex w-full max-w-[28rem] items-stretch justify-center sm:min-h-[49rem] sm:w-[28rem] sm:items-center"
              key={item.id}
            >
              <PinContainer
                title="View on GitHub"
                href={item.github}
                containerClassName="w-full"
                className="w-full max-w-[calc(100vw-2.5rem)] lg:w-auto lg:max-w-none"
              >
                <div className="relative mb-5 flex h-52 w-full items-center justify-center overflow-hidden rounded-xl sm:mb-6 sm:h-44 sm:w-[28rem] sm:rounded-none lg:h-48">
                  <div
                    className="relative h-full w-full overflow-hidden rounded-xl sm:rounded-none lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <Image
                      src="/bg.png"
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 384px, 80vw"
                      loading="lazy"
                      quality={55}
                      className="object-cover transition duration-300 group-hover/pin:scale-[1.02]"
                    />
                  </div>
                  <Image
                    src={item.img}
                    alt={`${item.title} preview`}
                    width={464}
                    height={300}
                    sizes={projectImageSizes}
                    priority={shouldPreloadImage}
                    loading={shouldPreloadImage ? undefined : "lazy"}
                    quality={72}
                    placeholder="empty"
                    className="absolute bottom-0 z-10 h-auto w-full bg-[#0f1228] transition duration-300 group-hover/pin:scale-[1.025]"
                  />
                </div>

              <h1 className="text-xl font-bold leading-tight text-white sm:text-base md:text-xl lg:line-clamp-1 lg:text-2xl">
                {item.title}
              </h1>

              <p className="mt-2 text-xs font-medium uppercase leading-snug tracking-[0.12em] text-purple sm:tracking-wider lg:line-clamp-1">
                {item.focus}
              </p>

              <div className="mt-5 space-y-4 sm:mt-4 sm:space-y-3">
                {proofFields.map(({ field, label }) => (
                  <div key={field}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white-200/70">
                      {label}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-white-100 sm:text-xs md:text-sm lg:line-clamp-2">
                      {item[field]}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mb-3 mt-5 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="whitespace-nowrap rounded-full border border-white/[.14] bg-black-200 px-2 py-1 text-[10px] leading-none text-white-100 sm:px-2.5 sm:text-[11px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mb-3 mt-5 grid w-full grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center">
                {isRenderableHref(liveHref) && (
                  <a
                    href={liveHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-purple/30 bg-purple/10 px-3 py-2.5 text-xs font-semibold text-purple transition hover:-translate-y-0.5 hover:border-purple/60 active:scale-[0.98] sm:min-h-0 sm:py-2"
                  >
                    Live Demo
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </a>
                )}

                {isRenderableHref(item.github) && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/[.12] bg-black-200 px-3 py-2.5 text-xs font-semibold text-white-100 transition hover:-translate-y-0.5 hover:border-purple/40 hover:text-white active:scale-[0.98] sm:min-h-0 sm:py-2"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    GitHub
                  </a>
                )}
              </div>
            </PinContainer>
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentProjects;
