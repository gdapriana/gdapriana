'use client'

import {ReactNode, useEffect} from "react";
import Header from "@/app/(root)/_components/header";
import Lenis from "lenis";

export default function Layout({children}: { children: ReactNode }) {

  useEffect(() => {
    const lenis = new Lenis()
    const raf = (time: any) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf);
  }, [])

  return (
    <main className="h-screen bg-primary w-full flex justify-center items-center flex-col">
      <Header />
      <div onScrollCapture={(e: any) => console.log(e.target.scrollTop)} className="grow w-full basis-0 overflow-auto">
        {children}
      </div>
    </main>
  )
}