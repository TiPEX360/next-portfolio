import Image from 'next/image'
import React from 'react'
import { StaticImageData } from 'next/image'

export function GalleryImage({ src, alt }: {src: StaticImageData, alt?: string | undefined}) {
    return(
        <div className="cursor-pointer w-full aspect-square overflow-clip">
            <Image sizes="33vw" className="object-cover h-full w-full hover:scale-105 transition-transform duration-75" src={src} alt={alt ?? src.src}/>
        </div>
    )
}

export default function Gallery({ children }: {children: React.ReactNode}) {
    return(
        <div className="w-full gap-1 grid grid-cols-3">
            {children}
        </div>
    )
}