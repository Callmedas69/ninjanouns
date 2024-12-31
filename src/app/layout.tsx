import type { Metadata } from "next";
import NextAbstractWalletProvider from "../components/NextAbstractWalletProvider";
import "./globals.css";
import { Silkscreen } from "next/font/google";
import Header from "@/components/Header";
import AbstractLink from "@/components/AbstractLink";

// Pixel Font
const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-silkscreen",
});

export const metadata: Metadata = {
  title: "N1NJ4 NOUNS",
  description:
    "Kaku-shi, a square-shaped ninja warrior in the Pixeru-verse, is known for his unique `Pixel-jutsu` fighting style based on right-angled movements. When the Namakura-dan, a gang of curved-edge bandits led by Smooth-sama, attempts to steal the sacred Genesis Pixeru from the temple, Kaku-shi confronts them. Despite mockery of his blocky form, he defeats the bandits using his `Eight-Bit Style: Infinite Pixel Flash` technique, transforming them into perfect blocks. His victory establishes the superiority of pixel-based martial arts, and he passes on his wisdom that `The Way is Square.`",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${silkscreen.className} antialiased`}>
        <NextAbstractWalletProvider>
          <div className="min-h-screen pb-28">
            <Header />
            {children}
          </div>
          {/* FOOTER */}
          <div className="fixed bottom-0 w-full">
            <AbstractLink />
          </div>
        </NextAbstractWalletProvider>
      </body>
    </html>
  );
}
