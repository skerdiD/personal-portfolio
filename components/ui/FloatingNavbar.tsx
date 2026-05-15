"use client";

import { MouseEvent } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV_SCROLL_OFFSET = 96;

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, link: string) => {
    if (!link.startsWith("#")) {
      return;
    }

    const target = document.querySelector(link);

    if (!target) {
      return;
    }

    event.preventDefault();

    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - NAV_SCROLL_OFFSET;

    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}`
    );

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: "auto",
    });
  };

  return (
    <nav
      aria-label="Primary navigation"
      className={cn(
        "fixed inset-x-4 top-4 z-[5000] mx-auto flex w-fit max-w-[calc(100vw-2rem)] items-center justify-center gap-4 rounded-2xl border border-white/[0.12] bg-[#111928]/80 px-5 py-3 shadow-[0px_8px_32px_rgba(0,0,0,0.24)] backdrop-blur-xl backdrop-saturate-150 md:top-6 md:gap-6 md:px-7 md:py-4",
        className
      )}
    >
      {navItems.map((navItem) => (
        <Link
          key={navItem.link}
          href={navItem.link}
          onClick={(event) => handleNavClick(event, navItem.link)}
          className="relative flex items-center text-sm font-medium text-white-100 transition-colors hover:text-purple"
        >
          <span>{navItem.name}</span>
        </Link>
      ))}
    </nav>
  );
};
