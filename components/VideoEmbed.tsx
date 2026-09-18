"use client";

import Image from "next/image";
import { useState } from "react";

type Props = { id: string | null; title: string };

/**
 * Loads only a thumbnail until clicked. The YouTube player (heavy) is
 * fetched on demand, so the page stays light.
 */
export default function VideoEmbed({ id, title }: Props) {
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState<"maxresdefault" | "hqdefault" | null>("maxresdefault");

  if (!id) return <div className="film" />;

  return (
    <div className="film">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button type="button" className="film-poster" onClick={() => setPlaying(true)} aria-label={`Play ${title}`}>
          {thumb && (
            <Image
              src={`https://i.ytimg.com/vi/${id}/${thumb}.jpg`}
              alt=""
              fill
              sizes="(min-width: 800px) 75vw, 100vw"
              quality={80}
              loading="lazy"
              onError={() => setThumb((t) => (t === "maxresdefault" ? "hqdefault" : null))}
            />
          )}
          <span className="film-label">Play</span>
        </button>
      )}
    </div>
  );
}
