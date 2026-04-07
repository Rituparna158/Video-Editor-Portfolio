"use client";
 
import { useRef } from "react";
import PortfolioBg from "./PortfolioBg";
import VideoCard from "./VideoCard";
import { motion } from "framer-motion";
 
export default function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <section id="portfolio" className="relative isolate py-32 text-white overflow-hidden">

      <PortfolioBg />
 
      <div className="px-12 mb-10">

        <h2 className="text-[48px] font-extrabold tracking-[0.3em] leading-tight text-left">
            MY BEST EDITS
        </h2>     
         
      <div className="mt-3 h-[3px] w-[300px]
                      bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-blue-500 to-purple-500">
      </div>

      
      <div className="absolute right-12 overflow-hidden">

        <motion.div
          className="flex items-center origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 1, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.6, 0.8, 1],
          }}
        >

      
          <div className="w-[120px] h-[3px]
                          bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-blue-500 to-purple-500">
          </div>

         
          <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px]
                          border-t-transparent border-b-transparent border-l-yellow-400">
          </div>

        </motion.div>

      </div>

    </div>
     
      <div
        ref={scrollRef}
        className="overflow-x-auto no-scrollbar relative z-10"
      >
        <div className="flex gap-6 px-12 w-max">
 
          <VideoCard src="/Image-1.png" icon="/play-icon.png" title="VLOG"/>
          <VideoCard src="/Image-2.png" icon="/play-icon.png" title="REEL"/>
          <VideoCard src="/Image-3.png" icon="/play-icon.png" title="CASH COW"/>
          <VideoCard src="/Image-4.png" icon="/play-icon.png" title="CASH COW"/>
          <VideoCard src="/Image-5.png" icon="/play-icon.png" title="CASH COW"/>
          <VideoCard src="/Image-6.png" icon="/play-icon.png" title="PODCAST"/>
 
        </div>
      </div>
 
    </section>
  );
}
 