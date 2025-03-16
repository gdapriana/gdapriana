"use client";
import { ReactNode } from "react";
import Sidebar from '@/app/(frontend)/(root)/_components/sidebar'
import Header from '@/app/(frontend)/(root)/_components/header'
import HamburgerOpen from '@/app/(frontend)/(root)/_components/hamburger-open'

const navigations = [
  { name: "Blog", path: "/blogs" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Socials", path: "/socials" },
];

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="h-screen relative grid grid-cols-1 md:grid-cols-[30%_70%] grid-rows-[auto_1fr] md:grid-rows-1">
      <HamburgerOpen nav={navigations} />
      <aside className="hidden md:flex sticky top-0 p-14">
        <Sidebar nav={navigations} />
      </aside>
      <header className="md:hidden">
        <Header />
      </header>
      <div className="overflow-auto px-[2rem] lg:pr-[30%] md:pr-[15%]">{children}</div>
    </main>
  );
}
