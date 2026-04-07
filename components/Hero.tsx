"use client";
import Image from "next/image";
import BlobBackground from "./BlobBackground";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100vh] lg:h-screen flex flex-col lg:flex-row items-start lg:items-center justify-between overflow-hidden px-6 sm:px-10 lg:px-20 pt-[80px]"
    >
      <Image
        src="/hero-gradient.png"
        alt="hero"
        fill
        priority
        className="absolute inset-0 object-cover -z-20"
      />
      <BlobBackground />
      <div
       
        className="max-w-xl w-full mx-auto lg:mx-0 z-30 text-center lg:text-left mb-12 sm:mb-16 lg:mb-0"
      >
        <h2 className="text-gray-400 tracking-widest text-sm">
          JIMMY TURNER
        </h2>

        <div className="mt-3 h-[2px] w-[130px] mx-auto lg:mx-0 bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-blue-500 to-purple-500" />

       
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-white leading-tight">
          PROFESSIONAL VIDEO EDITOR
        </h1>

        <p className="text-gray-400 mt-4 text-sm">
          Making your videos look more cool.
        </p>

        <button className="contact-btn mt-6">
          LET&apos;S TALK
        </button>
      </div>

     
      <div
       
        className="relative z-10 w-full lg:w-1/2 h-auto lg:h-screen mt-20 sm:mt-24 lg:mt-0 flex items-end justify-center"
      >
       
        <div
          className="absolute top-[60%] left-[-10%] -translate-y-[40%] w-[60%] h-[100%] pointer-events-none"
          style={{
            opacity: 0.5,
            mixBlendMode: "screen",
            filter:
              "brightness(2.2) contrast(1.4) drop-shadow(0 0 20px rgba(255,255,255,0.6))",
          }}
        >
          <Image
            src="/lightning-1-left.png"
            alt="lightning left"
            fill
            className="object-contain opacity-10"
          />
        </div>

        <div
          className="absolute top-[60%] right-[-10%] -translate-y-[40%] scale-x-[-1] w-[60%] h-[100%] pointer-events-none"
          style={{
            opacity: 0.5,
            mixBlendMode: "screen",
            filter:
              "brightness(2.2) contrast(1.4) drop-shadow(0 0 20px rgba(255,255,255,0.6))",
          }}
        >
          <Image
            src="/lightning-1-left.png"
            alt="lightning right"
            fill
            className="object-contain opacity-10"
          />
        </div>

       
        <div className="relative w-full h-[80%] sm:h-[85%] lg:h-[95%] flex items-end justify-center z-10">
          <Image
            src="/hero-person.png"
            alt="Jimmy Turner"
            width={376}
            height={508}
            className="object-contain z-10"
            priority
          />

         
          <div className="absolute top-[35%] left-[5%] lg:left-[-10%] z-20 -rotate-12 animate-bounce-slow">
            <Image
              src="/hero-cutout-1.png"
              alt="Premiere Pro"
              width={160}
              height={160}
              className="drop-shadow-[0_0_25px_rgba(168,85,247,0.6)]"
            />
          </div>

          
          <div className="absolute top-[35%] right-[5%] lg:right-[0%] z-20 rotate-12 animate-pulse-slow">
            <Image
              src="/hero-cutout-2.png"
              alt="After Effects"
              width={140}
              height={140}
              className="drop-shadow-[0_0_25px_rgba(168,85,247,0.6)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}