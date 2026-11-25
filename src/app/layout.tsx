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
  title: "Lukman Fatkhurozi | Data Analyst & Business Intelligence Portfolio",
  description:
    "Portfolio of Lukman Fatkhurozi — Information Systems Student, BNSP Certified Database Administrator, Data Analyst, and Business Intelligence Enthusiast based in Jakarta Selatan.",
  keywords: [
    "Lukman Fatkhurozi",
    "Data Analyst",
    "Business Intelligence",
    "Database Administrator",
    "SQL",
    "Python",
    "Power BI",
    "Microsoft Excel",
    "Google BigQuery",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground selection:bg-amber-500 selection:text-zinc-950 transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
