"use client";

import { useLayoutEffect, useRef, useState } from "react";

const DESIGN_W = 1512;

type LdpResponsiveShellProps = {
  children: React.ReactNode;
  /** Minimum canvas height in design pixels (4947 landing, 2946 legal). */
  designMinHeight: number;
  /** `legal`: tall legal pages. `compact`: height from content (still scaled canvas). */
  variant?: "landing" | "legal" | "compact";
};

/**
 * Wraps the fixed-width Figma canvas: scales down with CSS (100cqw / 1512px) on narrow
 * viewports and sets the outer clip height from measured content so stacked / taller
 * layouts are not cut off.
 */
export function LdpResponsiveShell({
  children,
  designMinHeight,
  variant = "landing",
}: LdpResponsiveShellProps) {
  const pageRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [shellHeight, setShellHeight] = useState<number | null>(null);

  useLayoutEffect(() => {
    const page = pageRef.current;
    const inner = innerRef.current;
    if (!page || !inner) return;

    const update = () => {
      const cw = page.clientWidth;
      const scale = Math.min(1, cw / DESIGN_W);
      const contentH = Math.max(inner.scrollHeight, designMinHeight);
      setShellHeight(contentH * scale);
    };

    update();

    const ro = new ResizeObserver(() => {
      requestAnimationFrame(update);
    });
    ro.observe(page);
    ro.observe(inner);
    window.addEventListener("resize", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [designMinHeight]);

  const fallbackMin =
    typeof window !== "undefined"
      ? designMinHeight * Math.min(1, window.innerWidth / DESIGN_W)
      : designMinHeight;

  const innerClass =
    variant === "legal"
      ? "ldp-inner ldp-inner--legal bg-black"
      : variant === "compact"
        ? "ldp-inner ldp-inner--compact bg-black"
        : "ldp-inner bg-black";

  return (
    <div
      ref={pageRef}
      className="ldp-page"
      style={
        shellHeight != null
          ? { height: shellHeight }
          : { minHeight: fallbackMin }
      }
    >
      <div ref={innerRef} className={innerClass}>
        {children}
      </div>
    </div>
  );
}
