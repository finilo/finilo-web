const DEFAULT_SITE_URL = "https://finiloapp.xyz";

/** Canonical marketing site origin (no trailing slash). Override with NEXT_PUBLIC_SITE_URL. */
export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? DEFAULT_SITE_URL
  );
}
