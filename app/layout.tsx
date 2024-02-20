
import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from 'next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "cdazzdev",
    template: "%s | cdazzdev"
  },
  description: "Unlock tomorrow's potential with cdazzdev's cutting-edge software solutions. Empowering innovation for a brighter future",
  applicationName: 'cdazzdev.com',
  keywords: [
    "cdazzdev",
    "solutions",
    "development services",
    "app development",
    "mobile app development",
    "custom software development",
    "business",
    "services",
    "app",
    "development",
    "web app development",
  ],
  authors: { name: 'cdazzdev' },
  creator: 'Shani Abeywickrama',
  alternates: {
    canonical: 'https://cdazzdev.com',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: "cdazzdev.com",
    description: "Unlock tomorrow's potential with cdazzdev's cutting-edge software solutions. Empowering innovation for a brighter future",
    url: "https://cdazzdev.com/",
    siteName: "cdazzdev.com",
    type: "website",

  },
  twitter: {
    title: "cdazzdev.com",
    description: "Unlock tomorrow's potential with cdazzdev's cutting-edge software solutions. Empowering innovation for a brighter future",
    site: "cdazzdev.com",
    card: "summary_large_image",


  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
