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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#FAFAFA] text-slate-900 selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
