"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoMdArrowRoundForward } from "react-icons/io";

export default function Home() {
  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <div className="flex flex-col items-center space-y-5">
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
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center text-white/50"
        >
          Generate stunning images from text using AI models for free
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="/create">
            <Button className="mt-3 bg-white text-black font-semibold p-5">
              Start Creating <IoMdArrowRoundForward />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
