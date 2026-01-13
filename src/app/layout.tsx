import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rigour-labs.dev"),
  title: "Rigour Labs | Engineering Future of Trust & Transparency",
  description: "Rigour Labs is the engineering powerhouse behind Rigour (OSS) and TalentLyt (SaaS). We build verifiable software and integrity-first systems for the next generation of technology.",
  keywords: ["Rigour Labs", "Hiring Integrity", "Open Source Security", "TalentLyt", "Verifiable Software", "AI Recruiting Security"],
  authors: [{ name: "Rigour Labs Team" }],
  openGraph: {
    title: "Rigour Labs | Engineering Future of Trust & Transparency",
    description: "The umbrella laboratory behind Rigour and TalentLyt. Building the infrastructure of trust.",
    url: "https://rigour-labs.dev",
    siteName: "Rigour Labs",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rigour Labs - Trust & Transparency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rigour Labs | Trust & Transparency",
    description: "The umbrella laboratory behind Rigour and TalentLyt.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Rigour Labs",
    "url": "https://rigour-labs.dev",
    "logo": "https://rigour-labs.dev/logo.png",
    "description": "Rigour Labs is an R&D laboratory building products that ensure integrity and transparency in software and hiring processes.",
    "sameAs": [
      "https://github.com/rigour-labs",
      "https://talentlyt.cloud",
      "https://rigour.run"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
