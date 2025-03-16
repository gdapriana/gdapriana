'use client'
import { motion, useAnimate } from 'motion/react'
import { useEffect, useState } from 'react'
import { cn } from '@/utilities/ui'
import { ArrowRight, MoonStar, Sun } from 'lucide-react'
import { useTheme } from '@/providers/Theme'
import Link from 'next/link'

const Sidebar = ({ nav }: { nav: { name: string; path: string }[] }) => {
  const [activeNavIndex, setActiveNavIndex] = useState<number>()
  const { setTheme, theme } = useTheme()
  const [scope, animate] = useAnimate()

  // async function underlineAnimation() {
  //   await animate(
  //     scope.current,
  //     {
  //       width: ['100%', 0],
  //     },
  //     { delay: 1, duration: 1, ease: 'anticipate' },
  //   )
  //   await animate(scope.current, {
  //     height: ['2px', 0],
  //   })
  // }

  // useEffect(() => {
  //   underlineAnimation().then()
  // }, [underlineAnimation])

  return (
    <aside className="flex gap-16 flex-col justify-start items-start">
      {/*brand*/}
      <Link href="/" className="flex gap-4 flex-col justify-start items-start">
        <div className="flex py-2 relative gap-2 overflow-hidden justify-start items-start">
          <motion.img
            initial={{ y: '200%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: 'circOut' }}
            className="w-6"
            src="/G.png"
            alt="logo"
          />
          <motion.img
            initial={{ y: '200%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: 'circOut', delay: 0.1 }}
            className="w-6"
            src="/A.png"
            alt="logo"
          />
          {/* <motion.div
            initial={{ y: '200%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: 'circOut', delay: 0.1 }}
            className="overflow-hidden h-6 flex flex-col justify-start items-center"
          >
            <motion.div
              onClick={() => setTheme('dark')}
              initial={{ y: 0 }}
              animate={theme === 'light' ? { y: 0 } : { y: '-100%' }}
              transition={{ duration: 1, ease: 'anticipate' }}
              className=""
            >
              <Sun className="h-6 dark:text-white" />
            </motion.div>
            <motion.div
              onClick={() => setTheme('light')}
              initial={{ y: 0 }}
              animate={theme === 'light' ? { y: 0 } : { y: '-100%' }}
              transition={{ duration: 1, ease: 'anticipate' }}
              className=""
            >
              <MoonStar className="h-6 dark:text-white" />
            </motion.div>
          </motion.div>
          <motion.div ref={scope} className="absolute bottom-0 bg-primary w-full h-[2px]" /> */}
        </div>
        <div className="flex flex-col justify-start items-start gap-1">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: 'circOut', delay: 0.4 }}
              className="font-bold"
            >
              gedeapriana
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: 'circOut', delay: 0.6 }}
              className="text-muted-foreground text-sm"
            >
              Fullstack and Machine Learning Developer
            </motion.p>
          </div>
        </div>
      </Link>

      {/*navigation*/}
      <div className="flex flex-col justify-start items-start gap-2">
        {nav.map((item: { name: string; path: string }, index: number) => {
          return (
            <motion.div
              key={index}
              animate={index === activeNavIndex ? { padding: '0.5rem 1rem' } : { padding: '0' }}
              onMouseEnter={() => setActiveNavIndex(index)}
              onMouseLeave={() => setActiveNavIndex(undefined)}
              className={'overflow-hidden relative'}
            >
              <Link
                href={item.path}
                className={cn('z-[10]', index === activeNavIndex && 'text-primary-foreground')}
              >
                <motion.p
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: 'circOut', delay: 0.2 * index }}
                  className="text-sm flex justify-center items-center gap-1"
                >
                  {item.name}
                  <motion.span
                    animate={index === activeNavIndex ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: 'anticipate' }}
                  >
                    <ArrowRight className="w-4" />
                  </motion.span>
                </motion.p>
              </Link>
              <motion.div
                animate={index === activeNavIndex ? { height: '100%' } : { height: 0 }}
                style={{ zIndex: -1 }}
                className="absolute bg-primary bottom-0 left-0 w-full"
              />
            </motion.div>
          )
        })}
      </div>

      {/* contact */}
      <a href="" className="py-[0.6rem] bg-primary text-primary-foreground px-[1rem]">
        Contact me
      </a>
    </aside>
  )
}

export default Sidebar
