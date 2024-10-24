import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Convo Doc",
  description: "Chat with any PDF document for free",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(`${geistSans.variable} ${geistMono.variable} ${inter} min-h-screen antialiased max-w-[1920px] bg-[#EAEEFE]`)}
      >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
