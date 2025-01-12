'use client'

import Link from "next/link";
import {ArrowRight} from "lucide-react";
import {
  motion as m,
  useInView
} from "framer-motion";
import {useContext, useRef} from "react";
import {ProgressContext} from "@/lib/progress-context";
import { about} from "@/lib/metadata";

export default function About() {

  const { progress } = useContext(ProgressContext)

  const imageRef = useRef(null)
  const imageInVew = useInView(imageRef)
  const text = about.text
  const splitedText = text.split(" ")
  const textRef = useRef(null)
  const textInView = useInView(textRef)

  return (
    <main id="__about" className="md:h-[60vh] py-12 gap-16 md:pl-20 pl-8 pr-8 md:pr-0 flex md:flex-row flex-col md:justify-between justify-start md:items-start items-stretch overflow-hidden">
      <div className="md:h-full gap-8 flex md:w-1/2 flex-col justify-between items-start">
        <h3 className="text-muted-foreground text-xl md:text-2xl font-semibold">
          {splitedText.map((word: string, index: number) => {
            return <m.span ref={textRef} transition={{delay: index * 0.05, duration: 1, ease: "circOut"}} animate={textInView ? {color: "hsl(var(--primary-foreground))"}: {color: ""}} key={index}>{word} </m.span>
          })}
        </h3>
        <Link className="flex border-b pb-4 justify-center items-center gap-2 hover:border-b border-stone-950 hover:border-stone-800 text-primary-foreground" href="#__contact">CONTACT ME <ArrowRight /></Link>
      </div>
      
      <div className="md:h-full">
        <m.img ref={imageRef} animate={imageInVew && {y: `${progress*400}px`}} className="grayscale md:h-full w-[200px] object-cover md:w-auto" src={about.photo_link} alt="profile" width={1080} height={1920} />
      </div>
    </main>
  )
}
