import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LanguageProvider } from "@/components/providers/language-provider";
import { PostHogProvider } from "@/components/providers/posthog-provider";
import PostHogPageView from "@/components/providers/posthog-pageview";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { generatePersonSchema } from "@/lib/structured-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Alexis Martyniuk | Senior Data Engineer",
  description: "Senior Data Engineer especializado en pipelines de datos (ETL/ELT), Microsoft Fabric, Snowflake, Azure y AWS. +8 años construyendo plataformas de datos de misión crítica en Argentina.",
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
  metadataBase: new URL('https://www.alexismartyniuk.com.ar'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://www.alexismartyniuk.com.ar',
    title: 'Alexis Martyniuk | Senior Data Engineer',
    description: 'Senior Data Engineer especializado en pipelines de datos, Microsoft Fabric, Snowflake y Azure. Portfolio de proyectos de datos enterprise.',
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
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased selection:bg-cyan-500/25`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <PostHogProvider>
              <PostHogPageView />
              {children}
              <Analytics />
              <SpeedInsights />
            </PostHogProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
