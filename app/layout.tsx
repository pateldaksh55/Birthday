import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Happy Birthday Amu ji! 🌸",
  description: 'A birthday surprise from Daksh for Amu ji!',
  icons: {
    icon: [
      { url: '/icon.png' },
      { url: '/icon.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon.png', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  // Force light color scheme regardless of user system preference
  colorScheme: 'light',
  themeColor: [
    { color: '#fdf8ff' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // data-theme="light" + style ensures no dark mode is ever applied
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable}`}
      style={{ colorScheme: 'light', backgroundColor: '#fdf8ff' }}
    >
      <body
        className="font-sans antialiased"
        style={{ backgroundColor: '#fdf8ff', color: '#3d2b52', colorScheme: 'light' }}
      >
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}