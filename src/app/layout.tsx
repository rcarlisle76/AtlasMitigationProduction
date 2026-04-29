import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Atlas Mitigation | Fire & Water Damage Restoration Acworth GA",
    template: "%s | Atlas Mitigation",
  },
  description:
    "24/7 emergency fire and water damage restoration in Acworth, Marietta, Kennesaw and metro Atlanta. Specializing in high-end homes and commercial properties. Call (770) 588-1119.",
  authors: [{ name: "Atlas Mitigation" }],
  creator: "Atlas Mitigation",
  publisher: "Atlas Mitigation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://atlasmitigation.com"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Atlas Mitigation | Fire & Water Damage Restoration",
    description:
      "24/7 emergency restoration services for high-end homes and commercial properties in metro Atlanta.",
    url: "/",
    siteName: "Atlas Mitigation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlas Mitigation | Fire & Water Damage Restoration",
    description:
      "24/7 emergency restoration services for high-end homes and commercial properties in metro Atlanta.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "m6nHTxh5A_rgXEkrEa3xnOXJbphjqje_xwjwaTEhvb8",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="flex min-h-screen flex-col antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
