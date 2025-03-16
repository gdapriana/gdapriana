'use client'
import ReactLenis from 'lenis/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { Post } from '@/payload-types'
import moment from 'moment'

export const BlogsRoot = ({ blogs }: { blogs: Post[] }) => {
  const [blogsSplit, setBlogSplit] = useState<[Post[], Post[]]>()
  const [activeHoverSlug, setActiveHoverSlug] = useState<string | null | undefined>(blogs[0]?.slug)

  useEffect(() => {
    const evenBlogs: Post[] = []
    const oddBlogs: Post[] = []
    for (const [index, blog] of blogs.entries()) {
      if (index % 2 === 0) evenBlogs.push(blog)
      else oddBlogs.push(blog)
    }
    setBlogSplit([evenBlogs, oddBlogs])
  }, [blogs])

  return (
    <ReactLenis className="h-full w-full overflow-auto pt-[4rem] flex flex-col justify-start items-stretch">
      <div className="w-full hidden pb-12 gap-6 md:flex">
        {blogsSplit?.map((side: Post[], index: number) => {
          return (
            <div className="w-1/2 gap-6 flex flex-col justify-start items-stretch" key={index}>
              {side.map((blog: Post, index: number) => {
                return (
                  <div
                    onMouseEnter={() => setActiveHoverSlug(blog.slug)}
                    className="flex gap-2 overflow-hidden group flex-col justify-start items-start"
                    key={index}
                  >
                    <div className="relative w-full overflow-hidden">
                      <motion.div
                        animate={{ y: [0, '100%'] }}
                        transition={{ duration: 1, ease: [0.55, 0, 0, 1.01], delay: 0.4 * index }}
                        className="absolute top-0 left-0 w-full h-full bg-white dark:bg-primary-foreground"
                      ></motion.div>
                      <Image
                        src={
                          typeof blog.heroImage === 'string'
                            ? blog.heroImage
                            : (blog.heroImage?.url ?? '')
                        }
                        alt="cover"
                        width={1920}
                        height={1080}
                        className="w-full object-cover"
                      />
                    </div>
                    <h2 className="font-bold line-clamp-2">{blog.title}</h2>
                    <p className="text-muted-foreground text-sm line-clamp-3">{blog.description}</p>

                    <div className="flex justify-end items-center w-full">
                      <p className="text-muted-foreground">{moment(blog.createdAt).fromNow()} </p>
                      <motion.div
                        animate={blog.slug === activeHoverSlug ? { x: 0 } : { x: '100%' }}
                        transition={{ duration: 1, ease: [0.55, 0, 0, 1.01], delay: 0.4 * index }}
                        className="ms-auto flex justify-center items-center bg-primary text-primary-foreground"
                      >
                        <Link className="py-2 px-4 text-sm" href={`/blogs/${blog.slug}`}>
                          Detail
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
      <div className="w-full py-12 md:hidden gap-10 flex flex-col justify-start items-stretch">
        {blogs.map((blog: Post, index: number) => {
          return (
            <div
              onMouseEnter={() => setActiveHoverSlug(blog.slug)}
              className="flex gap-2 overflow-hidden group flex-col justify-start items-start"
              key={index}
            >
              <div className="relative w-full overflow-hidden">
                <motion.div
                  animate={{ y: [0, '100%'] }}
                  transition={{ duration: 1, ease: [0.55, 0, 0, 1.01], delay: 0.4 * index }}
                  className="absolute top-0 left-0 w-full h-full bg-white dark:bg-primary-foreground"
                ></motion.div>
                <Image
                  src={
                    typeof blog.heroImage === 'string'
                      ? blog.heroImage
                      : (blog.heroImage?.url ?? '')
                  }
                  alt="cover"
                  width={1920}
                  height={1080}
                  className="w-full object-cover"
                />
              </div>
              <h2 className="font-bold line-clamp-2">{blog.title}</h2>
              <p className="text-muted-foreground text-sm line-clamp-3">{blog.description}</p>

              <div className="flex justify-end items-center mt-8 w-full">
                <p className="text-muted-foreground">{moment(blog.createdAt).fromNow()} </p>
                <motion.div
                  // animate={blog.slug === activeHoverSlug ? { x: 0 } : { x: '100%' }}
                  // transition={{ duration: 1, ease: [0.55, 0, 0, 1.01], delay: 0.4 * index }}
                  className="ms-auto flex justify-center items-center bg-primary text-primary-foreground"
                >
                  <Link className="py-2 px-4 text-sm" href={`/blogs/${blog.slug}`}>
                    Detail
                  </Link>
                </motion.div>
              </div>
            </div>
          )
        })}
      </div>
    </ReactLenis>
  )
}
