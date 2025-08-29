import clsx from "clsx";
import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-block rounded-lg px-3 py-1 text-xs font-sans font-bold",
        className
      )}
    >
      {children}
    </span>
  );
}
