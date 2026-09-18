# KARSH

Single-page static artist site. Next.js (App Router) + TypeScript, plain CSS, no runtime dependencies beyond Next/React.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Requires Node 20+. Fonts load through `next/font/google`, so the first build needs internet access.

## Change content: only edit `content/site.ts`

| What | Field |
| --- | --- |
| Background | `BACKGROUND_IMAGE_URL` (top of file) |
| 3 image links | `imageLinks[]` → `image`, `href`, `alt` |
| 2 videos | `youtube[]` (watch URL, youtu.be link, or 11-char ID) |
| Footer links | `socials` |
| Statement / name / meta | `statement`, `name`, `description`, `url` |
| Mailing list | `newsletter.endpoint` |

Images can be a local file in `public/images/` (use `/images/name.jpg`) or a direct `https://` image URL.

**Instagram:** post URLs are web pages, not images, and Instagram's image links expire and block hotlinking. Put the post URL in `href`, save the picture yourself, and use it as `image`. Nothing here scrapes Instagram.

The placeholder images in `public/images/` are plain dark grain. Replace or overwrite them.

## Mailing list

"Sign me up" opens `/signup`. Submission goes through one function: `lib/subscribe.ts`. With `endpoint` empty, nothing is sent (form only shows success). The file explains how to connect Buttondown, Mailchimp, ConvertKit or Resend.

## Notes

- **Performance:** all images go through `next/image` (AVIF/WebP, responsive sizes, lazy below the fold). YouTube videos load as a thumbnail and only fetch the player when clicked.
- **Remote images:** `next.config.ts` allows any https host so pasted URLs just work. Once URLs are final, list only your hosts there (`i.ytimg.com` is needed for video thumbnails).
- **Fonts:** Special Gothic Expanded One and Inter are both in `next/font/google`, so no local font files are needed.
- **Deploy:** Vercel works with zero config. Pages are prerendered static HTML.
