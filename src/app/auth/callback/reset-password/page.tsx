"use client";

import { useEffect } from "react";

/**
 * Password reset callback page.
 *
 * Supabase redirects here after the user clicks the password reset email link.
 * The URL contains tokens in the hash fragment (#access_token=...&refresh_token=...).
 *
 * On mobile, if App Links/Universal Links are verified, the OS opens the app
 * directly and this page is never rendered. If the link opens in a browser
 * instead, this page reads the hash fragment client-side and redirects to the
 * app via the custom scheme.
 */
export default function ResetPasswordCallback() {
  useEffect(() => {
    const hash = window.location.hash || "";
    const deepLink = "finilomobile://reset-password" + hash;
    window.location.replace(deepLink);
  }, []);

  const hash = typeof window !== "undefined" ? window.location.hash || "" : "";
  const fallbackHref = "finilomobile://reset-password" + hash;

  return (
    <div
      style={{
        fontFamily: "-apple-system, system-ui, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        margin: 0,
        background: "#03045e",
        color: "#fff",
      }}
    >
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h2>Redirecting to Finilo...</h2>
        <p style={{ opacity: 0.8, marginTop: "1rem" }}>
          If the app doesn&apos;t open automatically,{" "}
          <a href={fallbackHref} style={{ color: "#c77dff" }}>
            tap here
          </a>
          .
        </p>
      </div>
    </div>
  );
}
