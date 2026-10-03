import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Karyz – B2B Commerce & Distribution Platform",
  description:
    "Launch your own branded B2B commerce platform to manage products, orders, inventory, and your distribution network.",
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
      className={`${outfit.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[var(--bg)] text-[var(--ink)] font-sans transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
