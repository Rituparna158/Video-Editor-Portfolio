"use client";
 
import { motion } from "framer-motion";
 
export default function BlobBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
 
     
      <motion.div
        className="absolute w-[480px] h-[480px] rounded-full"
        style={{
          background:
            "linear-gradient(135deg, #9700FF, #57FF1C, #FF0000, #0038FF)",
          filter: "blur(100px)",
          opacity: 0.30,
          top: "5%",
          left: "-5%",
        }}
        animate={{
          x: [0, 630, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
 
  
      <motion.div
        className="absolute w-[480px] h-[480px] rounded-full"
        style={{
          background:
            "linear-gradient(135deg, #9700FF, #57FF1C, #FF0000, #0038FF)",
          filter: "blur(100px)",
          opacity: 0.30,
          top: "5%",
          right: "-5%",
        }}
        animate={{
          x: [0, -620, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}