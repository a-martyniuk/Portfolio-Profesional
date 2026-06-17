import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { PostHogProvider } from "@/components/providers/posthog-provider";
import PostHogPageView from "@/components/providers/posthog-pageview";
import { Analytics } from "@vercel/analytics/next";
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
  title: "Alexis Martyniuk | Senior Data Engineer & Data Architect",
  description: "Senior Data Engineer y Arquitecto de Datos especializado en pipelines de datos (ETL/ELT), Microsoft Fabric, Snowflake, Azure y AWS. +8 años construyendo plataformas de datos de misión crítica en Argentina.",
  keywords: [
    "Senior Data Engineer Argentina",
    "Data Engineer Portfolio",
    "ETL Specialist",
    "Oracle ODI Expert",
    "Microsoft Fabric OneLake",
    "Snowflake Data Warehouse",
    "Azure Data Architecture",
    "Python PySpark ETL",
    "Data Platform Engineer",
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
    title: 'Alexis Martyniuk | Senior Data Engineer & Data Architect',
    description: 'Senior Data Engineer y Arquitecto de Datos especializado en pipelines de datos, Microsoft Fabric, Snowflake y Azure. Portfolio de proyectos de datos enterprise.',
    siteName: 'Alexis Martyniuk Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Alexis Martyniuk - Senior Data Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alexis Martyniuk | Senior Data Engineer',
    description: 'Senior Data Engineer y Arquitecto de Datos especializado en pipelines de datos, Microsoft Fabric, Snowflake y Azure',
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
        className={`${inter.variable} ${outfit.variable} antialiased selection:bg-amber-500/30`}
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
