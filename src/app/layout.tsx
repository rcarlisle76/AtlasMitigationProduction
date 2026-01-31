import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header, Footer, MobileCallButton } from "@/components/layout"
import { LocalBusinessSchema } from "@/components/seo"

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
    "24/7 emergency fire and water damage restoration in Acworth, Marietta, Kennesaw and metro Atlanta. Specializing in high-end homes and commercial properties. Call (404) 808-3677.",
  keywords: [
    "water damage restoration",
    "fire damage restoration",
    "mold remediation",
    "emergency restoration",
    "Acworth GA",
    "Marietta GA",
    "Kennesaw GA",
    "Atlanta restoration",
    "commercial restoration",
  ],
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
    // Add when available
    // google: "verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col antialiased font-sans">
        <LocalBusinessSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCallButton />
      </body>
    </html>
  )
}
