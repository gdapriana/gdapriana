import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import React from 'react'
import { DM_Sans } from "next/font/google"

// import { AdminBar } from '@/components/AdminBar'
// import { Footer } from '@/Footer/Component'
// import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
// import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
// import { draftMode } from 'next/headers'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'
import { InitTheme } from '@/providers/Theme/InitTheme'

const dmsans = DM_Sans({subsets: ['latin']});

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html className={cn(dmsans.className)} lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body className={cn('relative', dmsans.className)}>
      <Providers>
        {children}
      </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
