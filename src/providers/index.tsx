import React from 'react'

import { HeaderThemeProvider } from './HeaderTheme'
import { ThemeProvider } from './Theme'
import { HamburgerContentProvider } from '@/providers/hamburger-content'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <ThemeProvider>
      <HeaderThemeProvider>
        <HamburgerContentProvider>
          {children}
        </HamburgerContentProvider>
      </HeaderThemeProvider>
    </ThemeProvider>
  )
}
