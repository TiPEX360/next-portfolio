"use client"
import { usePathname, useRouter } from "next/navigation"
import ClientTypeAnimation from "../utils/ClientTypeAnimation"


export default function HomeIcon() {
    const pathname = usePathname()
    const router = useRouter()
    const back = () => <ClientTypeAnimation sequence={["< back"]} />
    
    const goBack = () => {
        if (!pathname.includes('/home')) router.back()
        else scrollTo({top: 0})
    }

    return (
        <div className="mix-blend-difference fixed top-0 hover:bg-white hover:text-black cursor-pointer text-3xl p-2 text-gray-200 font-display" onClick={goBack}>{pathname.includes("/home") ? "ts." : back()}</div>
            
    )
}