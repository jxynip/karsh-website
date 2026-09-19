/**
 * EVERYTHING you'll ever want to change lives in this file.
 * No page component needs to be touched to swap a URL.
 *
 * IMAGES accept either:
 *   - a local path in /public, e.g. "/images/link-1.jpg"
 *   - a direct https image URL, e.g. "https://example.com/photo.jpg"
 * Instagram post URLs (instagram.com/p/...) are pages, not images, so they
 * belong in `href`. Save the photo yourself and use it as `image`.
 */

export type ImageLink = {
  /** Local path (/images/x.jpg) or direct https image URL. */
  image: string;
  /** Where the image links to, e.g. an Instagram post URL. */
  href: string;
  /** Optional description for screen readers. */
  alt?: string;
};

export type Site = {
  name: string;
  statement: string;
  description: string;
  /** Your live domain. Used for social-share metadata. */
  url: string;
  backgroundImage: string;
  /** Exactly three. */
  imageLinks: [ImageLink, ImageLink, ImageLink];
  /** Exactly two. Full watch URL, youtu.be link, or the 11-character video ID. */
  youtube: [string, string];
  socials: {
    instagram: string;
    twitter: string;
    youtube: string;
    appleMusic: string;
    spotify: string;
  };
  newsletter: {
    /** Leave empty until a provider is connected. See lib/subscribe.ts. */
    endpoint: string;
  };
};

export const BACKGROUND_IMAGE_URL = "/images/background.jpg";

export const site: Site = {
  name: "KARSH",
  statement: "It’s a Karsh World.",
  description: "KARSH. It’s a Karsh World.",
  url: "https://karsh.example",

  backgroundImage: BACKGROUND_IMAGE_URL,

  imageLinks: [
    {
      image: "/images/link-1.jpg",
      href: "https://www.instagram.com/p/REPLACE_ME_1/",
      alt: "Image 1",
    },
    {
      image: "/images/link-2.jpg",
      href: "https://www.instagram.com/p/REPLACE_ME_2/",
      alt: "Image 2",
    },
    {
      image: "/images/link-3.jpg",
      href: "https://www.instagram.com/p/REPLACE_ME_3/",
      alt: "Image 3",
    },
  ],

  youtube: [
    "https://youtu.be/0jCuoZEDyWA?si=A1HFyqYTwpeBAvJ6",
    "https://youtu.be/981iCRn0reI?si=hxqNE4XWmOCwjnOdE",
  ],

  socials: {
    instagram: "https://www.instagram.com/thisiskarsh",
    X : "https://x.com/realkarsh",
    youtube: "https://www.youtube.com/channel/UCzudK-pViwmXgo6UpklnpPA",
    appleMusic: "https://music.apple.com/ca/artist/karsh/1731261159",
    spotify: "https://open.spotify.com/artist/3fidvDtvX2WuhSI8l29LQ1?si=iu5a-hdeSaG0oYCi-Muudw",
  },

  newsletter: {
    endpoint: "",
  },
};
