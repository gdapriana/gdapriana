'use client'

import {useRef} from "react";
import {motion as m, useScroll, useTransform} from "framer-motion";

export default function Service() {
  const scrollSectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollSectionRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <main className="flex flex-col justify-center items-stretch">
      <header className="flex md:px-20 md:py-20 p-8 gap-8 justify-start items-center">
        <h1 className="font-bold text-4xl text-primary-foreground">Services and Capabilities</h1>
        <div className="h-[1px] flex-1 bg-stone-800"></div>
      </header>

      <section ref={scrollSectionRef} className="relative h-[300vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <m.div style={{x}} className="flex gap-4">
            <div className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"></div>
            <div className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"></div>
            <div className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"></div>
            <div className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"></div>
            <div className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"></div>
            <div className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"></div>
            <div className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"></div>
            <div className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"></div>
          </m.div>
        </div>
      </section>
    </main>
  )
}