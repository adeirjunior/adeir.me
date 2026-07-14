export const metadata = {
  title: 'Sanity Studio | Adeir.me',
  description: 'Content management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
