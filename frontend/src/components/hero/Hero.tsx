"use client"
import { motion } from "framer-motion"
import HeroProfile from "./HeroProfile"

export default function Hero() {
    return(
        <motion.section
      id="hero"
      className="pattern-1 relative z-10 flex min-h-screen w-full flex-col items-center justify-center p-10"
    >
        <HeroProfile/>
    </motion.section>
    )
};
