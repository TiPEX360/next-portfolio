"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import AnimatedLetter from '../../app/ui-components/interactive-letters/AnimatedLetter'
import portrait from '../../../public/assets/images/silhouette.png'
import Image from "next/image"
import { useEffect, useRef } from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
  const portraitRef: React.Ref<HTMLImageElement | null> = useRef(null)
  
  useEffect(() => {
    const onFrame = () => {
      if (portraitRef.current != undefined) {
        portraitRef.current.style.transform = "translateY(" + window.scrollY / 4 + "px)"
      }
      window.requestAnimationFrame(onFrame)
    }

  window.requestAnimationFrame(onFrame)
  }, [])

  return (
    <motion.div
      key="content"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{ease: 'linear', duration: 0.250}}
    >
      <div className="h-screen flex flex-col justify-center place-items-center">
        <Image ref={portraitRef} id="portrait" src={portrait} alt="portrait" className="mix-blend-screen w-1/2 max-w-md min-w-[300px]"/>
        <p className="font-display text-xl">hi, i&apos;m</p>
        <div className="flex z-10 mt-10 mb-5 font-display w-full justify-center items-center">
                    <AnimatedLetter letter='t'/>
                    <AnimatedLetter letter='y'/>
                    <AnimatedLetter letter='m'/>
                    <AnimatedLetter letter="o"/>
                    <AnimatedLetter letter='t'/>
                    <AnimatedLetter letter='e'/>
                    <AnimatedLetter letter='u'/>
                    <AnimatedLetter letter='s'/>
                    <AnimatedLetter letter='z'/> 
        </div>
        <p className="font-display text-sm ">{"(tym, for short)"}</p>
        <Link onClick={() => document.getElementById("main")?.scrollIntoView({behavior: "smooth"})} href="/home/content" scroll={false}>
          <div className="w-[170px] text-center my-12 font-display text-sm border-solid border-4 hover:bg-slate-200 hover:text-black transition-colors duration-100 cursor-pointer p-1">
            let me tell you a bit about myself!
          </div>
        </Link>
      </div>
      <div id="main">
        {children}
      </div>
    </motion.div>
  )
}