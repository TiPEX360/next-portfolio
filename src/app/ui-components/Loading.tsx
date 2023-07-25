"use client"
import { Dispatch, SetStateAction, useState } from 'react'

export default function Intro() {
    const [loading, setLoading]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(true)

    setTimeout(() => setLoading(false), 2000)

    return(
        <>
            <div className={`fixed w-screen h-screen bg-slate-50 duration-1000 ease-out-expo transition-transform ${!loading && "-translate-y-full"} top-0`}></div>
        </>
    )
}