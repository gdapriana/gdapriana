"use client";

import ReactLenis from "lenis/react";
import Image from "next/image";
import { motion } from "motion/react";

const metadata = {
  profilePic:
    "https://lh3.googleusercontent.com/a/ACg8ocJv5Hn06WMGJPugcK2tMm9XrIPDSopUrUBlaBrt5wPFiraarNDKmA=s576-c-no",
  aboutPic: "/about-picture.JPG",
  about:
    '<p data-placeholder="Type or paste your content here!">Hello,</p><p>I Komang <strong>Gede Apriana</strong>, a <strong>Fullstack Developer</strong> and <strong>Machine Learning Developer</strong> from <strong>Bali, Indonesia</strong>, with more than 2 years of experience in the software development industry. Focusing on modern web development as well as artificial intelligence implementation, I have expertise in building efficient and innovative technology solutions.</p>',
};

const HomeRoot = () => {
  return (
    <ReactLenis className="h-full overflow-auto pt-[4rem] flex flex-col justify-start items-start">
      <div className="relative overflow-hidden">
        <motion.div
          animate={{ y: [0, "-100%"] }}
          transition={{ duration: 1.5, ease: [.55,0,0,1.01] }}
          className="absolute top-0 left-0 bg-white w-full h-full z-[2]"
        />
        <Image
          src={metadata.aboutPic}
          alt="about picture"
          width={1920}
          height={1080}
          className="w-full aspect-video grayscale"
        />
      </div>
      <div className="overflow-hidden">
        <motion.div
          animate={{ y: ["100%", 0] }}
          transition={{ duration: 1.5, ease: [.55,0,0,1.01] }}
          className="prose mt-8 z-[1] dark:text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: metadata.about }}
        ></motion.div>
      </div>
    </ReactLenis>
  );
};

export default HomeRoot;
