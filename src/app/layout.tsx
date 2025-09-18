import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../../components/header";
import { ThemeProvider } from "next-themes";
/*
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/

export const metadata: Metadata = {
  
  title: {
    default:
      "Rensecurity — Cybersecurity news, techniques & insights",
    template: "%s — Rensecurity",
  },

  description:
    "Cybersecurity news and hands-on guides to keep you up to date with threats and trends—for your business or personal growth.",
  keywords: [
    "cybersecurity",
    "cybersecurity news",
    "security tutorials",
    "penetration testing",
    "red team",
    "blue team",
    "devsecops",
    "vulnerability management",
    "incident response",
    "threat intelligence",
    "ransomware",
    "zero trust"
  ],
  openGraph: {
    type: "website",
    siteName: "Rensecurity",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@rensecurity",   // optional: your handle
    creator: "@rensecurity",// optional
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
      
        <Header />        {/* 👈 now on ALL routes */}
        <main>{children}</main>
        
      </body>
    </html>
  );
}


