import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skerdi | Full-stack Developer",
  description:
    "Full-stack developer building clean web products with clear UI, auth, data, and real product flow.",
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
