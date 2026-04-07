"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  src: string;
  icon: string;
  title: string;
};

export default function VideoCard({ src, icon, title }: Props) {
  return (
    <div className="flex flex-col items-center gap-3">

      <motion.div
        className="w-[260px] aspect-square relative overflow-hidden cursor-pointer"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >

        
        <Image
          src={src}
          alt="video"
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />

       
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-10"
          variants={{
            rest: { opacity: 1 },
            hover: { opacity: 0 },
          }}
        >
          <Image src={icon} alt="play" width={200} height={120} />
        </motion.div>

       
        <motion.div
          className="absolute inset-[2px] bg-black/50 border-[5px] border-purple-500 flex items-center justify-center z-20"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
        >

          <div className="flex flex-col items-center justify-center gap-2">

 
        <motion.div
            variants={{
            rest: { y: 60, opacity: 0 },
            hover: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.4 }}
        >
            <Image src={icon} alt="play" width={200} height={200} />
        </motion.div>

        
        <motion.span
            className="text-white font-semibold tracking-wider text-lg"
            variants={{
            rest: { y: -60, opacity: 0 },
            hover: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.4 }}
        >
            PLAY VIDEO
        </motion.span>

        </div>

        </motion.div>

      </motion.div>

      <h3 className="text-white font-semibold tracking-widest text-sm">
        {title}
      </h3>
    </div>
  );
}
