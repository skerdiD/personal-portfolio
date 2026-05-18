import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export const ArrowUpRightIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.7 3.3a1 1 0 0 0-1.05-.23l-16 6a1 1 0 0 0 .03 1.88l6.84 2.53 2.53 6.84a1 1 0 0 0 .93.65h.02a1 1 0 0 0 .93-.68l6-16a1 1 0 0 0-.23-1.02Zm-6.68 13.75-1.77-4.78 3.5-3.5a1 1 0 0 0-1.42-1.42l-3.5 3.5-4.78-1.77 12.28-4.6-4.31 12.57Z" />
  </svg>
);

export const CopyIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path
      d="M8 8.5A2.5 2.5 0 0 1 10.5 6H18a2.5 2.5 0 0 1 2.5 2.5V16A2.5 2.5 0 0 1 18 18.5h-7.5A2.5 2.5 0 0 1 8 16V8.5Z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M5.5 14.5A2.5 2.5 0 0 1 3 12V5.5A2.5 2.5 0 0 1 5.5 3H12a2.5 2.5 0 0 1 2.5 2.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
  </svg>
);

export const GitHubIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.57.1.78-.25.78-.55v-2.1c-3.18.69-3.85-1.35-3.85-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.52-2.54-.29-5.21-1.27-5.21-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.03 0 0 .96-.31 3.16 1.17A10.9 10.9 0 0 1 12 6.17c.98 0 1.96.13 2.88.39 2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.74.11 3.03.74.8 1.18 1.82 1.18 3.07 0 4.39-2.67 5.36-5.22 5.64.41.36.77 1.05.77 2.12v3.1c0 .3.21.66.79.55A11.5 11.5 0 0 0 12 .5Z" />
  </svg>
);

export const LinkedInIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M5.36 7.95H1.84V22h3.52V7.95ZM3.6 2A2.04 2.04 0 1 0 3.58 6.08 2.04 2.04 0 0 0 3.6 2Zm18.54 12.04c0-4.12-2.2-6.04-5.14-6.04a4.43 4.43 0 0 0-4 2.2h-.05V7.95H9.58V22h3.52v-6.95c0-1.83.35-3.61 2.62-3.61 2.24 0 2.27 2.1 2.27 3.73V22h3.52v-7.96h.63Z" />
  </svg>
);

export const XIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M13.9 10.47 21.35 2h-1.76l-6.47 7.35L7.96 2H2l7.81 11.12L2 22h1.76l6.83-7.77L16.04 22H22l-8.1-11.53Zm-2.42 2.75-.79-1.1L4.4 3.3h2.72l5.08 7.12.79 1.1 6.6 9.25h-2.72l-5.39-7.55Z" />
  </svg>
);

export const MailIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path
      d="M4.75 6.75h14.5v10.5H4.75V6.75Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
    <path
      d="m5.25 7.25 6.75 5 6.75-5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </svg>
);
