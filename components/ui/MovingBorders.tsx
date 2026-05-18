"use client";
import React, { type CSSProperties } from "react";
import { cn } from "@/lib/utils";

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  style,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  [key: string]: any;
}) {
  const durationMs = duration ?? 8000;
  const componentStyle = {
    borderRadius: borderRadius,
    "--border-duration": `${durationMs}ms`,
    ...style,
  } as CSSProperties;

  return (
    <Component
      className={cn(
        "bg-transparent relative text-xl p-[1px] overflow-hidden md:col-span-2 md:row-span-1",
        containerClassName
      )}
      style={componentStyle}
      {...otherProps}
    >
      <div
        className={cn(
          "absolute -inset-1 opacity-80 [animation:spin_var(--border-duration)_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0deg,transparent_70deg,#CBACF9_120deg,transparent_170deg,transparent_360deg)]",
          borderClassName
        )}
      />

      <div
        className={cn(
          "relative bg-slate-900/[0.] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}
