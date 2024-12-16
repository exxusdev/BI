import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/src/lib/utils"

import { Sidebar } from "@/src/components/sidebar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "BI Project",
  description: "Generated BI Project Concept",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(`
          min-h-screen bg-background font-sans ${geistSans.variable} ${geistMono.variable} antialiased`)}
      >
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
