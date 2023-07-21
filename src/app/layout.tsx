import './globals.css'
import type { Metadata } from 'next'
import { fontNixieOne, fontMajorMonoDisplay } from "./utils/fonts"
import Link from "next/link"


export const metadata: Metadata = {
  title: "Tymoteusz Suszczynski",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html className={`${fontNixieOne.variable} ${fontMajorMonoDisplay.variable}`} lang="en">
      <body className="font-body scroll-smooth">{children}</body>
    </html>
  )
}
