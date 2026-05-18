import { Fragment, type CSSProperties } from "react";
import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";

const heroHeadline =
  "Building SaaS MVPs, Dashboards, and AI-Powered Web Apps";

const highlightedHeadlineWords = new Set([
  "SaaS",
  "MVPs",
  "Dashboards",
  "AI-Powered",
  "Web",
  "Apps",
]);

const WordReveal = ({ text }: { text: string }) => {
  const words = text.split(" ");

  return (
    <>
      {words.map((word, index) => {
        const normalizedWord = word.replace(/[,.]/g, "");
        const isHighlighted = highlightedHeadlineWords.has(normalizedWord);

        return (
          <Fragment key={`${word}-${index}`}>
            <span
              className="hero-word-reveal inline-block align-baseline"
              style={{ "--word-delay": `${70 + index * 44}ms` } as CSSProperties}
            >
              <span
                className={
                  isHighlighted
                    ? "bg-gradient-to-r from-white via-purple to-blue-100 bg-clip-text text-transparent"
                    : "text-white"
                }
              >
                {word}
              </span>
            </span>
            {index < words.length - 1 ? " " : null}
          </Fragment>
        );
      })}
    </>
  );
};

const Hero = () => {
  return (
    <section className="relative left-1/2 mx-[-50vw] flex min-h-[94svh] w-screen items-center justify-center overflow-hidden px-5 pb-16 pt-32 sm:px-10 md:min-h-[90vh] md:pt-28">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="absolute inset-0 flex h-full w-full items-center justify-center bg-white bg-grid-black-100/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.035]"
      >
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple/20 blur-[120px] md:h-96 md:w-96" />
        <div className="absolute left-[55%] top-[42%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/10 blur-[100px] md:h-80 md:w-80" />
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="relative z-10 flex w-full justify-center">
        <div className="flex w-full max-w-6xl flex-col items-center justify-center text-center">
          <div className="hero-enter-soft inline-flex items-center gap-3 rounded-full border border-purple/35 bg-[linear-gradient(90deg,rgba(203,172,249,0.2),rgba(17,25,40,0.82),rgba(96,165,250,0.12))] px-5 py-2.5 text-center text-sm font-semibold text-blue-100 shadow-[0_0_44px_rgba(203,172,249,0.2)] backdrop-blur-md sm:px-6 sm:py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-purple shadow-[0_0_16px_rgba(203,172,249,0.85)]" />
            <span>Full-Stack Developer</span>
          </div>

          <p className="hero-enter-soft mt-5 text-2xl font-semibold leading-tight text-white [text-wrap:balance] md:text-4xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-white via-purple to-blue-100 bg-clip-text text-transparent">
              Skerdi
            </span>
          </p>

          <h1 className="hero-enter-headline mt-4 max-w-5xl text-4xl font-bold leading-[1.08] tracking-normal text-white [text-wrap:balance] md:text-6xl lg:text-7xl">
            <WordReveal text={heroHeadline} />
          </h1>

          <p className="hero-enter-soft hero-enter-delay-2 mt-6 max-w-3xl text-sm leading-relaxed text-white-200 md:text-lg lg:text-xl">
            I build clean web products with strong UI, authentication,
            databases, business logic, and practical AI integrations for
            startups, creators, and small teams.
          </p>

          <div className="hero-enter-soft hero-enter-delay-3 mt-8 flex w-full max-w-md flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#projects">
              <MagicButton
                title="View my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-white/[.16] bg-black-200 px-7 text-sm font-medium text-white-100 backdrop-blur-lg transition duration-200 hover:-translate-y-0.5 hover:border-purple/35 hover:text-white active:translate-y-px sm:w-auto"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
