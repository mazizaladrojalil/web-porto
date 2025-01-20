"use client"
import {motion} from "framer-motion"
import Image from "next/image";
import { AnimateWords } from "../animation/AnimateWords"
import CardPorto from "./CardPorto";
import portoJson from "./json/CardPorto.json";
export default function Project() {
    return(
        <motion.section
        id="hero"
        className="pattern-2 relative z-10 flex min-h-screen w-full flex-col items-center md:justify-center  p-10"
        initial="initial"
        animate="animate"
        >
        <AnimateWords style="md:text-4xl text-2xl font-bold" title="My Portofolio" delay={0.8}/>
        <div className="container mt-10 flex md:flex-row flex-col justify-center gap-5">
            {portoJson.map((item, index) => (
                item.link ? (
                    <CardPorto key={index} title={item.title} description={item.description} image={item.image}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <button className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                            Visit Page
                        </button>
                        </a>
                    </CardPorto>
                ) : (
                    <CardPorto key={index} title={item.title} description={item.description} image={item.image} />
                )
            ))}
        </div>
    </motion.section>
    )
};
