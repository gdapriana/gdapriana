'use client'

import Link from "next/link";
import {useRef} from "react";
import {useInView, motion as m} from "framer-motion";

const experiences = [
  {as: "Machine Learning Cohort", company: "Bangkit Academy", year: "2023"},
  {as: "Fullstack Cohort", company: "Dicoding Indonesia", year: "2024"},
  {as: "Data Entry & Frontend Developer", company: "Jasa Web Creator", year: "2023"},
  {as: "It Consultan", company: "Lina Computer", year: "2020"},
]

export default function Experience() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: false });

  return (
    <main className="md:p-20 p-8 flex gap-20 flex-col justify-start items-stretch">
      <div className="overflow-hidden flex justify-start items-center">
        <m.h1 ref={headerRef} className="md:text-5xl py-12 text-2xl font-bold text-muted-foreground w-[80%]">
          I have <m.span animate={headerInView ? {color: "hsl(var(--primary-foreground))"} : {color: ""}} transition={{delay: 0.5, duration: 1, ease: "anticipate"}}>2 years of experience</m.span> running successful design practices together with startups and top brands.
        </m.h1>
      </div>

      <div className="flex flex-col-reverse gap-12 lg:flex-row justify-start items-stretch lg:justify-center lg:items-end">
        <div className="lg:w-1/3 w-full flex justify-center items-end gap-4">
          <Link className="py-4 px-7 w-full lg:w-auto md:py-6 md:px-10 border border-stone-800 text-primary-foreground" href="#">Download CV</Link>
          <Link className="py-4 px-7 w-full lg:w-auto md:py-6 md:px-10 border border-stone-800 text-primary-foreground" href="#">Connect Linkedin</Link>
        </div>
        <div className="lg:w-2/3 flex flex-col justify-start items-stretch">
          {experiences.map((experience, index: number) => {
            return (
              <div key={index} className="border-b gap-8 flex justify-between items-center py-8 border-stone-800">
                <h1 className="md:text-2xl text-xl text-primary-foreground font-bold">{experience.as}</h1>
                <h1 className="md:text-2xl ms-auto text-xl hidden lg:inline text-muted-foreground">{experience.company}</h1>
                <h1 className="md:text-2xl text-xl text-muted-foreground">{experience.year}</h1>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}