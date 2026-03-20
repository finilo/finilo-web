"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { L } from "@/lib/ldpAssets";

const sf = "var(--font-sora)";

export function TopMenu() {
  const pathname = usePathname();
  const router = useRouter();
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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("finilo-theme", next ? "dark" : "light");
    setIsDark(next);
  };

  const closeMenu = () => setMenuOpen(false);

  const goHome = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <>
      {/* Menu bar */}
      <div className="fixed left-1/2 top-0 z-30 flex w-full max-w-[1512px] -translate-x-1/2 content-stretch items-center justify-between px-4 pb-4 pt-5 sm:px-8 sm:pb-6 sm:pt-8 lg:px-16">
        <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={L.menuBar} />

        <button
          type="button"
          aria-label="Finilo home"
          onClick={goHome}
          className="relative h-[33px] w-[64px] shrink-0 cursor-pointer border-0 bg-transparent p-0"
        >
          <div className="absolute inset-[0_0_5.29%_0]">
            <img alt="" className="pointer-events-none absolute block size-full max-w-none" src={L.group23} />
          </div>
        </button>

        <div className="relative flex shrink-0 content-stretch items-center justify-center gap-4 sm:gap-8">
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
          className="fixed inset-0 z-[40] bg-black"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeMenu();
          }}
        >
          {/* Grid background */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/images/hero-grid-pattern.svg')",
              backgroundRepeat: "repeat-x",
              backgroundPosition: "center top",
              backgroundSize: "1512px auto",
            }}
          />

          {/* Close (X) */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="absolute right-4 top-4 z-10 block size-14 cursor-pointer sm:right-8 sm:top-8 sm:size-[72px] min-[1512px]:left-[1305px] min-[1512px]:right-auto min-[1512px]:top-[104px] min-[1512px]:size-[92px]"
          >
            <div className="absolute inset-[20.83%]">
              <div className="absolute inset-[-2.8%]">
                <img alt="" className="block max-w-none size-full" src={menuImgVectorCancel} />
              </div>
            </div>
          </button>

          {/* Menu items — do not call closeMenu on these Links: closing the overlay before
              the route changes briefly reveals the home page while still on `/`. */}
          <div className="absolute left-1/2 top-[min(282px,22vh)] z-10 flex w-[min(681px,calc(100%-32px))] -translate-x-1/2 flex-col items-center gap-6 sm:gap-[27px]">
            <Link
              href="/privacy"
              className="content-stretch flex items-center justify-center p-[10px] relative shrink-0"
            >
              <div
                className="relative flex shrink-0 flex-col justify-center text-center text-[clamp(2rem,10vw,4.2rem)] leading-[1.1] text-white not-italic min-[1512px]:text-[67.319px] min-[1512px]:leading-[0]"
                style={{ fontFamily: sf, fontWeight: 400 }}
              >
                <p className="leading-[1.1]">Privacy Policy</p>
              </div>
            </Link>

            <Link
              href="/agreement"
              className="relative flex w-full shrink-0 items-center justify-center p-[10px]"
            >
              <div
                className="relative flex shrink-0 flex-col justify-center text-center text-[clamp(2rem,10vw,4.2rem)] leading-[1.1] text-white not-italic min-[1512px]:text-[67.319px] min-[1512px]:leading-[0]"
                style={{ fontFamily: sf, fontWeight: 400 }}
              >
                <p className="leading-[1.1]">Terms &amp; Condition</p>
              </div>
            </Link>

            <Link href="/contact" className="relative flex shrink-0 items-center justify-center p-[10px]">
              <div
                className="relative flex shrink-0 flex-col justify-center text-center text-[clamp(2rem,10vw,4.2rem)] leading-[1.1] text-white not-italic min-[1512px]:text-[67.319px] min-[1512px]:leading-[0]"
                style={{ fontFamily: sf, fontWeight: 400 }}
              >
                <p className="leading-[1.1]">Contact Us</p>
              </div>
            </Link>
          </div>

          {/* Footer */}
          <div className="pointer-events-none absolute bottom-6 left-4 right-4 flex flex-col items-center gap-10 leading-[0] sm:bottom-[55.51px] sm:gap-[94px] min-[1512px]:left-[62px] min-[1512px]:right-auto min-[1512px]:w-[1388px]">
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
              <p className="leading-[1.4]">© Copyright {new Date().getFullYear()}. All Rights Reserved</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

