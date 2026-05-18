"use client";

import { useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";


import { BackgroundGradientAnimation } from "./GradientBg";
import MagicButton from "../MagicButton";
import { CopyIcon } from "./Icons";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  body,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  body?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"];
  const rightLists = ["Node.js", "APIs", "PostgreSQL", "Prisma", "Supabase"];

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "hello.skerdi.dev@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              fill
              sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={cn(
            "absolute right-0 -bottom-5 h-full w-full",
            id === 4 && "opacity-25",
            id === 5 && "opacity-80"
          )}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              fill
              sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
              className={cn(
                "object-cover object-center w-full h-full",
                id === 4 && "object-right-bottom"
              )}
            />
          )}
        </div>
        {id === 4 && (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(203,172,249,0.18),transparent_34%),linear-gradient(90deg,rgba(4,7,29,0.95)_0%,rgba(4,7,29,0.86)_48%,rgba(4,7,29,0.54)_100%)]" />
            <div className="pointer-events-none absolute right-8 top-8 hidden w-32 rounded-full border border-purple/25 bg-purple/10 px-4 py-2 text-center text-xs font-semibold text-blue-100 backdrop-blur-md md:block">
              AI workflows
            </div>
          </>
        )}
        {id === 2 && (
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_72%,rgba(59,130,246,0.16),transparent_36%),linear-gradient(180deg,rgba(4,7,29,0.18)_0%,rgba(4,7,29,0.9)_100%)]" />
        )}
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-8",
            id === 2 && "min-h-[21rem] pb-36 md:pb-32",
            id === 3 && "min-h-[21rem] justify-between gap-6",
            id === 6 && "items-center justify-center text-center"
          )}
        >
          <div
            className={cn(
              "relative z-10 max-w-sm",
              id === 1 &&
                "rounded-2xl bg-black-100/65 p-4 shadow-2xl backdrop-blur-sm",
              id === 2 && "max-w-[19rem]",
              id === 4 && "max-w-xl rounded-2xl bg-black-100/45 p-5 backdrop-blur-sm md:p-6",
              id === 3 && "max-w-full sm:max-w-[14rem] lg:max-w-[15rem]",
              id === 6 && "mx-auto max-w-xs"
            )}
          >
            {description && (
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-white-200/70">
                {description}
              </p>
            )}
            <div
              className={cn(
                "font-sans text-xl font-bold leading-tight text-white",
                id === 1 ? "lg:text-3xl" : "lg:text-2xl",
                id === 2 && "text-2xl lg:text-3xl",
                id === 6 && "lg:text-xl"
              )}
            >
              {title}
            </div>
            {body && (
              <p className="mt-3 text-sm leading-relaxed text-white-100">
                {body}
              </p>
            )}
            {id === 4 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Summaries",
                  "Proposal drafts",
                  "Bug triage",
                  "Structured output",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/[0.12] bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-white-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>

          {id === 2 && (
            <LightweightGlobe />
          )}

          {id === 3 && (
            <div className="pointer-events-none relative z-10 grid w-full grid-cols-2 gap-2 opacity-90 sm:absolute sm:right-5 sm:top-8 sm:w-[16rem] lg:w-[17rem]">
              {[...leftLists, ...rightLists].map((item) => (
                <span
                  key={item}
                  className="min-h-10 rounded-lg bg-[#10132E] px-3 py-2 text-center text-[10px] leading-tight text-white-100 opacity-70 lg:text-xs lg:opacity-100"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              {copied && (
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-purple/25 bg-purple/10 px-3 py-1 text-xs font-medium text-blue-100 shadow-[0_0_24px_rgba(203,172,249,0.18)]">
                  Copied to clipboard
                </div>
              )}

              <MagicButton
                title={copied ? "Email copied" : "Copy My Email"}
                icon={<CopyIcon className="h-5 w-5" />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const orbitNodes = [
  "left-[18%] top-[38%]",
  "left-[36%] top-[23%]",
  "left-[58%] top-[34%]",
  "left-[74%] top-[55%]",
  "left-[46%] top-[68%]",
];

const LightweightGlobe = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-6 bottom-4 h-64 w-64 opacity-85 md:-right-8"
    >
      <div className="relative h-64 w-64">
        <div className="absolute inset-4 rounded-full border border-purple/25 bg-[radial-gradient(circle_at_35%_30%,rgba(203,172,249,0.26),rgba(59,130,246,0.12)_38%,rgba(4,7,29,0)_70%)] shadow-[0_0_70px_rgba(203,172,249,0.18)]" />
        <div className="absolute inset-12 rounded-full border border-blue-100/15" />
        <div className="absolute left-1/2 top-8 h-56 w-px -translate-x-1/2 rounded-full bg-gradient-to-b from-transparent via-blue-100/25 to-transparent" />
        <div className="absolute left-8 top-1/2 h-px w-56 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-purple/30 to-transparent" />
        <div className="absolute inset-10 rotate-12 rounded-full border border-white/10" />
        <div className="absolute inset-10 -rotate-12 rounded-full border border-white/10" />
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 288 288"
          fill="none"
        >
          <path
            d="M54 162 C92 110, 144 106, 232 78"
            stroke="url(#orbit-a)"
            strokeWidth="1.5"
            strokeDasharray="5 8"
          />
          <path
            d="M42 194 C94 168, 142 184, 238 132"
            stroke="url(#orbit-b)"
            strokeWidth="1.5"
            strokeDasharray="4 9"
          />
          <path
            d="M78 82 C116 144, 168 170, 226 214"
            stroke="url(#orbit-c)"
            strokeWidth="1.5"
            strokeDasharray="4 9"
          />
          <defs>
            <linearGradient id="orbit-a" x1="54" y1="162" x2="232" y2="78">
              <stop stopColor="#CBACF9" stopOpacity="0" />
              <stop offset="0.52" stopColor="#CBACF9" stopOpacity="0.7" />
              <stop offset="1" stopColor="#E4ECFF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="orbit-b" x1="42" y1="194" x2="238" y2="132">
              <stop stopColor="#60A5FA" stopOpacity="0" />
              <stop offset="0.5" stopColor="#60A5FA" stopOpacity="0.55" />
              <stop offset="1" stopColor="#CBACF9" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="orbit-c" x1="78" y1="82" x2="226" y2="214">
              <stop stopColor="#E4ECFF" stopOpacity="0" />
              <stop offset="0.5" stopColor="#E4ECFF" stopOpacity="0.38" />
              <stop offset="1" stopColor="#CBACF9" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        {orbitNodes.map((position) => (
          <span
            key={position}
            className={`absolute h-2.5 w-2.5 rounded-full bg-blue-100 shadow-[0_0_18px_rgba(228,236,255,0.75)] ${position}`}
          />
        ))}
      </div>
    </div>
  );
};
