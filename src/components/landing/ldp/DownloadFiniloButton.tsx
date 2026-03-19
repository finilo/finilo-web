"use client";

import React from "react";

type DownloadFiniloButtonProps = {
  onActivate: () => void;
  wrapperClassName: string;
  fontFamily: string;
  iconLeftSrc: string;
  iconRightSrc: string;
};

export function DownloadFiniloButton({
  onActivate,
  wrapperClassName,
  fontFamily,
  iconLeftSrc,
  iconRightSrc,
}: DownloadFiniloButtonProps) {
  return (
    <div
      className={`${wrapperClassName} cursor-pointer outline-none focus:outline-none focus-visible:outline-none`}
      role="button"
      tabIndex={0}
      onClick={onActivate}
      onKeyDown={(e) => {
        if (e.key === "Enter") onActivate();
        if (e.key === " ") {
          e.preventDefault();
          onActivate();
        }
      }}
      aria-label="Download Finilo"
    >
      <div className="absolute inset-0 rounded-[11px] border-[0.912px] border-dashed border-[#545454] bg-[#262626]" />
      <div className="absolute left-[calc(50%-0.91px)] top-[calc(50%+0.91px)] flex -translate-x-1/2 -translate-y-1/2 content-stretch items-center gap-[14.595px]">
        <div className="relative size-[31.014px] shrink-0">
          <img
            alt=""
            className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
            src={iconLeftSrc}
          />
        </div>
        <p className="relative shrink-0 whitespace-nowrap text-[25.54px] leading-normal text-white not-italic" style={{ fontFamily, fontWeight: 400 }}>
          Download Finilo
        </p>
        <div className="relative h-[27.365px] w-[58.378px] shrink-0">
          <img alt="" className="pointer-events-none absolute block size-full max-w-none" src={iconRightSrc} />
        </div>
      </div>
    </div>
  );
}

