"use client";

import React from "react";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        How I <span className="text-purple">work</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card
          title="Plan the MVP"
          icon={<AceternityIcon order="Phase 1" />}
          des="I map the goal, user flow, dashboard needs, data model, and core
          business logic before building."
        >
          <LightweightReveal variant="emerald" />
        </Card>
        <Card
          title="Build the Product"
          icon={<AceternityIcon order="Phase 2" />}
          des="I build the UI, APIs, auth, database, and practical AI pieces in
          focused passes so the product stays usable."
        >
          <LightweightReveal variant="rose" />
        </Card>
        <Card
          title="Polish the Experience"
          icon={<AceternityIcon order="Phase 3" />}
          des="I tighten responsive states, errors, performance, deployment
          checks, and React/Next.js details before release."
        >
          <LightweightReveal variant="sky" />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const revealStyles = {
  emerald:
    "bg-[radial-gradient(circle_at_25%_20%,rgba(16,185,129,0.42),transparent_28%),radial-gradient(circle_at_78%_72%,rgba(203,172,249,0.24),transparent_30%),linear-gradient(135deg,rgba(6,78,59,0.92),rgba(4,7,29,0.96))]",
  rose:
    "bg-[radial-gradient(circle_at_28%_32%,rgba(244,114,182,0.34),transparent_30%),radial-gradient(circle_at_74%_18%,rgba(221,255,247,0.2),transparent_24%),linear-gradient(135deg,rgba(131,24,67,0.88),rgba(4,7,29,0.96))]",
  sky:
    "bg-[radial-gradient(circle_at_24%_24%,rgba(125,211,252,0.36),transparent_30%),radial-gradient(circle_at_76%_76%,rgba(59,130,246,0.26),transparent_28%),linear-gradient(135deg,rgba(3,105,161,0.88),rgba(4,7,29,0.96))]",
};

const LightweightReveal = ({ variant }: { variant: keyof typeof revealStyles }) => {
  return (
    <div className={`relative h-full w-full overflow-hidden rounded-3xl ${revealStyles[variant]}`}>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:28px_28px] opacity-45" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15" />
      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple/25" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black-100 to-transparent" />
    </div>
  );
};

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl "
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      {hovered && (
        <div className="absolute inset-0 h-full w-full animate-[fade-in_180ms_ease-out]">
          {children}
        </div>
      )}

      <div className="relative z-20 px-10">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
