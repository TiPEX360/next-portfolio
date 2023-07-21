import Image from 'next/image'
import ClientTypeAnimation from './utils/ClientTypeAnimation'
import OnScroll from './utils/OnScroll'
import dynamic, { LoaderComponent } from 'next/dynamic'
import { Nixie_One } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'
import Intro from './ui-components/Loading'


export default function Home({ children }: {children: React.ReactNode}) {
    return (
        <Intro />
    )
}
