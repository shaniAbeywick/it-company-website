
import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from 'next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  
  title:"CDAZZDEV",
  description: "Unlock tomorrow's potential with CDAZZDEV's cutting-edge software solutions. Empowering innovation for a brighter future",
  applicationName: 'CDAZZDEV',
  keywords: [
    "CdazzDev",
    "software solutions",
    "cutting-edge technology",
    "web development",
    "mobile app development",
    "custom software development",
    "innovative solutions",
    "software company",
    "technology services",
    "digital transformation",
  ],
  authors: [{ name: 'Seb' }, { name: 'Josh', url: 'https://nextjs.org' }],
  creator: 'Jiachi Liu',
  publisher: 'Sebastian Markbåge',
  alternates: {
    canonical: 'https://cdazzdev.com',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title:"CDAZZDEV",
    description:"Unlock tomorrow's potential with CDAZZDEV's cutting-edge software solutions. Empowering innovation for a brighter future",
    url:"https://cdazzdev.com/",
    siteName:"CDAZZDEV",
    type:"website",

  },
  twitter: {
    title:"CDAZZDEV",
    description:"Unlock tomorrow's potential with CDAZZDEV's cutting-edge software solutions. Empowering innovation for a brighter future",
    site:"CDAZZDEV",
    card:"summary_large_image",
    

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
