import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rigour-labs.dev"),
  title: {
    default: "Rigovo | AI Co-pilot for Technical Hiring & Code Verification",
    template: "%s | Rigovo",
  },
  description: "We build developer tools and SaaS products. Rigovo (formerly TalentLyt) is your AI co-pilot for technical hiring—handles screening while you focus on culture fit. Rigour CLI checks AI-generated code before production. Founded 2025, based in India.",
  keywords: [
    "Rigovo",
    "TalentLyt",
    "Rigour CLI",
    "AI interview co-pilot",
    "AI hiring assistant",
    "interview fraud detection",
    "remote hiring integrity",
    "AI code verification",
    "code quality tools",
    "AI coding assistant",
    "developer tools India",
    "npm code checker",
    "Maya AI interviewer",
    "candidate verification",
    "AI generated code checker",
    "code review automation",
    "static code analysis",
    "deepfake detection hiring",
    "proxy candidate detection",
    "MCP server",
    "Model Context Protocol",
    "GitHub App code review",
    "zero telemetry code analysis",
    "local code verification",
    "13-signal fraud detection",
    "technical interview integrity",
    "AI code quality gate"
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
    title: "Rigovo | Engineering Trust in AI-Native Software",
    description: "Secure your technical hiring with Rigovo (formerly TalentLyt). 13-signal fraud detection and AI-driven screening for verifiable engineering teams.",
    url: "https://rigour-labs.dev",
    siteName: "Rigovo",
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
    title: "Rigovo | AI Co-pilot for Technical Hiring",
    description: "Rigovo (formerly TalentLyt) ensures hiring integrity with 13-signal fraud detection. Built for high-growth engineering teams.",
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
    "description": "We build developer tools and SaaS products for code verification and hiring integrity. Our products are Rigovo (formerly TalentLyt) for interview integrity and Rigour CLI for AI code verification.",
    "foundingDate": "2025",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "founder": [
      {
        "@type": "Person",
        "name": "Ashutosh Singh",
        "jobTitle": "Founder",
        "sameAs": "https://www.linkedin.com/in/erashu212/"
      }
    ],
    "sameAs": [
      "https://github.com/rigour-labs",
      "https://www.npmjs.com/package/@rigour-labs/cli",
      "https://github.com/mcp?search=rigour",
      "https://github.com/apps/rigour-bot"
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
      "name": "Rigovo",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "description": "Your AI co-pilot for technical hiring. Rigovo (formerly TalentLyt) handles screening while you focus on culture fit. Beta: 6,800+ anomalies detected, 41% fraud flag rate across 82 interviews. 13-signal fraud detection catches deepfakes and proxy candidates.",
      "url": "https://rigovo.com",
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

  // WebSite schema for sitelinks search
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Rigour Labs",
    "url": "https://rigour-labs.dev",
    "description": "Developer tools and SaaS products for code verification and hiring integrity",
    "publisher": {
      "@type": "Organization",
      "name": "Rigour Labs"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://rigour-labs.dev/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // FAQ schema for common questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Rigour CLI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rigour CLI is an open-source command-line tool that checks AI-generated code before it goes to production. It runs 100% locally on your machine with zero telemetry—no code is sent anywhere."
        }
      },
      {
        "@type": "Question",
        "name": "What is Rigovo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rigovo (formerly TalentLyt) is your AI co-pilot for technical hiring. Maya AI handles screening while your team focuses on culture fit. Beta results: 6,800+ anomalies detected, 41% fraud flag rate across 82 interviews. 13-signal fraud detection catches deepfakes and proxy candidates in real-time."
        }
      },
      {
        "@type": "Question",
        "name": "Is Rigour CLI free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Rigour CLI is completely free and open-source under the MIT License. You can install it via npm: npm install -g @rigour-labs/cli"
        }
      },
      {
        "@type": "Question",
        "name": "Does Rigour CLI send my code to external servers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Rigour CLI has a zero-telemetry policy. All code analysis happens locally on your machine. Nothing is ever sent to external servers."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Rigour Labs based?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rigour Labs was founded in 2025 and is based in India."
        }
      }
    ]
  };

  // BreadcrumbList for navigation
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://rigour-labs.dev"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://rigour-labs.dev/#products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Team",
        "item": "https://rigour-labs.dev/#team"
      }
    ]
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="canonical" href="https://rigour-labs.dev" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
