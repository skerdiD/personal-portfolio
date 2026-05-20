import Image from "next/image";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import {
  ArrowUpRightIcon,
  GitHubIcon,
  MailIcon,
} from "./ui/Icons";

const socialIcons = {
  GitHub: GitHubIcon,
  Email: MailIcon,
};

const isRenderableHref = (link?: string): link is string =>
  Boolean(link && /^(mailto:|https?:\/\/)/.test(link));

const contactLink =
  socialMedia.find(
    (info) => info.name === "Email" && isRenderableHref(info.link)
  )?.link ?? "mailto:skerdidev.services@gmail.com";

const Footer = () => {
  return (
    <footer
      className="relative w-full scroll-mt-24 overflow-hidden pb-10 pt-14 md:scroll-mt-28 md:pt-20"
      id="contact"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          fill
          sizes="100vw"
          className="h-full w-full object-cover opacity-50"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Have a <span className="text-purple">product idea</span> to build?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          I can help turn it into a clean, useful web app with strong UI, real
          data, and reliable product flow.
        </p>
        <p className="text-white-200/80 mb-6 max-w-2xl text-center text-sm">
          Available for MVPs, dashboards, AI workflows, full-stack features, and
          React/Next.js improvements.
        </p>
        <a href={contactLink}>
          <MagicButton
            title="Contact Me"
            icon={<ArrowUpRightIcon className="h-4 w-4" />}
            position="right"
          />
        </a>
      </div>
      <div className="relative z-10 mt-10 flex flex-col items-center justify-between md:mt-16 md:flex-row">
        <p className="max-w-xl text-center text-sm font-light text-white-100 md:text-left md:text-base md:font-normal">
          Built by Skerdi, focused on clean products, useful features, and
          steady improvement.
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.filter((info) => isRenderableHref(info.link)).map((info) => {
            const Icon =
              socialIcons[info.name as keyof typeof socialIcons] ??
              MailIcon;
            const classes =
              "w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300";
            const link = info.link;

            return (
              <a
                key={info.id}
                href={link}
                target={link.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  link.startsWith("mailto:") ? undefined : "noopener noreferrer"
                }
                aria-label={info.name}
                title={info.name}
                className={`${classes} cursor-pointer transition duration-200 hover:-translate-y-0.5 hover:border-purple/30 hover:opacity-90 active:scale-[0.98]`}
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
