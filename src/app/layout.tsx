import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://querymastery.vercel.app"),
  title: "QueryMastery | Master SQL & NoSQL Interactively",
  description: "The ultimate interactive playground for developers to learn and master SQL and NoSQL databases right inside the browser. No server required.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "QueryMastery | Master SQL & NoSQL Interactively",
    description: "The ultimate interactive playground for developers to learn and master SQL and NoSQL databases right inside the browser. No server required.",
    url: "https://querymastery.vercel.app",
    siteName: "QueryMastery",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "QueryMastery Cover Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: "vBOhE-VuhIiXVbQ0jiPyPPH6Cou-K6rHEa0-1a0np0w",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Ekhan thekei puro website er background control hobe */}
      <body suppressHydrationWarning
        className={`${inter.className} bg-[#f9fafb] text-gray-900 dark:bg-[#0a0a0a] dark:text-white transition-colors duration-300 min-h-screen`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
