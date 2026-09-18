import type { Metadata, Viewport } from "next";
import Image from "next/image";
import { Inter, Special_Gothic_Expanded_One } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const display = Special_Gothic_Expanded_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.name,
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    siteName: site.name,
    type: "website",
    images: [site.backgroundImage],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [site.backgroundImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <div className="backdrop" aria-hidden="true">
          <Image src={site.backgroundImage} alt="" fill priority sizes="100vw" quality={70} />
        </div>
        {children}
      </body>
    </html>
  );
}
