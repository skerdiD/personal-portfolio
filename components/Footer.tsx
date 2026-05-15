import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import Image from "next/image";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  "X/Twitter": FaXTwitter,
  Email: IoMailOutline,
};

const isRenderableHref = (link?: string): link is string =>
  Boolean(link && /^(mailto:|https?:\/\/)/.test(link));

const contactLink =
  socialMedia.find(
    (info) => info.name === "Email" && isRenderableHref(info.link)
  )?.link ?? "mailto:hello.skerdi.dev@gmail.com";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          fill
          sizes="100vw"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to build a <span className="text-purple">SaaS app</span>,
          dashboard, or AI feature?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to turn a clear product idea into a focused, usable web app.
        </p>
        <p className="text-white-200/80 mb-6 max-w-2xl text-center text-sm">
          Available for freelance and collaboration work on full-stack apps,
          dashboards, AI features, and practical product workflows.
        </p>
        <a href={contactLink}>
          <MagicButton
            title="Contact Me"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright (c) 2026 Skerdi
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => {
            const Icon =
              socialIcons[info.name as keyof typeof socialIcons] ??
              IoMailOutline;
            const classes =
              "w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300";
            const link = info.link;

            if (!isRenderableHref(link)) {
              return (
                <button
                  key={info.id}
                  type="button"
                  aria-label={`${info.name} link coming soon`}
                  title={`${info.name} link coming soon`}
                  className={`${classes} cursor-not-allowed opacity-45`}
                  disabled
                >
                  <Icon className="h-5 w-5" />
                </button>
              );
            }

            return (
              <a
                key={info.id}
                href={link}
                target={link.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.startsWith("mailto:") ? undefined : "noreferrer"}
                aria-label={info.name}
                title={info.name}
                className={`${classes} cursor-pointer transition-opacity hover:opacity-80`}
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
