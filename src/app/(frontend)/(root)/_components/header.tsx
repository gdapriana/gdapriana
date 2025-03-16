'use client'

import { motion, useAnimate } from 'motion/react'
import { useContext, useEffect } from 'react'
import { HamburgerContentContext } from '@/providers/hamburger-content'
// import { useTheme } from '@/providers/Theme'
// import { Sun, MoonStar } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  const { setOpen } = useContext(HamburgerContentContext)
  // const { setTheme, theme } = useTheme()
  const [scope, animate] = useAnimate()

  async function underlineAnimation() {
    await animate(
      scope.current,
      {
        width: ['100%', 0],
      },
      { delay: 1, duration: 1, ease: 'anticipate' },
    )
    await animate(scope.current, {
      height: ['2px', 0],
    })
  }

  // useEffect(() => {
  //   underlineAnimation().then()
  // }, [])

  return (
    <motion.header
      transition={{ duration: 2, ease: 'anticipate', delay: 1 }}
      className="p-8 border-b flex justify-start relative flex-col items-stretch"
    >
      <div className="flex justify-between items-center">
        {/* brand */}
        <Link href="/" className="flex flex-col justify-start items-start">
          <div className="flex py-2 relative gap-2 overflow-hidden justify-start items-start">
            <motion.img
              initial={{ y: '200%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: 'circOut' }}
              className="h-6"
              src="/G.png"
              alt="logo"
            />
            <motion.img
              initial={{ y: '200%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: 'circOut', delay: 0.1 }}
              className="h-6"
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
            </motion.div> */}
            {/* <motion.div
              ref={scope}
              className="absolute bottom-0 bg-primary w-full h-[2px]"
            ></motion.div> */}
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
          </div>
        </Link>

        {/* hamburger */}
        <div
          onClick={() => setOpen(true)}
          className="w-10 aspect-[5/3] flex flex-col overflow-hidden justify-between items-end"
        >
          <motion.div
            animate={{ x: ['100%', 0] }}
            transition={{ ease: 'anticipate', duration: 1 }}
            className="h-1 bg-primary w-full"
          />
          <motion.div
            animate={{ x: ['100%', 0] }}
            transition={{ ease: 'anticipate', duration: 1, delay: 0.2 }}
            className="h-1 bg-primary w-3/4"
          />
          <motion.div
            animate={{ x: ['100%', 0] }}
            transition={{ ease: 'anticipate', duration: 1, delay: 0.4 }}
            className="h-1 bg-primary w-1/2"
          />
        </div>
      </div>
    </motion.header>
  )
}

export default Header
