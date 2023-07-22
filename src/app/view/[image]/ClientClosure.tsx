"use client"
import { InstagramEmbed } from "react-social-media-embed"
import { motion } from 'framer-motion'

export default function ClientClosure({ imageUrl }: {imageUrl: string}) {
    return(
        <motion.div
            key="view"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ease: 'linear', duration: 0.3}}
            className="px-5 flex-col w-full mx-auto my-32 max-w-4xl"
        >
            <InstagramEmbed url={imageUrl} />
        </motion.div>
    )
}