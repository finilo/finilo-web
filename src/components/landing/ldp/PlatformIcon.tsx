/* eslint-disable @next/next/no-img-element */
import { L } from "@/lib/ldpAssets";

export type PlatformIconVariant =
  | "affinity"
  | "apple-music"
  | "canva"
  | "chatgpt-icon 1"
  | "discord"
  | "duolingo"
  | "linkedin.svg"
  | "netflix"
  | "paramount"
  | "perplexity"
  | "ps.svg"
  | "snapchat"
  | "spotify.svg"
  | "tinder.svg"
  | "xbox"
  | "youtube.svg";

type Props = { className?: string; property1?: PlatformIconVariant };

export function PlatformIcon({ className, property1 = "chatgpt-icon 1" }: Props) {
  const isAppleMusic = property1 === "apple-music";
  const isCanva = property1 === "canva";
  const isChatgptOrPerplexityOrParamount = ["chatgpt-icon 1", "perplexity", "paramount"].includes(property1);
  const isDiscord = property1 === "discord";
  const isDuolingo = property1 === "duolingo";
  const isLinkedinSvg = property1 === "linkedin.svg";
  const isParamount = property1 === "paramount";
  const isPerplexity = property1 === "perplexity";
  const isPsSvg = property1 === "ps.svg";
  const isSnapchat = property1 === "snapchat";
  const isTinderSvg = property1 === "tinder.svg";
  const isXbox = property1 === "xbox";
  const isYoutubeSvg = property1 === "youtube.svg";

  const base =
    className ||
    `relative ${["duolingo", "netflix", "discord", "xbox", "canva"].includes(property1) ? "aspect-[616.7356567382812/616.7356567382812] w-[512px]" : ["affinity", "paramount", "apple-music", "spotify.svg", "ps.svg", "tinder.svg", "linkedin.svg", "youtube.svg", "snapchat"].includes(property1) ? "size-[512px]" : isPerplexity ? "h-[509.64px] w-[512px]" : "h-[509.639px] w-[512px]"}`;

  return (
    <div className={base}>
      {["affinity", "ps.svg", "tinder.svg", "linkedin.svg", "youtube.svg"].includes(property1) && (
        <div
          className={`absolute ${["ps.svg", "tinder.svg", "linkedin.svg", "youtube.svg"].includes(property1) ? "inset-[0_0.28%_0.28%_0]" : "inset-[0.39%]"}`}
        >
          <img
            alt=""
            className="pointer-events-none absolute block size-full max-w-none"
            src={["linkedin.svg", "youtube.svg"].includes(property1) ? L.vector8 : isTinderSvg ? L.vector6 : isPsSvg ? L.vector5 : L.vector2}
          />
        </div>
      )}
      {isChatgptOrPerplexityOrParamount && (
        <>
          <img alt="" className="pointer-events-none absolute block size-full max-w-none" src={isParamount ? L.paramount : isPerplexity ? L.perplexity : L.chatgpt} />
          <div className={`absolute ${isParamount ? "inset-[19.73%_15.75%_25.64%_15.7%]" : isPerplexity ? "inset-[17.81%_22.24%_17.63%_22.24%]" : "inset-[14.26%_14.9%]"}`}>
            <img alt="" className="pointer-events-none absolute block size-full max-w-none" src={isParamount ? L.vector4 : isPerplexity ? L.vector1 : L.vector} />
          </div>
        </>
      )}
      {["netflix", "xbox", "canva"].includes(property1) && (
        <div className={`absolute inset-[-0.14%_0.14%_0.14%_-0.14%] ${isCanva ? "" : "rounded-[110px]"}`}>
          <img
            alt=""
            className={`pointer-events-none absolute size-full max-w-none ${isCanva ? "block" : "inset-0 rounded-[110px] object-contain"}`}
            height={isCanva ? 512 : undefined}
            src={isCanva ? L.iconJpeg2 : isXbox ? L.iconJpeg1 : L.iconJpeg}
            width={isCanva ? 512 : undefined}
          />
        </div>
      )}
      {["affinity", "tinder.svg"].includes(property1) && (
        <div className={`absolute ${isTinderSvg ? "inset-[25.78%_28.91%]" : "inset-[19.57%_24.64%_19.57%_22.65%]"}`}>
          <img alt="" className="pointer-events-none absolute block size-full max-w-none" src={isTinderSvg ? L.vector7 : L.vector3} />
        </div>
      )}
      {["spotify.svg", "youtube.svg"].includes(property1) && (
        <div className={`absolute contents ${isYoutubeSvg ? "inset-[30.37%_22.32%_30.76%_22.32%]" : "inset-[0.75%]"}`}>
          <div className={`absolute flex items-center justify-center ${isYoutubeSvg ? "inset-[30.37%_22.32%_30.76%_22.32%]" : "inset-[0.75%]"}`}>
            <div className={`-scale-y-100 flex-none ${isYoutubeSvg ? "h-[199px] w-[283.424px]" : "size-[504.28px]"}`}>
              <div className="relative size-full">
                <img alt="" className="pointer-events-none absolute block size-full max-w-none" src={isYoutubeSvg ? L.g13 : L.g12} />
              </div>
            </div>
          </div>
        </div>
      )}
      {isAppleMusic && (
        <>
          <div className="absolute inset-[0_0.28%_0.28%_0]">
            <img alt="" className="pointer-events-none absolute block size-full max-w-none" src={L.group} />
          </div>
          <div className="absolute inset-[15.22%_27%_16.93%_19.71%]">
            <img alt="" className="pointer-events-none absolute block size-full max-w-none" src={L.group1} />
          </div>
        </>
      )}
      {isDuolingo && (
        <div className="absolute inset-[-0.14%_0.14%_0.14%_-0.14%]">
          <img alt="" className="pointer-events-none absolute block size-full max-w-none" height={512} src={L.duolingo} width={512} />
        </div>
      )}
      {isDiscord && (
        <div className="absolute inset-[-0.14%_0.14%_0.14%_-0.14%]">
          <img alt="" className="pointer-events-none absolute block size-full max-w-none" height={512} src={L.discord} width={512} />
        </div>
      )}
      {isPsSvg && (
        <div className="absolute inset-[25.98%_19.33%]">
          <div className="absolute inset-[25.98%_19.33%]">
            <div className="absolute inset-[25.98%_19.33%]">
              <div className="absolute inset-[25.98%_19.33%]">
                <img alt="" className="pointer-events-none absolute block size-full max-w-none" src={L.maskGroup} />
              </div>
            </div>
          </div>
        </div>
      )}
      {isLinkedinSvg && (
        <div className="absolute inset-[22.07%_22.07%_22.46%_22.07%]">
          <img alt="" className="pointer-events-none absolute block size-full max-w-none" src={L.path2520} />
        </div>
      )}
      {isSnapchat && (
        <>
          <div className="absolute inset-[0.14%]">
            <div className="absolute inset-[0.14%]">
              <div className="absolute flex inset-[0.14%] items-center justify-center">
                <div className="-scale-y-100 h-[510.57px] w-[510.582px] flex-none">
                  <div className="relative size-full">
                    <img alt="" className="pointer-events-none absolute block size-full max-w-none" src={L.g3646} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-[14.63%_14.08%]">
            <img alt="" className="pointer-events-none absolute block size-full max-w-none" src={L.g823} />
          </div>
        </>
      )}
    </div>
  );
}
