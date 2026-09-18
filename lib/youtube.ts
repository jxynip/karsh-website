const ID = /^[\w-]{11}$/;

/** Accepts a watch URL, youtu.be link, /embed or /shorts URL, or a bare ID. */
export function youtubeId(input: string): string | null {
  const value = input.trim();
  if (ID.test(value)) return value;

  try {
    const url = new URL(value);
    const host = url.hostname.replace(/^www\./, "");

    let id: string | null = null;
    if (host === "youtu.be") {
      id = url.pathname.split("/")[1] ?? null;
    } else if (host.endsWith("youtube.com") || host.endsWith("youtube-nocookie.com")) {
      id =
        url.searchParams.get("v") ??
        url.pathname.match(/^\/(?:embed|shorts|live|v)\/([\w-]+)/)?.[1] ??
        null;
    }
    return id && ID.test(id) ? id : null;
  } catch {
    return null;
  }
}
