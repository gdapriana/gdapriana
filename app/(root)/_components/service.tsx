'use client'

import {useRef} from "react";
import {motion as m, useMotionValueEvent, useScroll, useTransform} from "framer-motion";

export default function Service() {
  const scrollSectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollSectionRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  useMotionValueEvent(x, "change", (current) => {
    console.log(current)
  })

  return (
    <main className="flex flex-col w-full justify-center items-stretch">
      <header className="flex md:px-20 md:py-20 p-8 gap-8 justify-start items-center">
        <h1 className="font-bold text-4xl text-primary-foreground">Services and Capabilities</h1>
        <div className="h-[1px] flex-1 bg-stone-800"></div>
      </header>
    </main>
  )
}