'use client'

import {ReactNode, useContext, useEffect, useRef} from "react";
import Header from "@/app/(root)/_components/header";
import {ScrollContext} from "@/lib/scroll-context";
import {useMotionValueEvent, useScroll, useSpring} from "framer-motion";
import {ProgressContext} from "@/lib/progress-context";

export default function Layout({children}: { children: ReactNode }) {
  const homeRef = useRef(null)
  const { setScrolled } = useContext(ScrollContext)
  const { setProgress } = useContext(ProgressContext)

  const { scrollYProgress }: { scrollYProgress: any } = useScroll({ container: homeRef })
  const scaleX: any = useSpring(scrollYProgress)
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    setProgress(scaleX.current);
  })

  return (
    <main className="h-screen bg-primary w-full flex justify-center items-center flex-col">
      <Header />
      <div ref={homeRef} onScrollCapture={(e: any) => {
        if (e.target.scrollTop > 0) setScrolled(true)
        else setScrolled(false)
      }} className="grow w-full basis-0 overflow-auto">
        {children}
      </div>
    </main>
  )
}