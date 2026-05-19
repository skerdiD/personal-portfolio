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

const projectImageSizes = "(min-width: 640px) 448px, 86vw";

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
        {projects.map((item, index) => {
          const liveHref =
            "liveUrl" in item && typeof item.liveUrl === "string"
              ? item.liveUrl
              : undefined;
          const shouldPreloadImage = index === 0;

          return (
            <div
              className="flex min-h-[49rem] items-center justify-center sm:w-[28rem] w-[86vw]"
              key={item.id}
            >
              <PinContainer title="View on GitHub" href={item.github}>
                <div className="relative mb-6 flex h-44 w-[86vw] items-center justify-center overflow-hidden sm:w-[28rem] lg:h-48">
                  <div
                    className="relative h-full w-full overflow-hidden lg:rounded-3xl"
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

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p className="mt-2 text-xs font-medium uppercase tracking-wider text-purple line-clamp-1">
                {item.focus}
              </p>

              <div className="mt-4 space-y-3">
                {proofFields.map(({ field, label }) => (
                  <div key={field}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white-200/70">
                      {label}
                    </p>
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white-100 md:text-sm">
                      {item[field]}
                    </p>
                  </div>
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

              <div className="mt-5 mb-3 flex flex-wrap items-center gap-3">
                {isRenderableHref(liveHref) && (
                  <a
                    href={liveHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-purple/30 bg-purple/10 px-3 py-2 text-xs font-semibold text-purple transition hover:-translate-y-0.5 hover:border-purple/60 active:scale-[0.98]"
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
                    className="inline-flex items-center gap-2 rounded-lg border border-white/[.12] bg-black-200 px-3 py-2 text-xs font-semibold text-white-100 transition hover:-translate-y-0.5 hover:border-purple/40 hover:text-white active:scale-[0.98]"
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
