"use client";
import { X } from "lucide-react";
import { useContext } from "react";
import { HamburgerContentContext } from "@/providers/hamburger-content";
import { motion } from "motion/react";

const HamburgerOpen = ({ nav }: { nav: { name: string; path: string }[] }) => {
  const { open, setOpen } = useContext(HamburgerContentContext);
  return (
    <motion.div
      animate={open ? { x: 0, borderRadius: "0% 0 0 0%" } : { x: "100%", borderRadius: "200% 0 0 200%" }}
      transition={{ duration: 1.5, ease: [0.17, 0.36, 0, 1.01] }}
      style={{ x: "100%" }}
      className="absolute overflow-hidden top-0 flex flex-col md:hidden justify-start items-stretch h-screen bg-white border z-[9999] w-full"
    >
      <div className="flex justify-start items-center p-8">
        <X onClick={() => setOpen(false)} />
      </div>
      {nav.map((item: { name: string; path: string }, index: number) => {
        return (
          <motion.a
            animate={open ? { y: 0, opacity: 1 } : { y: 20 }}
            transition={{ delay: 0.5 + 0.2 * index, duration: 1, ease: "anticipate" }}
            href={item.path}
            key={index}
            className="border-b opacity-0 border-primary/20 p-8"
          >
            {item.name}
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default HamburgerOpen;
