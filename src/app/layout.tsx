import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paw & Whisker – Everyday Pet Accessories",
  description:
    "Thoughtful pet accessories for walks, play, mealtime, and cozy naps. Shop everyday essentials for dogs and cats at Paw & Whisker.",
  keywords: [
    "pet accessories",
    "dog accessories",
    "cat accessories",
    "pet toys",
    "pet beds",
  ],
  authors: [{ name: "Karyz" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${dmSans.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[var(--bg)] text-[var(--ink)] font-sans transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
