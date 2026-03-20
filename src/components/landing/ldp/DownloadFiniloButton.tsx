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
      className={`${wrapperClassName} relative flex cursor-pointer items-center justify-center gap-[10px] overflow-hidden rounded-[8px] border-[0.7px] border-dashed border-[#545454] bg-[#262626] px-[6px] outline-none focus:outline-none focus-visible:outline-none sm:gap-[14.595px] sm:rounded-[11px] sm:border-[0.912px] sm:px-[10px] min-[405px]:px-[8px] sm:min-[405px]:px-[14px]`}
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
      <div className="relative size-[22px] shrink-0 sm:size-[31.014px]">
        <img
          alt=""
          className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
          src={iconLeftSrc}
        />
      </div>
      <p
        className="relative shrink-0 whitespace-nowrap text-[16px] leading-normal text-white not-italic sm:text-[25.54px]"
        style={{ fontFamily, fontWeight: 400 }}
      >
        Download Finilo
      </p>
      <div className="relative h-[20px] w-[42px] shrink-0 sm:h-[27.365px] sm:w-[58.378px]">
        <img alt="" className="pointer-events-none absolute block size-full max-w-none" src={iconRightSrc} />
      </div>
    </div>
  );
}

