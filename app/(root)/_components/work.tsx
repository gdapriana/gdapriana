'use client'

import {cn} from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {useRef} from "react";
import {useInView, motion as m, useTransform} from "framer-motion";

const works = [
  {name: "Clickbait Detector", year: "2024", repo: "https://github.com/gdapriana/clickbait-detector-frontend", image: "https://github.com/gdapriana/clickbait-detector-frontend/raw/main/public/web.png", tech: ["Machine Learning", "Tensorflow"], bg: "bg-[#0F0D0C]"},
  {name: "Kelayakan Pinjaman", year: "2024", repo: "https://github.com/gdapriana/kelayakan-pinjaman-frontend", image: "https://github.com/gdapriana/kelayakan-pinjaman-frontend/raw/main/public/web.png", tech: ["Fuzzy", "Python"], bg: "bg-[#141210]"},
  {name: "Housing Price Regression", year: "2024", repo: "https://github.com/gdapriana/housing-price-regression", image: "https://github.com/gdapriana/housing-price-regression/raw/main/sources/capture.png", tech: ["Machine Learning", "Scikit-learn"], bg: "bg-[#191614]"},
]

export default function Work() {

  const headerRef = useRef(null);
  const moreGithubRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: false });
  const isMoreGithubInView = useInView(moreGithubRef, { once: false });

  return (
    <main id="__work" className="relative">
      <div className={cn("sticky flex justify-center items-center p-6 md:px-20 md:py-8 top-0 md:h-[40vh] h-[20vh]", "bg-primary")}>
        <m.h1 animate={isHeaderInView ? {letterSpacing: "2rem"} : {letterSpacing: "0"}} transition={{ duration: 1, ease: "circOut", delay: 0.5 }} ref={headerRef} className="text-primary-foreground font-bold text-2xl md:text-4xl">WORKS</m.h1>
      </div>
      {works.map((work, index: number) => {
        return (
          <div key={index} className={cn("sticky gap-8 group flex justify-center items-start p-6 md:px-20 md:py-12 top-0 h-auto md:h-[40vh]", work.bg, '')}>
            <div className="flex-1 flex gap-4 flex-col justify-start items-stretch">
              <div className="flex justify-between items-center">
                <Link href={work.repo} className="text-primary-foreground text-xl md:text-2xl font-bold line-clamp-1">{work.name}</Link>
                <h1 className="text-muted-foreground hidden md:inline text-xl md:text-2xl font-bold">{work.year}</h1>
              </div>
              <div className="flex gap-4 flex-wrap justify-start items-center">
                {work.tech.map((tech, index: number) => {
                  return (
                    <div key={index} className="text-muted-foreground text-sm md:text-base py-2 px-4 border border-stone-800">{tech}</div>
                  )
                })}
                <div className="flex-1 h-[1px] bg-stone-800"></div>
              </div>
            </div>
            <Image src={work.image} alt="image" width={1920} height={1080} className="w-[400px] grayscale group-hover:grayscale-0 duration-300 hidden md:flex aspect-video object-cover"/>
            {works.length - 1 === index && (
              <m.a animate={isMoreGithubInView ? { width: "300px", opacity: 1 }: { width: "0", opacity: 0 }} transition={{ duration: 1, ease: "anticipate", delay: 1 }} ref={moreGithubRef} href="https://github.com/gdapriana" className="h-full flex justify-center items-center">
                <h1 className="md:text-base text-sm text-muted-foreground">MORE ON GITHUB</h1>
              </m.a>
            )}
          </div>
        )
      })}
      <div className="md:h-[40vh] h-[20vh]"></div>
    </main>
  )
}
