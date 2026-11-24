import type { Metadata, Viewport } from 'next';
import { Inter, Outfit, Lora } from 'next/font/google';
import '@/src/styles/tokens.css';
import '@/src/styles/typography.css';
import '@/src/styles/glass.css';
import '@/src/styles/utilities.css';
import '@/src/styles/landing.css';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
  preload: true,
});

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  preload: true,
});

import { OrganizationJsonLd, WebSiteJsonLd, SiteNavigationJsonLd } from '@/components/seo/JsonLd';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#04111c' },
  ],
};

import { getSiteMetadataBase, getSiteUrl } from '@/lib/seo/siteUrl';

const APP_URL = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: getSiteMetadataBase(),
  title: {
    default: 'EDUNEXUS — Next-Gen Smart LMS & Global Multi-Tenant Learning Platform',
    template: '%s | EDUNEXUS Smart LMS',
  },
  description:
    'EDUNEXUS is an enterprise-grade multi-tenant smart learning management system featuring interactive virtual lab sandboxes, real-time assessment telemetry, and cryptographically verifiable credentials.',
  keywords: [
    'Smart LMS',
    'Multi-Tenant Learning Management System',
    'Interactive Virtual Labs',
    'Real-time Assessment Telemetry',
    'Online Learning Platform',
    'Verifiable Credentials',
    'EDUNEXUS Academic Platform',
    'Higher Education LMS',
    'EdTech Platform',
  ],
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'EDUNEXUS Engineering' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'EDUNEXUS — Next-Gen Smart LMS & Multi-Tenant Learning Platform',
    description:
      'Empowering universities and enterprise academies with virtual hands-on sandboxes, continuous evaluation telemetry, and cryptographically verifiable credentials.',
    siteName: 'EDUNEXUS',
    type: 'website',
    locale: 'en_US',
    url: APP_URL,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: 'EDUNEXUS — Next-Generation Smart Learning Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EDUNEXUS — Next-Gen Smart LMS & Learning Platform',
    description:
      'Empowering universities and enterprise academies with virtual hands-on sandboxes, continuous evaluation telemetry, and cryptographically verifiable credentials.',
    images: ['/images/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${lora.variable}`}>
      <head>
        {/* Google Fonts: Valley Sans, Lora Display & Editorial Typography */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Valley+Sans:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />

        {/* Favicons & Site Web Manifest for Googlebot & Mobile Viewports */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="48x48" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white text-black antialiased">
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <SiteNavigationJsonLd />
        {children}
      </body>
    </html>
  );
}
