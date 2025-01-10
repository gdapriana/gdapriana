import {cn} from "@/lib/utils";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-6 md:px-20 md:py-8 w-full flex justify-between items-center">
      <Brand
        full="Gede Apriana"
        short="GA"
        className="text-primary-foreground hover:text-muted-foreground duration-300 md:text-lg font-bold cursor-pointer"
      />
      <Nav />
    </header>
  )
}

export const Brand = ({ full, short, className }: {full: string; short: string; className?: string}) => {
  return (
    <>
      <h1 className={cn("hidden md:inline", className)}>{full}</h1>
      <h1 className={cn("md:hidden", className)}>{short}</h1>
    </>
  )
}

const Nav = () => {
  const items = [
    {name: "Work", path: "/work", className: "hidden md:inline" },
    {name: "About", path: "/about", className: "hidden md:inline" },
    {name: "Contact", path: "/contact", className: ""},
  ]
  return (
    <main className="flex justify-center items-center gap-12">
      {items.map((item, index) => {
        return (
          <Link key={index} className={cn("text-primary-foreground hover:text-muted-foreground duration-300", item.className)} href={item.path}>
            {item.name}
          </Link>
        )
      })}
    </main>
  )
}