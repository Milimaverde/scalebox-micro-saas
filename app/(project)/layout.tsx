import type { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'ScaleBox - Micro SaaS',
  description: 'ScaleBox é um micro SaaS'
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} bg-midnight antialiased p-4`}>
        {children}
      </body>
    </html>
  )
}
