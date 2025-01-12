'use client'

import {cn} from "@/lib/utils";
import Link from "next/link";
import {useContext} from "react";
import {ScrollContext} from "@/lib/scroll-context";
import {ProgressContext} from "@/lib/progress-context";
import {motion as m} from "framer-motion";

export default function Header() {
  const { progress } = useContext(ProgressContext);
  const { scrolled } = useContext(ScrollContext)

  return (
    <header className={cn("p-6 md:px-20 gap-12 border-stone-800 md:py-8 w-full flex justify-between items-center", scrolled && "border-b")}>
      <Brand
        full="Gede Apriana"
        short="GA"
        className="text-primary-foreground hover:text-muted-foreground duration-300 md:text-lg font-bold cursor-pointer"
      />
      <div className="flex-1 h-[1px] overflow-hidden bg-stone-800">
        <m.div animate={{ width: `${progress * 100}%` }} className="bg-muted-foreground h-[1px]"></m.div>
      </div>
      <Nav />
    </header>
  )
}

export const Brand = ({ full, short, className }: {full: string; short: string; className?: string}) => {
  return (
    <>
      <h1 className={cn("hidden md:inline", className)}>{full}</h1>
      <h1 className={cn("md:hidden", className)}>{short}</h1>
    </>
  )
}

const Nav = () => {
  const items = [
    {name: "About", path: "#__about", className: "hidden md:inline" },
    {name: "Work", path: "#__work", className: "hidden md:inline" },
    {name: "Contact", path: "#__contact", className: ""},
  ]
  return (
    <main className="flex justify-center items-center gap-12">
      {items.map((item, index) => {
        return (
          <Link key={index} className={cn("text-primary-foreground hover:text-muted-foreground duration-300", item.className)} href={item.path}>
            {item.name}
          </Link>
        )
      })}
    </main>
  )
}