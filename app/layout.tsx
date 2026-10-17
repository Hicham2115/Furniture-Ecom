import type { Metadata } from "next";
import "./globals.css";
import { CommerceShell } from "@/components/commerce-shell";
import { LenisProvider } from "@/components/lenis-provider";
import { MotionDirector } from "@/components/motion-director";

export const metadata: Metadata = {
  title: "MAISON — Furniture for living",
  description: "Explore curated furniture collections designed for everyday living.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-paper font-sans text-ink antialiased">
        <LenisProvider>
          <MotionDirector />
          {children}
        </LenisProvider>
        <CommerceShell />
      </body>
    </html>
  );
}
