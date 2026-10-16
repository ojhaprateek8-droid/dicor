export const metadata = {
  title: 'Dicor',
  description: 'Dicor website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
