import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Html, Head, Main, NextScript } from 'next/document'
import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  function openNav(): void {
    throw new Error('Function not implemented.')
  }

  return (
    <html lang="en">
      {/* <Nav openNav={openNav}/> */}
      <body className={inter.className}>{children}</body>
        
    </html>
  )
}
