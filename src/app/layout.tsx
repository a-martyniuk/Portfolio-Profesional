import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { PostHogProvider } from "@/components/providers/posthog-provider";
import PostHogPageView from "@/components/providers/posthog-pageview";
import { Analytics } from "@vercel/analytics/react";
import { generatePersonSchema } from "@/lib/structured-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alexis Martyniuk | Analytics Engineer & Data Architect Argentina",
  description: "Senior Analytics Engineer especializado en ETL, Oracle ODI, Snowflake, AWS y arquitectura de datos. 15+ años construyendo pipelines de datos de misión crítica en Argentina. Portfolio de proyectos enterprise.",
  keywords: [
    "Analytics Engineer Argentina",
    "ETL Specialist",
    "Data Engineer Portfolio",
    "Oracle ODI Expert",
    "Snowflake Data Warehouse",
    "AWS Data Architecture",
    "Python ETL",
    "Data Platform Engineer",
    "Business Intelligence",
    "Alexis Martyniuk"
  ],
  authors: [{ name: "Alexis Martyniuk" }],
  creator: "Alexis Martyniuk",
  publisher: "Alexis Martyniuk",
  metadataBase: new URL('https://alexismartyniuk.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://alexismartyniuk.com',
    title: 'Alexis Martyniuk | Analytics Engineer & Data Architect',
    description: 'Senior Analytics Engineer especializado en ETL, Oracle ODI, Snowflake y AWS. Portfolio de proyectos de datos enterprise en Argentina.',
    siteName: 'Alexis Martyniuk Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Alexis Martyniuk - Analytics Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alexis Martyniuk | Analytics Engineer',
    description: 'Senior Analytics Engineer especializado en ETL, Oracle ODI, Snowflake y AWS',
    images: ['/og-image.png'],
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
  const personSchema = generatePersonSchema();

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased selection:bg-indigo-500/30`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <PostHogProvider>
            <PostHogPageView />
            {children}
            <Analytics />
          </PostHogProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
