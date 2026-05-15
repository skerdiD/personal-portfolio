import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  "X/Twitter": FaXTwitter,
  Email: IoMailOutline,
};

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to build an <span className="text-purple">AI-powered</span>{" "}
          product or business tool?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out and let&apos;s turn your idea into a clean, functional web
          app with the right workflows behind it.
        </p>
        <a href="mailto:hello@skerdi.dev">
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

            if (!info.link) {
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
                href={info.link}
                target={info.link.startsWith("mailto:") ? undefined : "_blank"}
                rel={info.link.startsWith("mailto:") ? undefined : "noreferrer"}
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
