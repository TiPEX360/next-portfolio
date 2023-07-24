"use client"
import { useState, useRef, useEffect } from 'react';

export default function OnScroll({children} : {children: React.ReactNode}) {
    const [visible, setVisible] = useState(false)
    const ref: React.RefObject<HTMLDivElement> = useRef(null)

    const onScroll = () => {
        const rect = ref.current?.getBoundingClientRect()
        if(rect != undefined && rect.top <= window.innerHeight) {
            setVisible(true)
            cleanUp()
        }
    }

    const cleanUp = () => {
        window.removeEventListener("scroll", onScroll)
    }
  
    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        onScroll()
        return cleanUp
    }, [])
  
    const placeholder = <div ref={ref}>
                         
                        </div>

    if(!visible) return placeholder
    return children
  }