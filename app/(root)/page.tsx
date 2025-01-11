import Hero from "@/app/(root)/_components/hero";
import About from "@/app/(root)/_components/about";
import Work from "@/app/(root)/_components/work";
import Service from "@/app/(root)/_components/service";
import Experience from "@/app/(root)/_components/experience";

export default function Home() {
  return (
    <div className="w-full flex gap-16 flex-col justify-start items-stretch">
      <Hero />
      <About />
      <Work />
      <Experience />
      <Service />
    </div>
  );
}
