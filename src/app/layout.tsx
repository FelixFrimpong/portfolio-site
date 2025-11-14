import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Felix Frimpong — Full-Stack Engineer",
  description:
    "I'm Felix Frimpong, a Full-Stack Engineer passionate about building scalable web applications with Next.js, TypeScript, and Node.js. Explore my portfolio to see my latest projects and technical work.",
  openGraph: {
    title: "Felix Frimpong — Full-Stack Engineer",
    description:
      "I'm Felix Frimpong, a Full-Stack Engineer passionate about building scalable web applications with Next.js, TypeScript, and Node.js. Explore my portfolio to see my latest projects and technical work.",
    url: "https://felixfrimpong.vercel.app",
    siteName: "Felix Frimpong Portfolio",
    images: [
      {
        url: "https://felixfrimpong.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Felix Frimpong — Full-Stack Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "article",
    authors: ["https://www.linkedin.com/in/felix-frimpong"],
    publishedTime: "2025-11-12T00:00:00Z",
  },
  other: {
    "og:image": "https://felixfrimpong.vercel.app/og-image.png",
    "article:author": "https://www.linkedin.com/in/felix-frimpong",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <title>Felix Frimpong — Full-Stack Engineer</title>
        <meta
          name="description"
          content="I'm Felix Frimpong, a Full-Stack Engineer passionate about building scalable web applications with Next.js, TypeScript, and Node.js. Explore my portfolio to see my latest projects and technical work."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Felix Frimpong — Full-Stack Engineer" />
        <meta
          property="og:description"
          content="I'm Felix Frimpong, a Full-Stack Engineer passionate about building scalable web applications with Next.js, TypeScript, and Node.js. Explore my portfolio to see my latest projects and technical work."
        />
        <meta property="og:url" content="https://felixfrimpong.vercel.app" />
        <meta property="og:site_name" content="Felix Frimpong Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* OG Image */}
        <meta
          name="image" 
          property="og:image"
          content="https://felixfrimpong.vercel.app/og-image.png?v=2"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Felix Frimpong — Full-Stack Engineer Portfolio"
        />

        {/* Article Author */}
        <meta
          name="author"
          property="article:author"
          content="https://www.linkedin.com/in/felix-frimpong"
        />
        <meta property="article:published_time" content="2025-11-12T00:00:00Z" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Felix Frimpong — Full-Stack Engineer" />
        <meta
          name="twitter:description"
          content="I'm Felix Frimpong, a Full-Stack Engineer passionate about building scalable web applications with Next.js, TypeScript, and Node.js. Explore my portfolio to see my latest projects and technical work."
        />
        <meta
          name="twitter:image"
          content="https://felixfrimpong.vercel.app/og-image.png"
        />
      </Head>
     <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
  <nav style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
    <Link href="/" style={{ marginRight: "1rem" }}>Home</Link>
    <Link href="/projects" style={{ marginRight: "1rem" }}>Projects</Link>
    <Link href="/about" style={{ marginRight: "1rem" }}>About</Link>
    <Link href="/contact">Contact</Link>
  </nav>
  {children}
</body>


    </html>
  );
}
