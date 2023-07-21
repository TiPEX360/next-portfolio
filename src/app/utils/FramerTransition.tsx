"use client"
import { motion, AnimatePresence } from 'framer-motion'

export default function FramerTransition({ children }: { children: React.ReactNode }) {
    return (
        <AnimatePresence initial={true} mode="popLayout">
            {children}
        </AnimatePresence>
    )
}