import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'priyankar',
  description: 'I do frontend development ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="https://github.com/priyankarpal.png" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
