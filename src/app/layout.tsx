import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  description: "Portfolio built with Next.js, TypeScript, and Tailwind CSS.",
  openGraph: {
  title: "Felix Frimpong — Full-Stack Engineer",
  description:
    "I'm Felix Frimpong, a Full-Stack Engineer passionate about building scalable web applications with Next.js, TypeScript, and Node.js. Explore my portfolio to see my latest projects and technical work.",
  url: "https://felixfrimpong.vercel.app",
  siteName: "Felix Frimpong Portfolio",
  images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Felix Frimpong Portfolio Preview",
    },
  ],
  locale: "en_US",
  type: "website",
},

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
