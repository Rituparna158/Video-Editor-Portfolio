"use client"
import Image from "next/image";

export default function Hero(){
    return (
        <section id="hero" className="relative h-screen flex items-center justify-between overflow-hidden px-20 pt-[120px]">
            <Image
            src="/hero-gradient.png"
            alt="hero"
            fill
            priority
            className="absolute inset-0 object-cover -z-10"
            />
            
            <div className="max-w-xl z-20">

            <h2 className="text-gray-400">JIMMY TURNER</h2>

           <div className="mt-3 h-[3px] w-[130px]
                      bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-blue-500 to-purple-500">
        </div>

            <h1 className="text-5xl font-bold mt-4">PROFESSIONAL VIDEO EDITOR</h1>

            <p className="text-gray-400 mt-4">Making your videos look more cool.</p>

            <button className="contact-btn mt-6">
                LET&apos;S TALK
            </button>
            </div>
                  <div className="absolute right-[8%] top-[60%] -translate-y-1/2 w-[420px] h-[520px] z-10">

{/*        
        <Image
          src="/current-left.png"
          alt="lightning"
          fill
          className="object-contain scale-150 opacity-90 -z-10"
        /> */}

        <Image
          src="/hero-person.png"
          alt="person"
          width={500}
          height={500}
          priority
          className="object-contain object-top scale-95"
        />

       
        <Image
          src="/hero-cutout-1.png"
          alt="pr"
          width={200}
          height={200}
          className="absolute  top-[-10px] left-[-60px]"
          
        />
        <Image
          src="/hero-cutout-2.png"
          alt="ae"
          width={180}
          height={150}
          className="absolute top-[120px] right-[-40px]"
          
        />

      </div>

        </section>
    )
}