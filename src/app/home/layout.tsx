"use client"
import Link from "next/link"

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <div className="h-screen flex flex-col justify-center place-items-center gap-10">
        <p className="font-display text-base">hi, i'm</p>

        <Link onClick={() => document.getElementById("main")?.scrollIntoView({behavior: "smooth"})} href="/home/content" scroll={false}>
          <div className="w-44 text-center font-display text-sm border-solid border-4 hover:bg-slate-200 hover:text-black transition-colors duration-100 cursor-pointer p-1">
            let me tell you a bit about myself!
          </div>
        </Link>
      </div>
      <div id="main">
        {children}
      </div>
    </>
  )
}