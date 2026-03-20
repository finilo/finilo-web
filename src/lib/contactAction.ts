"use server";

const API_BASE = process.env.BACKEND_API_URL || "https://api.finiloapp.xyz";

export async function submitContactForm(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!message) {
    return { success: false as const, error: "Message is required" };
  }

  try {
    const res = await fetch(`${API_BASE}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      return { success: false as const, error: body.error || "Failed to send message" };
    }

    return { success: true as const, error: null };
  } catch {
    return { success: false as const, error: "Could not reach the server. Please try again later." };
  }
}
