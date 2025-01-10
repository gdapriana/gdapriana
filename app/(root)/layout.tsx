'use client'

import {ReactNode} from "react";
import Header from "@/app/(root)/_components/header";

export default function Layout({children}: { children: ReactNode }) {

  return (
    <main className="h-screen bg-primary w-full flex justify-center items-center flex-col">
      <Header />
      <div onScrollCapture={(e: any) => console.log(e.target.scrollTop)} className="grow w-full basis-0 overflow-auto">
        {children}
      </div>
    </main>
  )
}