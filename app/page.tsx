"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <div className="">
        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.95,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{ duration: 0.5 }}
          className="sm:text-4xl text-center md:text-6xl font-bold"
        >
          DAVINCI
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
            scale: 0.95,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-white/50"
        >
          Generate stunning images from text using AI models for free
        </motion.p>
      </div>
    </div>
  );
}
