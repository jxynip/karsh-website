import Image from "next/image";
import type { ImageLink as ImageLinkData } from "@/content/site";

type Props = ImageLinkData & {
  index: number;
  sizes: string;
  priority?: boolean;
};

export default function ImageLink({ image, href, alt, index, sizes, priority }: Props) {
  const external = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      className={`plate plate-${index + 1}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <Image
        src={image}
        alt={alt || `KARSH, image ${index + 1}`}
        fill
        sizes={sizes}
        quality={80}
        priority={priority}
      />
    </a>
  );
}
