import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jayesh - jxyxia.dev",
  description:
    "Computer Engineering student at University of Mumbai. Building web apps, exploring cloud infrastructure, and open to internship opportunities.",
  keywords: [
    "Jayesh",
    "jxyxia",
    "portfolio",
    "computer engineering",
    "Mumbai",
    "internship",
    "Next.js",
    "React",
    "cloud",
    "full stack developer",
  ],
  authors: [{ name: "Jayesh", url: "https://github.com/jxyxia" }],
  openGraph: {
    title: "Jayesh — jxyxia.dev",
    description:
      "Computer Engineering student building web apps and cloud infrastructure. Open to internship opportunities.",
    url: "https://jxyxia.dev",
    siteName: "jxyxia.dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayesh - jxyxia.dev",
    description:
      "Computer Engineering student building web apps and messing with AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
