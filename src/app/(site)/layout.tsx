import { Header, Footer, MobileCallButton } from "@/components/layout"
import { LocalBusinessSchema } from "@/components/seo"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <LocalBusinessSchema />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileCallButton />
    </>
  )
}
