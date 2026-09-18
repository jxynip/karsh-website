import Link from "next/link";
import ImageLink from "@/components/ImageLink";
import VideoEmbed from "@/components/VideoEmbed";
import { site } from "@/content/site";
import { youtubeId } from "@/lib/youtube";

const IMAGE_SIZES = [
  "(min-width: 800px) 58vw, 100vw",
  "(min-width: 800px) 34vw, 72vw",
  "(min-width: 800px) 58vw, 100vw",
];

const socialLinks = [
  { label: "Instagram", href: site.socials.instagram },
  { label: "Twitter", href: site.socials.twitter },
  { label: "YouTube", href: site.socials.youtube },
  { label: "Apple Music", href: site.socials.appleMusic },
  { label: "Spotify", href: site.socials.spotify },
];

export default function Home() {
  return (
    <div className="page">
      <header className="masthead">
        <h1 className="wordmark">{site.name}</h1>
      </header>

      <main>
        <section className="plates">
          {site.imageLinks.map((link, i) => (
            <ImageLink key={i} {...link} index={i} sizes={IMAGE_SIZES[i]} priority={i === 0} />
          ))}
        </section>

        <section className="films">
          {site.youtube.map((url, i) => (
            <div key={i} className={`film-slot film-slot-${i + 1}`}>
              <VideoEmbed id={youtubeId(url)} title={`${site.name} video ${i + 1}`} />
            </div>
          ))}
        </section>

        <section className="statement">
          <p>{site.statement}</p>
        </section>
      </main>

      <footer className="footer">
        <nav aria-label="Elsewhere">
          <ul>
            {socialLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/signup" className="footer-signup">
          Sign me up
        </Link>
      </footer>
    </div>
  );
}
