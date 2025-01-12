import Link from "next/link";

export default function Contact() {
  return (
    <main className="md:p-20 p-8 h-[70vh] flex gap-8 flex-col justify-between items-stretch">
      <h1 className="text-primary-foreground text-[2rem] text-end font-bold md:text-[4rem]">Let's Connect</h1>
      <p className="w-[80%] mt-auto text-xl text-muted-foreground md:text-3xl">Feel free to contact me if having any questions. I'm available for new projects or just for chatting.</p>
      <div className="grid lg:grid-cols-3 lg:grid-rows-1 grid-cols-1 grid-rows-3">
        <Link href="#" className="flex bg-stone-900 justify-center items-center p-10">
          <h1 className="text-primary-foreground text-lg md:text-2xl">Book a Call</h1>
        </Link>
        <Link href="#" className="flex bg-stone-800 justify-center items-center p-10">
          <h1 className="text-primary-foreground text-lg md:text-2xl">Send Email</h1>
        </Link>
        <Link href="#" className="flex bg-stone-700 justify-center items-center p-10">
          <h1 className="text-primary-foreground text-lg md:text-2xl">Connect Instagram</h1>
        </Link>
      </div>
      <div className="flex justify-center items-center gap-8">
        <p className="text-muted-foreground">Gianyar, Bali</p>
        <div className="flex-1 h-[1px] bg-stone-800"/>
        <p className="text-muted-foreground">Indonesia</p>
      </div>
    </main>
  )
}