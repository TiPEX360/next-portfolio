"use client"
import './globals.css'
import type { Metadata } from 'next'
import { fontNixieOne, fontMajorMonoDisplay } from "./utils/fonts"
import Link from "next/link"


// export const metadata: Metadata = {
//   title: "Tymoteusz Suszczynski",
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html className={`${fontNixieOne.variable} ${fontMajorMonoDisplay.variable}`} lang="en">
      <body className="font-body">
        <div className="h-screen flex flex-col justify-center place-items-center gap-10">
          <p className="font-display text-base">hi, i'm</p>

          <Link onClick={() => setTimeout(() => document.getElementById("main")?.scrollIntoView({behavior: "smooth"}), 50)} href="/main" scroll={false}><div className="w-44 text-center font-display text-sm border-solid border-4 hover:bg-slate-200 hover:text-black transition-colors duration-100 cursor-pointer p-1">
            let me tell you a bit about myself!
          </div></Link>
        </div>
        <div id="main">
          {children}
        </div>
      </body>
    </html>
  )
}
