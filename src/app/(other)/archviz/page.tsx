"use client"
import exterior from '../../../../public/assets/images/exterior.png'
import interior1 from '../../../../public/assets/images/interior1.png'
import interior2 from '../../../../public/assets/images/interior2.png'
import interior3 from '../../../../public/assets/images/interior3.png'
import exterior2 from '../../../../public/assets/images/exterior2.png'
import interior4 from '../../../../public/assets/images/interior4.png'
import bathroom1 from '../../../../public/assets/images/bathroom1.jpg'
import bathroom2 from '../../../../public/assets/images/bathroom2.jpg'

import type { StaticImageData } from 'next/image'
import Link from 'next/link'
import { motion, } from 'framer-motion'
import { useEffect } from 'react'

export default function Page() {
    useEffect(() => scrollTo({top: 0, behavior: "smooth"}), [])

    const images: Array<StaticImageData> = [exterior, exterior2, interior1, interior2, interior4, interior3, bathroom1, bathroom2]

    const elements = images.map<React.ReactNode>((image: StaticImageData) =>
        <a key={`${image.src}`} href={image.src}>
            <div style={{ backgroundImage: `url(${image.src})` }} className={"w-full h-screen bg-fixed bg-center bg-cover"} />
        </a>
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
            <div className="p-2 mix-blend-difference sticky top-3/4 font-display text-6xl">ARCHVIZ</div>
            {elements}
        </motion.div>
    )
}
