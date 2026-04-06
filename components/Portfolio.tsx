"use client";
 
import { useRef } from "react";
import PortfolioBg from "./PortfolioBg";
import VideoCard from "./VideoCard";
 
export default function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <section className="relative isolate py-32 text-white overflow-hidden">

      <PortfolioBg />
 
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl font-bold tracking-widest">
          MY BEST EDITS
        </h2>
        <div className="common-line" />
      </div>

      <div
        ref={scrollRef}
        className="overflow-x-auto no-scrollbar relative z-10"
      >
        <div className="flex gap-6 px-12 w-max">
 
          <VideoCard src="/Image-1.png" icon="/play-icon.png" />
          <VideoCard src="/Image-2.png" icon="/play-icon.png" />
          <VideoCard src="/Image-3.png" icon="/play-icon.png" />
          <VideoCard src="/Image-4.png" icon="/play-icon.png" />
          <VideoCard src="/Image-5.png" icon="/play-icon.png" />
          <VideoCard src="/Image-6.png" icon="/play-icon.png" />
 
        </div>
      </div>
 
    </section>
  );
}
 