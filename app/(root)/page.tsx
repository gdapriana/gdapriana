import Hero from "@/app/(root)/_components/hero";
import About from "@/app/(root)/_components/about";
import Work from "@/app/(root)/_components/work";
import Experience from "@/app/(root)/_components/experience";
import Contact from "@/app/(root)/_components/contact";

export default function Home() {
  return (
    <div className="w-full flex gap-16 flex-col justify-start items-stretch">
      <Hero />
      <About />
      <Work />
      <Experience />
      <Contact />
    </div>
  );
}
