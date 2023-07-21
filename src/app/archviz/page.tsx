"use client"
import exterior from '../../../public/assets/images/exterior.png'
import interior1 from '../../../public/assets/images/interior1.png'
import interior2 from '../../../public/assets/images/interior2.png'
import interior3 from '../../../public/assets/images/interior3.png'
import interior4 from '../../../public/assets/images/interior4.png'
import type { StaticImageData } from 'next/image'
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Page() {
    const images: Array<StaticImageData> = [exterior, interior1, interior2, interior4, interior3]

    const elements = images.map<React.ReactNode>((image: StaticImageData) =>
        <div key={image.src} style={{ backgroundImage: `url(${image.src})` }} className={"w-full h-screen bg-fixed bg-center bg-cover"} />
    )

    return (
        <motion.div
            key="archviz"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ease: 'linear', duration: 0.5}}

            className="mb-[50vh]"
        >
            <div className="p-2 mix-blend-difference sticky top-3/4 font-display text-8xl">ARCHVIZ</div>
            {elements}
        </motion.div>
    )
}