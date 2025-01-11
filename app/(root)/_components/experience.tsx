import Link from "next/link";

export default function Experience() {
  return (
    <main className="md:p-20 p-8 flex gap-20 flex-col justify-start items-stretch">
      <div className="overflow-hidden flex justify-start items-center">
        <h1 className="md:text-5xl py-12 text-2xl font-bold text-muted-foreground w-[80%]">
          I have <span className="text-primary-foreground">2 years of experience</span> running successful design practices together with startups and top brands.
        </h1>
      </div>

      <div className="flex flex-col-reverse gap-12 md:flex-row justify-start items-stretch md:justify-center md:items-end">
        <div className="md:w-1/3 flex justify-center items-end gap-4">
          <Link className="py-4 px-7 md:py-6 md:px-10 border border-stone-800 text-primary-foreground" href="#">Download CV</Link>
          <Link className="py-4 px-7 md:py-6 md:px-10 border border-stone-800 text-primary-foreground" href="#">Connect Linkedin</Link>
        </div>
        <div className="md:w-2/3 flex flex-col justify-start items-stretch">
          <div className="border-b flex justify-between items-center py-8 border-stone-800">
            <h1 className="md:text-2xl text-xl text-primary-foreground font-bold">Bangkit Academy</h1>
            <h1 className="md:text-2xl text-xl hidden md:inline text-muted-foreground">Dicoding Indonesia</h1>
            <h1 className="md:text-2xl text-xl text-muted-foreground">2023</h1>
          </div>
          <div className="border-b flex justify-between items-center py-8 border-stone-800">
            <h1 className="md:text-2xl text-xl text-primary-foreground font-bold">Bangkit Academy</h1>
            <h1 className="md:text-2xl text-xl hidden md:inline text-muted-foreground">Dicoding Indonesia</h1>
            <h1 className="md:text-2xl text-xl text-muted-foreground">2023</h1>
          </div>
          <div className="border-b flex justify-between items-center py-8 border-stone-800">
            <h1 className="md:text-2xl text-xl text-primary-foreground font-bold">Bangkit Academy</h1>
            <h1 className="md:text-2xl text-xl hidden md:inline text-muted-foreground">Dicoding Indonesia</h1>
            <h1 className="md:text-2xl text-xl text-muted-foreground">2023</h1>
          </div>
          <div className="border-b flex justify-between items-center py-8 border-stone-800">
            <h1 className="md:text-2xl text-xl text-primary-foreground font-bold">Bangkit Academy</h1>
            <h1 className="md:text-2xl text-xl hidden md:inline text-muted-foreground">Dicoding Indonesia</h1>
            <h1 className="md:text-2xl text-xl text-muted-foreground">2023</h1>
          </div>
          <div className="border-b flex justify-between items-center py-8 border-stone-800">
            <h1 className="md:text-2xl text-xl text-primary-foreground font-bold">Bangkit Academy</h1>
            <h1 className="md:text-2xl text-xl hidden md:inline text-muted-foreground">Dicoding Indonesia</h1>
            <h1 className="md:text-2xl text-xl text-muted-foreground">2023</h1>
          </div>
        </div>
      </div>
    </main>
  )
}