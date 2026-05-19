import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? `https://${process.env.NEXT_PUBLIC_SITE_URL.replace(/^https?:\/\//, "")}`
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Skerdi | Full-Stack Developer",
    template: "%s | Skerdi",
  },
  description:
    "Full-stack developer building clean web products, dashboards, and AI workflows with strong UI, auth, data, and real product logic.",
  keywords: [
    "Skerdi",
    "Full-stack developer",
    "Next.js developer",
    "React developer",
    "Product MVPs",
    "AI workflows",
    "dashboards",
    "web applications",
  ],
  authors: [{ name: "Skerdi" }],
  creator: "Skerdi",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Skerdi | Full-Stack Developer",
    description:
      "Clean full-stack web products, dashboards, and AI workflows built with real product logic.",
    url: "/",
    siteName: "Skerdi Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Skerdi - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skerdi | Full-Stack Developer",
    description:
      "Clean full-stack web products, dashboards, and AI workflows built with real product logic.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/profile.svg?v=2",
    shortcut: "/profile.svg?v=2",
    apple: "/profile.svg?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/profile.svg?v=2" type="image/svg+xml" />
        <link rel="shortcut icon" href="/profile.svg?v=2" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
