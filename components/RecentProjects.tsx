"use client";

import { FaGithub, FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[37rem] h-[32rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title="View on GitHub" href={item.github}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[18vh] lg:h-[24vh] mb-7">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2"
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

              <div className="mt-5 mb-4 flex flex-wrap gap-2">
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
                  <FaGithub className="text-lg" />
                  <span className="text-xs md:text-sm">GitHub</span>
                </div>

                <a
                  href={item.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-center items-center"
                >
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    View GitHub
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
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
