import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rigour-labs.dev"),
  title: {
    default: "Rigour Labs | Developer Tools & SaaS for Code Verification and Hiring Integrity",
    template: "%s | Rigour Labs",
  },
  description: "We build developer tools and SaaS products. TalentLyt verifies candidate identity in remote interviews. Rigour CLI checks AI-generated code before production. Founded 2025, based in India.",
  keywords: [
    "Rigour Labs",
    "TalentLyt",
    "Rigour CLI",
    "AI code verification",
    "interview fraud detection",
    "remote hiring integrity",
    "code quality tools",
    "AI coding assistant",
    "developer tools India",
    "npm code checker",
    "interview monitoring",
    "candidate verification"
  ],
  authors: [
    { name: "Ashutosh Singh", url: "https://www.linkedin.com/in/erashu212/" },
    { name: "Rigour Labs Team" }
  ],
  creator: "Rigour Labs",
  publisher: "Rigour Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Rigour Labs | Developer Tools for Code Verification & Hiring Integrity",
    description: "TalentLyt detects interview fraud. Rigour CLI verifies AI-generated code. Built by engineers in India.",
    url: "https://rigour-labs.dev",
    siteName: "Rigour Labs",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rigour Labs - Developer Tools & SaaS",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rigour Labs | Code Verification & Hiring Integrity Tools",
    description: "TalentLyt for interview integrity. Rigour CLI for AI code verification. Founded 2025.",
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
  alternates: {
    canonical: "https://rigour-labs.dev",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Rigour Labs",
    "legalName": "Rigour Labs",
    "url": "https://rigour-labs.dev",
    "logo": "https://rigour-labs.dev/logo.png",
    "description": "We build developer tools and SaaS products for code verification and hiring integrity. Our products are TalentLyt (interview integrity) and Rigour CLI (AI code verification).",
    "foundingDate": "2025",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "founder": {
      "@type": "Person",
      "name": "Ashutosh Singh",
      "jobTitle": "Founder & CEO",
      "sameAs": "https://www.linkedin.com/in/erashu212/"
    },
    "sameAs": [
      "https://github.com/rigour-labs",
      "https://www.npmjs.com/package/@rigour-labs/cli"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "admin@rigour-labs.dev",
      "contactType": "customer service"
    }
  };

  const softwareSchema = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "TalentLyt",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "description": "AI-powered interview integrity platform that helps companies verify candidate identity and behavior during remote technical interviews.",
      "url": "https://talentlyt.cloud",
      "author": {
        "@type": "Organization",
        "name": "Rigour Labs"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Beta access"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Rigour CLI",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Windows, macOS, Linux",
      "description": "Command-line tool that checks AI-generated code before production. Runs 100% locally with zero telemetry.",
      "url": "https://rigour.run",
      "downloadUrl": "https://www.npmjs.com/package/@rigour-labs/cli",
      "author": {
        "@type": "Organization",
        "name": "Rigour Labs"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free and open source"
      }
    }
  ];

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://rigour-labs.dev" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
