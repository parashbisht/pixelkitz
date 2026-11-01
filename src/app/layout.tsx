
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pixelkitz.vercel.app"),
  title: {
    template: "%s | PixelKitz",
    default: "PixelKitz - Free Online Image Compressor, Resizer & Converter",
  },
  description:
    "Compress, resize, and convert images online for free with PixelKitz. Fast, secure, private, and browser-based image tools. No uploads required.",
  keywords: [
    "PixelKitz",
    "free online image compressor",
    "image resizer",
    "image converter",
    "WebP to JPG",
    "PNG to JPG",
    "browser image tools",
    "private image optimization",
  ],
  authors: [{ name: "PixelKitz" }],
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "23Rz3lsgw6tZKtWTFhUGdEDi8d2pCQanTTaqpHhr6y0",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
