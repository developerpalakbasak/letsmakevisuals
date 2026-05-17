import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import CustomCursor from '@/components/Effects/CustomCursor'

export const metadata: Metadata = {
  title: 'Letsmakevisuals',
  description: 'Premium Video Editing Agency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
