'use client'

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {JetBrains_Mono} from "next/font/google";
import {cn} from "@/lib/utils";
import {useRef} from "react";
import { motion as m } from "framer-motion";

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], weight: ["300"] })

export default function Hero() {
  const text: string = "Fullstack and Machine Learning Developer"
  const splittedText = text.split(' ');

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: i * 0.3,
        ease: "circOut"
      },
    }),
  };

  const ref = useRef(null);

  return (
    <main className="h-[80vh] p-6 md:px-20 md:py-8 flex flex-col justify-between items-start">
      <m.div animate={{opacity: [0, 1]}} transition={{duration: 1, ease: "circOut", delay: 1}} className="flex justify-center items-center gap-8">
        <Avatar className="h-20 w-20 grayscale">
          <AvatarImage src="https://lh3.googleusercontent.com/a/ACg8ocJv5Hn06WMGJPugcK2tMm9XrIPDSopUrUBlaBrt5wPFiraarNDKmA=s576-c-no" />
          <AvatarFallback>GA</AvatarFallback>
        </Avatar>
        <p className={cn("text-muted-foreground text-sm max-w-96 w-full", jetBrainsMono.className)}>I Connect with creators and builders to design and develop Framer websites reaching goals and delivering the message</p>
      </m.div>

      <div className="flex w-full gap-10 flex-col justify-center items-stretch">
        <div className="flex gap-6 justify-start flex-wrap">
          {splittedText.map((current, i) => (
            <m.div
              key={i}
              ref={ref}
              variants={pullupVariant}
              initial="initial"
              animate="animate"
              custom={i}
              className={cn(
                'lg:text-[7rem] md:text-[5rem] text-[3rem] tracking-tighter lg:leading-[8rem] md:leading-[5rem] leading-[3rem] font-bold text-primary-foreground',
                current === "and" && "text-muted-foreground"
              )}
            >
              {current == '' ? <span>&nbsp;</span> : current}
            </m.div>
          ))}
        </div>

        <div className="flex md:justify-between md:flex-row flex-col items-stretch justify-start md:items-center gap-4">
          <h3 className="text-muted-foreground whitespace-nowrap">Gianyar, Bali</h3>
          <div className="w-full h-[1px] bg-stone-800"/>
          <h3 className="text-muted-foreground whitespace-nowrap">GMT 8+</h3>
          <div className="w-full h-[1px] bg-stone-800"/>
          <h3 className="text-muted-foreground whitespace-nowrap">AVAILABLE</h3>
        </div>
      </div>
    </main>
  )
}
