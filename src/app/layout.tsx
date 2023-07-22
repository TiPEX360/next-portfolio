import './globals.css'
import type { Metadata } from 'next'
import { fontNixieOne, fontMajorMonoDisplay } from "./utils/fonts"
import FramerTransition from './utils/FramerTransition'
import HomeIcon from './ui-components/HomeIcon'

export const metadata: Metadata = {
  title: "Tymoteusz Suszczynski",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${fontNixieOne.variable} ${fontMajorMonoDisplay.variable} scroll-smooth`} lang="en">
      <body className="font-body scroll-smooth overlow-x-clip">
            <HomeIcon />
            <FramerTransition>
                {children}
            </FramerTransition>
      </body>
    </html>
  )
}
