"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative isolate overflow-hidden py-20 text-center">
            <Image
            src="/bg-gradient-2.png"
            alt="background"
            fill
            className="about-bg-img"
            />

            <h2 className="text-5xl font-bold">ABOUT ME</h2>

            <div className="common-line" />

            <p className="max-w-3xl mx-auto mt-4 text-gray-400">
                Welcome to the cinematic realm of Jimmy, where creativity meets technology to craft visually stunning narratives. 
                With a passion for storytelling and a keen eye for detail, I embark on a journey to transform ordinary footage into extraordinary visual experiences.
            </p>

            <div className="mt-12 w-[800px] mx-auto overflow-hidden">

                <motion.div
                className="flex gap-6 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                }}
                >

                
                {[1, 2, 1, 2].map((item, i) => (
                    <div key={i} className="shrink-0">

                    <Image
                        src={item === 1 ? "/about-2.png" : "/about-1.png"}
                        alt="about animation"
                        width={900}
                        height={400}
                        className="object-contain"
                    />

                    </div>
                ))}

                </motion.div>

            </div> 
    </section>
  );
}


