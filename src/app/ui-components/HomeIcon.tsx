"use client"
import { usePathname, useRouter } from "next/navigation"
import ClientTypeAnimation from "../utils/ClientTypeAnimation"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context"


export default function HomeIcon() {
    const pathname: string = usePathname()
    const router: AppRouterInstance = useRouter()
    const back: () => React.ReactNode = () => <ClientTypeAnimation sequence={["< back"]} />
    
    const homeRoutes = ['/', '/content']

    const goBack = () => {
        if (!homeRoutes.includes(pathname)) router.push('/content')
        else scrollTo({top: 0})
    }

    return (
        <div className="mix-blend-difference fixed top-0 hover:bg-white hover:text-black cursor-pointer text-3xl p-2 text-gray-200 font-display" onClick={goBack}>{homeRoutes.includes(pathname) ? "ts." : back()}</div>
    )
}