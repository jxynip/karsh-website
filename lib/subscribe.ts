import { site } from "@/content/site";

/**
 * The ONE place to connect a mailing-list provider.
 *
 * Today: if `site.newsletter.endpoint` is empty, nothing is sent anywhere
 * (the form just shows success so you can see the flow).
 *
 * To go live, pick one:
 *
 * A) Point `endpoint` in content/site.ts at any URL that accepts
 *    POST { "email": "..." } as JSON and returns a 2xx status.
 *
 * B) Keep API keys private with a server route (needs a host that runs
 *    Next.js server code, e.g. Vercel). Create app/api/subscribe/route.ts:
 *
 *      export async function POST(req: Request) {
 *        const { email } = await req.json();
 *        const r = await fetch("https://api.buttondown.com/v1/subscribers", {
 *          method: "POST",
 *          headers: {
 *            Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
 *            "Content-Type": "application/json",
 *          },
 *          body: JSON.stringify({ email_address: email }),
 *        });
 *        return new Response(null, { status: r.ok ? 200 : 502 });
 *      }
 *
 *    ...then set endpoint to "/api/subscribe". Mailchimp, ConvertKit and
 *    Resend follow the same shape: only the URL and body change.
 *
 * Throw an Error on failure. The form shows a retry message.
 */
export async function subscribe(email: string): Promise<void> {
  const { endpoint } = site.newsletter;

  if (!endpoint) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[subscribe] No endpoint set in content/site.ts. Not sent:", email);
    }
    await new Promise((resolve) => setTimeout(resolve, 400));
    return;
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error(`Signup failed with status ${response.status}`);
  }
}
