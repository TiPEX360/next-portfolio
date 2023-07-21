"use client"
import { TypeAnimation } from "react-type-animation"
import type { GranularSpeed, Sequence, Wrapper, Speed } from 'react-type-animation/dist/cjs/components/TypeAnimation/index.types'

const stopCursorAnimation = () => {
    const els = document.getElementsByClassName("typewriter")
    for(let i = 0; i < els.length; i++) els[i].classList.remove("typewriter")
}

export default function ClientTypeAnimation({
    sequence,
    style,
    cursor,
    wrapper,
    repeat,
    speed,
    className
}:{
    sequence: Sequence,
    style?: React.CSSProperties | undefined,
    cursor?: boolean | undefined,
    wrapper?: Wrapper | undefined,
    repeat?: number | undefined,
    speed?: Speed | GranularSpeed | undefined,
    className?: string | undefined
}) {
    return (
        <TypeAnimation 
            style={style ?? {}}
            sequence={[...sequence, () => stopCursorAnimation()]}
            cursor={cursor ?? false}
            wrapper={wrapper ?? "span"}
            repeat={repeat ?? 0}
            speed=  {speed ?? {type: 'keyStrokeDelayInMs', value: 200}}
            className={className ?? "typewriter"} />
    )
}