"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { L } from "@/lib/ldpAssets";

const sf = "var(--font-sora)";

export function TopMenu() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // Menu overlay assets extracted from the Figma menu frame.
  // Note: MCP asset URLs can expire; if they do, re-export assets locally and update constants to `L.*`.
  const menuImgVectorCancel = "https://www.figma.com/api/mcp/asset/5cd257f8-4de8-40fc-b44c-0cfd3aa1a9fa";
  const menuImgLogo = "https://www.figma.com/api/mcp/asset/863cb31d-3167-43dd-ad2e-ca310bf41255";
  const menuImgGroup22 = "https://www.figma.com/api/mcp/asset/479c2f0f-f976-4868-960a-64f332987c5b";

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("finilo-theme", next ? "dark" : "light");
    setIsDark(next);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Menu bar */}
      <div className="absolute left-1/2 top-0 flex w-[1512px] -translate-x-1/2 content-stretch items-center justify-between px-16 pb-6 pt-8">
        <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={L.menuBar} />

        <button
          type="button"
          aria-label="Finilo home"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="relative h-[33px] w-[64px] shrink-0 cursor-pointer border-0 bg-transparent p-0"
        >
          <div className="absolute inset-[0_0_5.29%_0]">
            <img alt="" className="pointer-events-none absolute block size-full max-w-none" src={L.group23} />
          </div>
        </button>

        <div className="relative flex shrink-0 content-stretch items-center justify-center gap-8">
          <button
            type="button"
            className="relative block size-8 shrink-0 cursor-pointer"
            aria-label={mounted ? (isDark ? "Switch to light mode" : "Switch to dark mode") : "Switch theme"}
            onClick={toggleTheme}
          >
            <div className="absolute inset-[8.33%]">
              <div className="absolute inset-[-2.81%]">
                <img alt="" className="block size-full max-w-none" src={L.vector9} />
              </div>
            </div>
          </button>

          <button
            type="button"
            className="relative block size-8 shrink-0 cursor-pointer"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <div className="absolute inset-[20.83%_16.67%]">
              <div className="absolute inset-[-4.02%_-3.52%]">
                <img alt="" className="block size-full max-w-none" src={L.vector10} />
              </div>
            </div>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          className="absolute inset-0 z-[40] bg-black"
          onMouseDown={(e) => {
            // Close only when clicking the background, not on the menu content itself.
            if (e.target === e.currentTarget) closeMenu();
          }}
        >
          {/* Grid background */}
          <div className="-translate-x-1/2 absolute h-[994.114px] left-[calc(50%+0.5px)] top-[-0.21px] w-[1537px]">
            <img alt="" className="absolute block max-w-none size-full" src={L.gridPattern} />
          </div>

          {/* Close (X) */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="absolute block cursor-pointer left-[1305px] size-[92px] top-[104px]"
          >
            <div className="absolute inset-[20.83%]">
              <div className="absolute inset-[-2.8%]">
                <img alt="" className="block max-w-none size-full" src={menuImgVectorCancel} />
              </div>
            </div>
          </button>

          {/* Menu items */}
          <div className="absolute flex flex-col gap-[27px] items-center left-[415px] top-[282px] w-[681px]">
            <Link
              href="/privacy"
              onClick={closeMenu}
              className="content-stretch flex items-center justify-center p-[10px] relative shrink-0"
            >
              <div
                className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[67.319px] text-white text-center whitespace-nowrap"
                style={{ fontFamily: sf, fontWeight: 400 }}
              >
                <p className="leading-[1.1]">Privacy Policy</p>
              </div>
            </Link>

            <Link
              href="/agreement"
              onClick={closeMenu}
              className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 w-full"
            >
              <div
                className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[67.319px] text-white text-center whitespace-nowrap"
                style={{ fontFamily: sf, fontWeight: 400 }}
              >
                <p className="leading-[1.1]">Terms &amp; Condition</p>
              </div>
            </Link>
          </div>

          {/* Footer */}
          <div className="absolute bottom-[55.51px] flex flex-col gap-[94px] items-center left-[62px] w-[1388px] leading-[0]">
            <div className="relative inline-grid grid-cols-[max-content] grid-rows-[max-content] opacity-10 place-items-start">
              <div className="relative col-1 row-1 ml-[637.73px] mt-[18.76px] h-[271.973px] w-[750.27px]">
                <img alt="" className="absolute block max-w-none size-full" src={menuImgLogo} />
              </div>
              <div className="relative col-1 row-1 ml-0 mt-0 h-[309.486px] w-[600.216px]">
                <div className="absolute inset-[0_0_5.29%_0]">
                  <img alt="" className="absolute block max-w-none size-full" src={menuImgGroup22} />
                </div>
              </div>
            </div>
            <div className="relative flex flex-col justify-center min-w-full not-italic shrink-0 text-[#8e8e93] text-center w-[min-content] text-[14px] font-semibold leading-[1.4]">
              <p className="leading-[1.4]">© Copyright 2025. All Rights Reserved</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

