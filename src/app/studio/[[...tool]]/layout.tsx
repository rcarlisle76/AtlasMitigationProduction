export const metadata = {
  title: "Atlas Mitigation CMS",
  description: "Content management for Atlas Mitigation website",
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
