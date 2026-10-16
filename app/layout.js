import './globals.css'

export const metadata = {
  title: 'Dicor — Architecture, Interiors & Build',
  description: 'Dicor is an architecture and design studio shaping calm, considered environments.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
